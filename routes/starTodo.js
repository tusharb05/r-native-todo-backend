const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  let { todoID } = req.body;
  // res.json({ todoID });
  const updatedTodo = await Todo.findByIdAndUpdate(todoID, { starred: true });
  if (updatedTodo) return res.json({ status: "updated", ...updatedTodo._doc });
  res.json({ status: "failure" });
});

module.exports = router;
