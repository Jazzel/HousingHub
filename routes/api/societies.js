const Society = require("../../models/Society");
const express = require("express");
const router = express.Router();

// @route   GET api/societies
// @desc    Get all societies
// @access  Public
router.get("/", async (req, res) => {
  try {
    const societies = await Society.find();
    res.send(societies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
