const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  const todos = await Todo.find({ authorID: req.body.authorID });
  if (todos) return res.json({ todos });
  res.json({ status: "not found" });
});

module.exports = router;
