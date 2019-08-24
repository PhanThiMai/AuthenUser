const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true, max: 20, min: 5 },
    password: { type: String, required: true, max: 20, min: 5 },
    fullname: { type: String, required: false, max: 50, min: 5 },
    email: { type: String, required: false, unique: true, max: 100, min: 5 },
  });
  
module.exports = mongoose.model("User", userSchema);
