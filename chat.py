


from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

template = """
You are a chatbot named Raahi. 
you are a travel helper bot only reply to the questions related to travel else state that you cant answer that type of question make reponses as small as possible 
Here is the conversation history: {context}

User : {question}

your Answer:
"""

model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

context = ""

def get_response(user_input):
    global context

    # Check if the user wants to end the chat
    if user_input.lower() == "bye":
        return "Goodbye! Have a great day!", True

    # Process the user input through the LangChain model
    result = chain.invoke({"context": context, "question": user_input})

    # Update context
    context += f"\nUser: {user_input}\nRaahi: {result}"
    
    return result, False

