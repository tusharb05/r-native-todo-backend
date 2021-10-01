const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const registerationRoute = require("./routes/resgister");
const loginRoute = require("./routes/login");
const addTodoRoute = require("./routes/addTodo");
const removeTodoRoute = require("./routes/removeTodo");
const getTodosRoute = require("./routes/getTodos");
const starTodoRoute = require("./routes/starTodo");
const unStarTodoRoute = require("./routes/unStarTodo");
const completeTodoRoute = require("./routes/completeTodo");

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use("/api/user/register", registerationRoute);
app.use("/api/user/login", loginRoute);
app.use("/api/todo/add", addTodoRoute);
app.use("/api/todo/remove", removeTodoRoute);
app.use("/api/todo/get", getTodosRoute);
app.use("/api/todo/star", starTodoRoute);
app.use("/api/todo/unstar", unStarTodoRoute);
app.use("/api/todo/complete", completeTodoRoute);

app.listen(PORT, () => console.log("server up"));
