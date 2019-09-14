const mongoose = require("mongoose");
const UrlShortID = require("../modules/urlShortId");
const Schema = mongoose.Schema;
const urlSchema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: String,
  viewCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

urlSchema.pre("save", function(next) {
  this.shortUrl = UrlShortID.shorturl();
  next();
});

const UrlShortner = mongoose.model("UrlShortner", urlSchema);

module.exports = UrlShortner;
