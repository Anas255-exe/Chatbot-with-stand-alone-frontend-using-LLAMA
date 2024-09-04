document.getElementById('toggle-button').addEventListener('click', function() {
    document.querySelector('.chatbox__support').classList.toggle('chatbox--active');
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('input-field').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('input-field');
    const message = inputField.value.trim();
    
    if (message === '') return;
    
    // Add user's message to the chat at the bottom
    addMessageToChat('messages__item messages__item--visitor', message);
    inputField.value = '';

    fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.end_chat) {
            addMessageToChat('messages__item messages__item--operator', data.response);
            // Disable input if conversation ended
            inputField.disabled = true;
            document.getElementById('send-button').disabled = true;
        } else {
            displayMessageWordByWord('messages__item messages__item--operator', data.response);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function addMessageToChat(className, message) {
    const chatContent = document.querySelector('.chatbox__messages');
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    
    // Append message to the chat content
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function displayMessageWordByWord(className, message) {
    const chatContent = document.querySelector('.chatbox__messages');
    const messageElement = document.createElement('div');
    messageElement.className = className;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;

    let words = message.split(' ');
    let index = 0;

    function addWord() {
        if (index < words.length) {
            messageElement.textContent += words[index] + ' ';
            chatContent.scrollTop = chatContent.scrollHeight;
            index++;
            setTimeout(addWord, 300); // Adjust typing speed here
        }
    }

    addWord();
}
