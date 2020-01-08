const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://brainware:BVJNB1QlD0CdkVDy@cluster0-9jg2y.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes"));

app.get("/", () => {
  return "test";
});

app.listen(3000, () => {
  console.log("In air!");
});
