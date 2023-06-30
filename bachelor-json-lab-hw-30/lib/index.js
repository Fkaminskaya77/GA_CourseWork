const express = require("express");
const app = express();
const { bachelor, bachelorette } = require("./routes");

app.use(bachelor);

app.listen(3000, () => console.log("listening on port 3000"));
