const socket = io();

//DOM Elements
let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let action = document.getElementById("actions");

btn.addEventListener("click", () => {
  if (username.value && message.value) {
    socket.emit("chat:message", {
      username: username.value,
      message: message.value
    });
  } else {
    alert("Campos obligatorios, porfavor llenelos todos");
  }
});

message.addEventListener("keypress", () => {
  socket.emit("chat:typing", username.value);
});

socket.on("chat:message-server", data => {
  action.innerHTML = "";
  output.innerHTML += `<p>
        <strong> ${data.username} </strong> : ${data.message}
    </p>`;
});

socket.on("chat:user-typing", username => {
  action.innerHTML = `<p>
        <em>${username}</em> : is typing a message
    </p>`;
});
