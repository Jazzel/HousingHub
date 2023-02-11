const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SOSSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    society: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("soss", SOSSchema);
