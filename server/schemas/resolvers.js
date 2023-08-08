// const { AuthenticationError } = require("apollo-server-express");
const { Shelter, Donation } = require("../models");
// const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "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"
);

// resolvers graphQL = ROUTES in RESTful APIs

const resolvers = {
  Query: {
    shelters: async () => {
      return await Shelter.find();
    },
    shelter: async (parent, { shelterId }) => {
      return await Shelter.findOne({ _id: shelterId });
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const donation = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "Donation",
              },
              unit_amount: args.amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return donation;
    },
  },
  Mutation: {
    addShelter: async (parent, args) => {
      const shelter = await Shelter.create(args);
      return shelter;
    },
    addDonation: async (parent, args) => {
      const donation = await Donation.create(args);

      const shelter = await Shelter.findOneAndUpdate(
        { _id: args.shelterId },
        { $addToSet: { donations: donation._id } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
