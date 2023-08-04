import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shelterSeekDB"
    );

    const db = mongoose.connection;

    db.on("error", (err) => {
      console.error("MongoDB connection error: ", err);
    });

    db.once("open", () => {
      console.log("Connected to MongoDB database");
    });
  } catch (err) {
    console.error(err);
  }
};

export default connectToDB;
