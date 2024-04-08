const chatForm = document.getElementById("chat-form");
// create a variable called socket and set that to IO which we have access to because of that script in chat.html
const socket = io();
//the msg emitted on the server side is catched here at client side
socket.on("message", (message) => {
  console.log(message);
});
//as we are connected it logs here on the server and then it emits the msg which we then catch here and then log
// we are creating an event listener for the submission of tht form
//take chatForm and add event listener, we want to listen for a submit and thts gonna take in a function where we pass in a event parameter here becoz when u submit a form it automatically submits to a file and to stop tht from happening we can use e.preventDefault, to prevent the default behaviour
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // to get the txt input and we could get tht in this ways
  const msg = e.target.elements.msg.value;
  console.log(msg);
});
