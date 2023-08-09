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

    donation: async (parent, { _id }, context) => {
      const shelter = await Shelter.findById(_id).populate("donations");
      return shelter.donations.id(_id);
    },

    // payment will be processed by stripe but we want receipt to be saved in our database
    checkout: async (parent, args, context) => {
      // refer = localhost:3000 client will send the request and localhost:3001 server will receive the request
      const url = new URL(context.headers.referer).origin;

      // create a new donation
      await Donation.create(args.donation);
      console.log(args.donation);

      const line_items = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to Shelter Seek",
              description: "Help animals in shelters and rescues",
            },
            unit_amount: amount * 100, // Convert the amount to cents
          },
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
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
