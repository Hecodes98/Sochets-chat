# Socket-chat
Chat creado con Node.js, Express y Socket.io
Proyecto realizado para entender el funcionamiento de las apps en tiempo real, realizado con socket.io y para entenderlo mejor, se realizo un chat.

## Para utilizarlo
*Para usarlo, puedes clonar el repositorio*
``git clone https://github.com/Hecodes98/Sockets-chat.git ``

**_Luego realiza un npm i para descargar todas las dependencias_**
``npm i``

*Por ultimo como puedes ver en el package.json, hay una serie de scripts*
    // Settings
app.set("port", process.env.PORT || 3000); //Configuramos el puerto
 Corre el script dev en tu terminal con el siguiente comando
 
 ``npm run dev``
 Y listo pueden abrir en tu navegador tu localhost:3000 o dentro del index.js cambiar el puerto al puerto que desees.
 ``// Settings
app.set("port", process.env.PORT || 3000); //Configuramos el puerto``
Para verlo en funcionamiento puedes abrir varias ventanas en tu navegador para ver como los mensajes se replican en todas las ventanas.

