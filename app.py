import requests
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# def get_news():
#     url = 'https://newsapi.org/v2/'


if __name__ == '__main__':
    app.run(debug=True)