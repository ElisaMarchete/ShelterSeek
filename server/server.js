import connectToDB from "./config/connection.js";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShelterSeek");
});

await connectToDB();

// testing db connection.
// delete this later.
import User from "./models/User.js";
const testUserInfo = {
  firstName: "Daler",
  lastName: "Singh",
  email: "dalersingh@email.com",
  password: "password",
  role: "shelter",
  phone: "123-456-7890",
  address: "123 Main St",
};
const testUser = new User(testUserInfo);
testUser.save({ testUser });
