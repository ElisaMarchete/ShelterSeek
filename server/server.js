const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();

// import db from "./config/connection.js";
// import express from "express";

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("ShelterSeek");
// });

// const start = async () => {
//   db.on("error", (err) => {
//     console.error("MongoDB connection error: ", err);
//   });

//   db.once("open", () => {
//     console.log("Connected to MongoDB database");
//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   });
// };

// start();
// testing db connection.
// delete this later.
// import User from "./models/User.js";
// const testUserInfo = {
//   firstName: "Daler",
//   lastName: "Singh",
//   email: "dalersingh1234@email.com",
//   password: "password",
//   role: "shelter",
//   phone: "123-456-7890",
//   address: "123 Main St",
// };
// const testUser = new User(testUserInfo);
// testUser.save({ testUser });
