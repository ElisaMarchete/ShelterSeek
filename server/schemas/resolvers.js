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
      // get the shelterid and amount from the client utils/queries.js
      const shelterId = args.shelterId;
      const amount = args.amount;
      // refer = localhost:3000 client will send the request and localhost:3001 server will receive the request
      const url = new URL(context.headers.referer).origin;
      // get the shelterid from the database
      const shelter = await Shelter.findById(shelterId);
      // stripe checkout session
      // console.log("shelter", shelter);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        // success url will be the url of the client
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}&shelterId=${shelterId}&amount=${amount}`,
        cancel_url: `${url}/failed`,
        // line_items is the donation
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: shelter.name,
                description:
                  "Please complete your donation using the secure Stripe payment form. Thank you!",
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
      console.log(shelter);
      return shelter;
    },
    addDonation: async (parent, args, context) => {
      // get the shelterid and amount from the client utils/queries.js
      const shelterId = args.shelterId;
      const amount = args.amount;
      // create a new donation
      const donation = new Donation({ shelterId, amount });
      // save the donation
      await donation.save();

      return donation;
    },
  },
};

module.exports = resolvers;
