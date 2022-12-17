//const http =require("http");
//const fs = require("fs");

//const server = http.createServer((req, res) => {
//const read = fs.createReadStream("./static/index.html");
//read.pipe(res);
//})

//server.listen(3000);
//console.log(`Server on port ${3000}`);

//SERVER CON EXPRESS

//const express = require ("express");

//const app = express();

//app.get("/", (req, res) => {
// res.sendFile("./static/index.html" , {
//   root: __dirname
//});
//});

/*const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.send("lista de productos");
});
app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.listen(3000);
console.log(`Server on port ${3000}`);*/
let arr = [ 1, 2, 3 ]
arr[10] = "hello"

console.log(arr.length)
