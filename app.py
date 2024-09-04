from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    
    response, end_chat = get_response(user_input)
    
    return jsonify({"response": response, "end_chat": end_chat})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
