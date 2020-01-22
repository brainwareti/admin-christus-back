const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();

mongoose.connect(
  "mongodb+srv://brainware:BVJNB1QlD0CdkVDy@cluster0-9jg2y.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

app.get("/", () => {
  return "test";
});

app.listen(port, () => {
  console.log("In air!");
});
