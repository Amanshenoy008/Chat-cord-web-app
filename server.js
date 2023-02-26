const express = require('express');
const app = express()
const PORT =3000 || process.env.PORT
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const socket = require('socket.io')
const formatmessage = require('./utils/messages')
const io = socket(server)

app.use(express.static(path.join(__dirname,'/public')))


io.on('connection',(socket)=>{
    

    socket.emit('message',formatmessage('Chat Bot','welcome to chatcord'))
    socket.broadcast.emit('message',formatmessage('Chat Bot','a user has joined'))
    

    socket.on('chat-message',(msg)=>{
        io.emit('message',formatmessage('lol',msg))
    })


    socket.on('disconnect',()=>{ 

        io.emit('message',formatmessage('Chat Bot','a user has left!!!'))
    })
})








server.listen(PORT,()=>{
    console.log(PORT)
})