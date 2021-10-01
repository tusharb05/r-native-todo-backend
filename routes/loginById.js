const router = require("express").Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  let { authorID } = req.body;
  const user = await User.findById(authorID);
  if (user) return res.json({ status: "logged in", data: { ...user._doc } });
  res.json({ status: "invalid id" });
});

module.exports = router;
