var express = require("express");
var app = express();
app.get("doctor.*.web",function(req,res){

  res.send(req.baseURI);
});

app.listen(4000,function(err){
  if(err){console.log("err")}
  console.log("server listen 3000");
})
