import mongoose from "mongoose";

export default connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shelter_seek_db",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
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
