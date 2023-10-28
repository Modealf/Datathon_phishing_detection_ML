from flask import Flask, request, jsonify
from model import classify_text # Import your machine learning model functions
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS options
CORS(app, origins="*")

@app.route('/predict', methods=['GET'])
def predict():
    input_data = request.args.get('inputData', type=str) # request.data.decode('utf-8')  # Get string data from the frontend
    print(request.data.decode('utf-8'))
    # Call your ML model function with input data
    result = classify_text(input_data)  
    return {'output': result}  # Send the output back to the frontend as a string

