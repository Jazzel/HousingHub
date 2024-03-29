const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "admin",
    },
    society: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Active", "Blocked"],
      default: "Pending",
    },
    confirmationCode: {
      type: String,
    },
    nic: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("users", UserSchema);
