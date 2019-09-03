const express = require("express");
const path = require("path");
const app = express();

const SocketIO = require("socket.io");

// Settings
app.set("port", process.env.PORT || 3000); //Configuramos el puerto

//static files

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
}); //Escuchamos en el puerto configurado anteriormente

const io = SocketIO(server);

//WebSockets
io.on("connection", socket => {
  console.log("new connection", socket.id);
  socket.on("chat:message", data => {
    io.sockets.emit("chat:message-server", data);
  });
  socket.on("chat:typing", username => {
    socket.broadcast.emit("chat:user-typing", username);
  });
});
