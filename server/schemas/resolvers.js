// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");
const { Shelter, Donation } = require("../models");
const stripe = require("stripe")(
  "sk_test_51NctQVGRez86EpyP0cMwEAzIyp2p6I1rmiVMbiJILNs86nYitp7qn7pOchXv3aVczQO1V5OYTkHIwRtwFzfY64K500g5sb91eD"
);

// resolvers graphQL = ROUTES in RESTful APIs
// randle the queries and mutations
// constext from apollo-server to get the headers

const resolvers = {
  Query: {
    shelters: async () => {
      return await Shelter.find();
    },

    checkout: async (parent, args, context) => {
      const shelterId = args.shelterId;
      const amount = args.amount;
      console.log(shelterId, amount);
      // refer = localhost:3000 client will send the request and localhost:3001 server will receive the request
      const url = new URL(context.headers.referer).origin;
      // create a new donation
      const donation = new Donation({ shelter: shelterId, amount });
      // console.log("donation", donation);
      // save the donation
      await donation.save();
      // // get the shelter
      const shelter = await Shelter.findById(shelterId);
      // stripe checkout session
      console.log("shelter", shelter);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        // success url will be the url of the client
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
        // line_items is the donation
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: shelter.name,
                description: shelterId,
              },
              unit_amount: parseInt(amount * 100),
            },
            quantity: 1,
          },
        ],
        mode: "payment",
      });
      return { session: session.id };
    },
  },

  Mutation: {
    addShelter: async (
      parent,
      {
        name,
        address,
        phone,
        email,
        password,
        website,
        description,
        image,
        BankTransitNumber,
        BankInstitutionNumber,
        BankAccount,
      }
    ) => {
      const shelter = await Shelter.create({
        name,
        address,
        phone,
        email,
        password,
        website,
        description,
        image,
        BankTransitNumber,
        BankInstitutionNumber,
        BankAccount,
      });
      return shelter;
    },
    addDonation: async (parent, { shelterId, donation }) => {
      const shelter = await Shelter.findOneAndUpdate(
        { _id: shelterId },
        { $push: { donations: donation } },
        { new: true }
      );
      return shelter;
    },
  },
};

module.exports = resolvers;
