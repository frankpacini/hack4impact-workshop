const port = 3050; 
const io = require("socket.io")(port);
const Message = require("./Message");

console.log("Server running on port " + port);
console.log("Life is pain");
io.on("connection", function(socket) {

    console.log("User connected");

     socket.on("message", function(data){
         const username = data.username;
         const message = data.message; 
         console.log("Message received from " + data.username);
         io.emit("message", Message.format(message, username));
     })
 })

