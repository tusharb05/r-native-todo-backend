const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.json({ status: "email exists" });

  //Hashing passwords
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const saved = await newUser.save();
    res.json({ status: "successfully registered", ...saved._doc });
  } catch (error) {
    res.json({ status: "error in registering", error: error });
  }
});

module.exports = router;
