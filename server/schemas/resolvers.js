const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Shelter, Donation } = require("../models");
const stripe = require("stripe")(
  "sk_test_51NctQVGRez86EpyP0cMwEAzIyp2p6I1rmiVMbiJILNs86nYitp7qn7pOchXv3aVczQO1V5OYTkHIwRtwFzfY64K500g5sb91eD"
);

// resolvers graphQL = ROUTES in RESTful APIs
// randle the queries and mutations
// constext from apollo-server to get the headers

const resolvers = {
  Query: {
    // The currently logged in user.
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
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
    login: async (parent, { loginName, loginPassword }) => {
      if (!loginName)
        throw new AuthenticationError("Need a username or email!");

      // User can login with username OR email.
      const user = await User.findOne({
        $or: [{ username: loginName }, { email: loginName }],
      });

      // The user does not exist or the password is incorrect.
      if (!user || !(await user.checkPassword(loginPassword, user.password))) {
        throw new AuthenticationError("Incorrect credentials.");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { userInput }) => {
      const user = await User.create(userInput);
      const token = signToken(user);

      return { token, user };
    },
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
