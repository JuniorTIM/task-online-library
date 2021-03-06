const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4000;

app.use(express.json());
app.use(require("./routes/Book"))
app.use(require("./routes/Genre"))
app.use(require("./routes/Review"))
app.use(require("./routes/User"))

mongoose
  .connect(
    "mongodb+srv://JuniorTIM:03032004Asum@cluster0.kzst7.mongodb.net/Twitter?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
