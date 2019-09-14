const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: String,
  viewCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
const UrlShortner = mongoose.model("UrlShortner", urlSchema);

module.exports = UrlShortner;
