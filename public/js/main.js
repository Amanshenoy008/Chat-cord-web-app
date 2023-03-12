const socket = io()
const chatform = document.getElementById('chat-form')
const chatmessages = document.querySelector('.chat-messages')

socket.on('message',(message)=>{
  
  outputmsg(message)

  chatmessages.scrollTop = chatmessages.scrollHeight
})

const {username , room } = Qs.parse(location.search,{
  ignoreQueryPrefix: true
})

console.log(username, room)


socket.emit('joinroom',{username,room})

chatform.addEventListener('submit',(e)=>{
  e.preventDefault()

  const msg = e.target.elements.msg.value
  socket.emit('chat-message',msg)
  document.getElementById('msg').value = ' '
})

const outputmsg= (message)=>{
  console.log(message)
  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = `<p class='meta'>${message.username}<span>${message.time}</span></p><p class='text'>${message.text}</p>`

  document.querySelector('.chat-messages').appendChild(div)

}
