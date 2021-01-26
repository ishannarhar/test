const express = require("express")

const bodyParser = require("body-parser")
//App will be using the express module
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(request,response){

  response.sendFile(__dirname + "/calculator.html")
})

app.post("/",function(request, response){

  var num1 = Number(req.body.n1)
  var num2 = Number(req.body.n2)
  var result = num1 / num2

  response.send("The result of the calculation is " + result)
})




//Spin up our server
app.listen(3000,function(){
  console.log("server started on port 3000")
})
