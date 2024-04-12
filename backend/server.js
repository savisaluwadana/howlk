const express = require("express");
const app = express();
const cors = require("cors");
const Database = require("./database/db");
require("dotenv").config();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/mains", require("./routes/mains"));
app.use("/starters", require("./routes/starters"));
app.use("/courses", require("./routes/courses"));
console.log("testing");

app.listen(process.env.PORT, async () => {
  await Database();
  console.log(`Servers up on port ${process.env.PORT}`);
});
