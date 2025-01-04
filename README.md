# Offline Standalone Chatbot Using Llama Model

This project is an offline standalone chatbot built with the Llama model and Flask. The chatbot, named **Raahi**, is designed to provide interactive conversations without requiring an internet connection. It uses the Llama3 model, part of LangChain's Ollama, for generating responses based on user input. 

---

## Features

- **Offline Functionality**: Powered by Llama3 for robust offline capabilities.
- **Interactive Conversations**: Maintains context for dynamic and meaningful responses.
- **Lightweight Server**: Built using Flask for simplicity and efficiency.
- **Customizable Templates**: The chatbot template can be tailored for various conversational styles.

---

## Architecture

The chatbot consists of two main components:
1. **Frontend**: A client interface for users to send and receive messages.
2. **Backend**: Flask server handling requests and generating responses using the Llama model.

**Architecture Overview**  
![image](https://github.com/user-attachments/assets/6bd5f004-9182-4565-8d6b-9f38e0443d69)


---

## How to Run

### Prerequisites

1. **Python**: Ensure Python 3.8+ is installed.
2. **Dependencies**: Install required libraries:
   ```bash
   pip install flask flask-cors langchain-ollama
   ```
3. **Ollama LLM model is required to be installed in the system**

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Start the Backend**:
   ```bash
   python app.py
   ```



---

## API Endpoints

### `/predict`
- **Method**: POST
- **Description**: Processes user input and returns a chatbot response.
- **Payload**:
  ```json
  {
    "text": "Your message here"
  }
  ```
- **Response**:
  ```json
  {
    "response": "Chatbot's response here"
  }
  ```

---

## How It Works

1. User inputs a message.
2. The message is sent to the `/predict` endpoint.
3. The Flask backend processes the input using the Llama model.
4. A response is generated and returned to the user.

User Interface
Chat Processing Module
Llama3 Model
Flask Server![image](https://github.com/user-attachments/assets/b92e3c06-f256-4969-8e0b-647b2b191d3e)


---

## Customization

### Modify Chat Prompt
Edit the `template` in `chat.py` to change the chatbot's conversational tone and style.

### Update Model
Replace the `Llama3` model with another compatible model by changing the `OllamaLLM` initialization.

---

## Screenshots

![image](https://github.com/user-attachments/assets/98249507-13ae-45c7-842a-3735bcbcb395)


---



