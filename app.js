//adding requirements
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//telling express to use files inside public directory and other dependencies
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["maddy" , "tom" , "Jack"
                , "chuck" , "bobby"];
// routes
app.get("/",function(req,res){
  res.send("This is HOME PAGE !");
});

app.get("/friends",function(req,res){
  res.render("friends.ejs",{friends:friends});
});

app.get("/home/:parameter",function(req,res){
  var thing = req.params.parameter;
  res.render("home.ejs", {thing: thing});
  //home.ejs will be automatically served
  //from views directory
  //second parameter in function is object of javascript
  //thing on the left
  //will be used in ejs file and the thing
  //on the right is thing containing value
  //of parameter
});

app.post("/addfriend",function(req,res){
  friends.push(req.body.newfriend);
  res.send("you have reached the post route");
  //req.body contains details entered in post request
  //initially we get undefined because express does
  //automatically converts it into js object
  //to do that install (npm install body-parser --save)
  console.log(req.body);
});


//Tell express to listen for requests or start server:p
app.listen(3000,'localhost', function(){
  console.log("server has started");
});
