const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  let { todoID } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(todoID, { completed: true });
  if (updatedTodo) return res.json({ status: "updated", ...updatedTodo });
  res.json({ status: "failure" });
});

module.exports = router;
