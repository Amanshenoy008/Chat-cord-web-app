const socket = io()
const chatform = document.getElementById('chat-form')
const chatmessages = document.querySelector('.chat-messages')

socket.on('message',(message)=>{
  console.log(message)
  outputmsg(message)

  chatmessages.scrollTop = chatmessages.scrollHeight
})


chatform.addEventListener('submit',(e)=>{
  e.preventDefault()

  const msg = e.target.elements.msg.value

  socket.emit('chat-message',msg)
  document.getElementById('msg').value = ' '
})

const outputmsg= (message)=>{
  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = `<p class='meta'>Anon</p><p class='text'>${message}</p>`

  document.querySelector('.chat-messages').appendChild(div)

}
