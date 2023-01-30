from flask import Flask
import requests

url = "https://api.notion.com/v1/databases/82288c53403c4406a13c5f41ec978b34/query"
h = {"Authorization": "Bearer secret_AynVgSDhgWtuBkymVn2b7Cnf0QTl8XGLVSwEgOyTTmp",
           "Notion-Version": "2022-06-28",
           "Content-Type": "application/json"}

app = Flask(__name__)

@app.route('/')
def hello():
    return requests.post(url, headers=h).content.decode()

if __name__ == "__main__":
    app.run(debug=True)