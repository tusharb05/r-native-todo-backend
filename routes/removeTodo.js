const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  let { todoID } = req.body;

  let removedTodo = await Todo.findByIdAndDelete(todoID);
  if (removedTodo) return res.json({ status: "removed" });
  res.json({ status: "failed removing" });
});

module.exports = router;
