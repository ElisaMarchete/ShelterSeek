const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Shelter, Donation, Pets } = require("../models");
const stripe = require("stripe")(
  "sk_test_51NctQVGRez86EpyP0cMwEAzIyp2p6I1rmiVMbiJILNs86nYitp7qn7pOchXv3aVczQO1V5OYTkHIwRtwFzfY64K500g5sb91eD"
);

// resolvers graphQL = ROUTES in RESTful APIs -> randle the queries and mutations
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

    getShelter: async (parent, args) => {
      const _id = args._id;
      try {
        const shelter = await Shelter.findOne({ _id: _id });
        console.log(shelter);
        return shelter;
      } catch (error) {
        throw new Error("Error fetching shelter: " + error.message);
      }
    },
    shelters: async (parent, { filters, sort }, context) => {
      try {
        let query = {};

        if (filters?.name) {
          query.name = { $regex: filters.name, $options: "i" };
        }

        if (filters?.rating !== undefined) {
          query.rating = { $gte: filters.rating }; // Use $gte operator for greater than or equal
        }

        if (filters?.dog !== undefined) {
          query.dog = filters.dog;
        }

        if (filters?.cat !== undefined) {
          query.cat = filters.cat;
        }

        if (filters?.rabbit !== undefined) {
          query.rabbit = filters.rabbit;
        }

        const shelters = await Shelter.find(query);

        if (sort) {
          const { field, direction } = sort;
          shelters.sort((a, b) => {
            if (direction === "ASC") {
              return a[field] - b[field];
            } else {
              return b[field] - a[field];
            }
          });
        }

        return shelters;
      } catch (err) {
        throw new Error("Error fetching shelters: " + err);
      }
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

    pets: async (parent, args, context) => {
      const pets = await Pets.find({ shelterId: args.shelterId });
      return pets;
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
      const existingUser = await User.findOne({ email: userInput.email });
      const existingShelter = await Shelter.findOne({ email: userInput.email });

      if (existingUser || existingShelter)
        throw new Error("Email already taken.");

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
      const existingUser = await User.findOne({ email });
      const existingShelter = await Shelter.findOne({
        email,
      });

      if (existingUser || existingShelter)
        throw new Error("Email already taken.");

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

      // update the shelter with the new donation
      await Shelter.findOneAndUpdate(
        { _id: args.shelterId },
        { $push: { donations: donation } },
        { new: true }
      );
      return donation;
    },

    addPet: async (parent, args, context) => {
      const shelterId = args.shelterId;
      const image = args.image;

      const pet = await Pets.create({ shelterId, image });

      await Shelter.findOneAndUpdate(
        { _id: args.shelterId },
        { $push: { pets: pet._id } },
        { new: true }
      );

      return pet;
    },
  },
};

module.exports = resolvers;
