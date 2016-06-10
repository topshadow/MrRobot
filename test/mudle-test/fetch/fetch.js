var fetchUrl = require("fetch").fetchUrl;
// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("http://kreata.ee/iso-8859-15.php", function(error, meta, body){
  console.log(body.toString());
});
