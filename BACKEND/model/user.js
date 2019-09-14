const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  url: [{ type: Schema.Types.ObjectId, ref: "urlShorten" }]
});

userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.isValidatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
