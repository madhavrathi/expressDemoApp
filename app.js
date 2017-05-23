//adding requirements
var express = require("express");
var app = express();

//telling express to use files inside public directory
app.use(express.static("public"));

// routes
app.get("/",function(req,res){
  res.send("This is HOME PAGE !");
});

app.get("/friends",function(req,res){
  var friends = ["maddy" , "tom" , "Jack"
                  , "chuck" , "bobby"];
  res.render("friends.ejs",{friends:friends});
});

app.post("/addfriend",function(req,res){
  res.send("you have reached the post route");
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


//Tell express to listen for requests or start server:p
app.listen(3000,'localhost', function(){
  console.log("server has started");
});
