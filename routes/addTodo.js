const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/", async (req, res) => {
  let { todo, authorID } = req.body;

  if (todo !== "" && authorID !== "") {
    if (todo !== undefined && authorID !== undefined) {
      const newTodo = new Todo({
        todo: todo,
        authorID: authorID,
        completed: false,
        starred: false,
      });
      const saved = await newTodo.save();
      if (saved) res.json({ status: "todo saved", ...saved._doc });
      res.json({ status: "failed to save todo" });
    } else {
      res.json({ status: "null values given" });
    }
  } else {
    res.json({ status: "empty values given" });
  }
});

module.exports = router;
