from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)

# Serve the React app
@app.route('/')
def serve():
    return app.send_static_file('index.html')

# API endpoint for contact form submissions
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Here you could add logic to send an email or store the message in a database
    print(f"Received contact form submission from {name} ({email}): {message}")
    
    return jsonify({'status': 'success', 'message': 'Thank you for contacting me!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
