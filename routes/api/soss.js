const Sos = require("../../models/SOS");
const express = require("express");
const router = express.Router();

// @route   POST api/sos
// @desc    Create a new SOS
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const newSOS = new Sos({
      user,
      society: user.society,
    });

    const sos = await newSOS.save();

    res.json(sos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
