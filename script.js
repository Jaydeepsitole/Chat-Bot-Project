document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
  
    sendBtn.addEventListener('click', function () {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        appendUserMessage(userMessage);
        setTimeout(function () {
          // Simulate bot response (you can customize this part)
          const botResponse = "I'm just a simple chatbot. How can I help?";
          appendBotMessage(botResponse);
        }, 500);
        userInput.value = '';
      }
    });
  
    function appendUserMessage(message) {
      const userMessageDiv = document.createElement('div');
      userMessageDiv.classList.add('chat-message', 'user-message');
      userMessageDiv.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(userMessageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  
    function appendBotMessage(message) {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.classList.add('chat-message', 'bot-message');
      botMessageDiv.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(botMessageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
  
