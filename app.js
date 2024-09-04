
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
    
    addMessageToChat('user-message', message);
    inputField.value = '';

    fetch('http://localhost:5000/chat', {  // Ensure this URL matches your Flask server address
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChat('bot-message', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function addMessageToChat(className, message) {
    const chatContent = document.getElementById('chat-content');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}
