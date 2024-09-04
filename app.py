
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from chat import get_response

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire application

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    
    # Process the user input through the chat function
    response, end_chat = get_response(user_input)
    
    # Return the response
    return jsonify({"response": response, "end_chat": end_chat})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

