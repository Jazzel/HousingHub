const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocietySchema = new Schema({
  society: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("societies", SocietySchema);
