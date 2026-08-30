
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectDB = async () => {
  try {
await mongoose.connect(
  "mongodb+srv://haris:q786786@cluster0.2cej2vd.mongodb.net/myDatabase?retryWrites=true&w=majority"
);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;