const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  let { todoID } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(todoID, { starred: false });
  if (updatedTodo) return res.json({ status: "updated", ...updatedTodo._doc });
  //res.json({todoID})
  res.json({ status: "failure" });
});

module.exports = router;
