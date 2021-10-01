const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const registerationRoute = require("./routes/resgister");
const loginRoute = require("./routes/login");
const addTodoRoute = require("./routes/addTodo");

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

app.listen(PORT, () => console.log("server up"));
