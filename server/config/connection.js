// import mongoose from "mongoose";

// async function connectToDB() {
//   await mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shelterSeekDB"
//   );
// }

// connectToDB();

// export default mongoose.connection;

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/shelterSeekDB"
);

module.exports = mongoose.connection;
