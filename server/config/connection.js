const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shelterSeekDB"
);

module.exports = mongoose.connection;

/*
mongodb+srv://elisa:Melges09%40@elisamarchete.eieztfu.mongodb.net/shelterSeekDB?retryWrites=true&w=majority
*/
