const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (!userExists) return res.json({ status: "incorrect email" });

  const correctPassword = await bcrypt.compareSync(
    req.body.password,
    userExists.password
  );
  if (!correctPassword) return res.json({ status: "incorrect password" });

  if (req.body.username !== userExists.username)
    return res.json({ status: "incorrect username" });

  res.json({ status: "logged in", ...userExists._doc });
});

module.exports = router;
