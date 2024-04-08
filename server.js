//require path module which is node.js core module
const path = require("path");
//set up our server to handle socket.io, bring in the http module
const http = require("http");
//create express server
const express = require("express");
//bring in socket.io
const socketio = require("socket.io");
//initialise a variable called app and set that to express
const app = express();
const server = http.createServer(app);
//initialise a variable io and set that to socketio and pass in, our server.
const io = socketio(server);
//set static folder
app.use(express.static(path.join(__dirname, "public")));
//run when a client connects, take the io object and say .on which is gonna listen for some kind of event, our connection and then this will take an arrow function with socket as a parameter
io.on("connection", (socket) => {
  console.log("New WS connection....");
  //to emit a msg back and forth bw server and client
  //this will emit to single client tht is connected
  socket.emit("message", "welcome to TalkEase");
  //broadcasts to everybody when a user connects
  socket.broadcast.emit("message", "a user has joined the chat");
  //runs when a client disconnects
  socket.on("disconnect", () => {
    io.emit("message", "a user has left the chat");
  });
});
// create port , default port number or look to see environment variable called port
const PORT = 3200 || process.env.PORT;
//and on the app variable(object) we can call listen to run a server that takes in a port number
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
