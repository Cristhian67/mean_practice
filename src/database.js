
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/mean-employees")
    .then((db) => console.log("Db is connected"))
    .catch((error) => console.error(error));