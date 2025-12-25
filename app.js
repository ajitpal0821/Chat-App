//web socket server
const express = require('express');
const app = express();
const path = require('path')
const PORT = 4000

app.use(express.static(path.join(__dirname, './Public')))
const server = app.listen(PORT, () => {
    console.log('App Running')
})

const { Server } = require('socket.io')//returns object
const io = new Server(server);// create socket.io server instance
let socketConnected = new Set();
io.on('connection', onConnected)

function onConnected(socket) {
    console.log(socket.id)
    socketConnected.add(socket.id);
    io.emit('Client-total',socketConnected.size)// it will caught in main.js file

    socket.on('disconnect', () => {
        socketConnected.delete(socket.id)
        io.emit('Client-total',socketConnected.size)
    })
    
    // message caught  from one user
    socket.on("sent-message",(data)=>{
    console.log("received-message",data)

    //sending message to another users

    socket.broadcast.emit('chat-message',data)
    })

    socket.on('feedback',(data)=>{
        socket.broadcast.emit('feedback',data)
    })
}
