exports.shorturl = function(length = 5) {
  var arr = "abcdefghijklmonpqrstuvwxyz".split("");
  var str = "";
  for (let i = 0; i < length; i++) {
    str += arr[Math.round(Math.random() * (arr.length - 1))];
  }
  return str;
};
