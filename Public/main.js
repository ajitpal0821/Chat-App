// main.js file for frontend
const socket = io("http://localhost:4000")

const clientTotal = document.getElementById('client-total')
//sender details
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input')
const messagecontainer = document.getElementById('message-container')
const audio=new Audio('/message-tone.mp3');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
})

//messsage-sent to server i.e app.js
function sendMessage() {
    console.log(messageInput.value)
    if (!messageInput.value) {
        return;
    }
    const data = {
        name: nameInput.value,
        message: messageInput.value,
        date: new Date()
    }
    console.log(data)
    socket.emit("sent-message", data);
    addUserMessage(true, data);
    messageInput.value = ''
}


socket.on('Client-total', (data) => {
    // console.log(data)
    clientTotal.innerText = `Total Clients :${data}`
})
// message received from server
socket.on('chat-message', (data) => {
    // console.log('message received from server',data)
    audio.play()
    addUserMessage(false, data)
})
function addUserMessage(isMe, data) {
    clearFeedback();
    const value = `
        <li class="${!isMe ? "message-left" : "message-right"}">
        <p class="message">
            ${data.message}
            <span>
  ${data.name} * ${moment(data.date).format("DD MMM YYYY, hh:mm A")}
</span>

        </p>
    </li>
        `
    messagecontainer.innerHTML += value
    scrolltobottom();
}
function scrolltobottom() {
    messagecontainer.scrollTo(0, messagecontainer.scrollHeight)
}


socket.on('feedback', (data) => {
    clearFeedback();
    const element = `<li class="message-feedback">
    <p class="feedback" id="feedback">
    ${data.value}
    </p>
</li>`
    messagecontainer.innerHTML += element
})



//send to server
messageInput.addEventListener('focus', (e) => {
    socket.emit('feedback', {
        value: `${nameInput.value} is typing..`
    })
})
messageInput.addEventListener('keypress', (e) => {
    socket.emit('feedback', {
        value: `${nameInput.value} is typing..`
    })
})
messageInput.addEventListener('blur', (e) => {
    socket.emit('feedback', {
        value: `${nameInput.value} is typing..`
    })
})

function clearFeedback() {
    document.querySelectorAll('li.message-feedback').forEach(element => {
        element.parentNode.removeChild(element)
    });
}
