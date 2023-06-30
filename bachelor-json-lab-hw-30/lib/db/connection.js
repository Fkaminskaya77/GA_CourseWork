

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/bachelor_nation', { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = mongoose;

