const express = require("express");
const app = express();
const port = 8000;

app.get("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`somthing error while running server: ${err}`);
  }
  console.log(`server running on port: ${port}`);
});
