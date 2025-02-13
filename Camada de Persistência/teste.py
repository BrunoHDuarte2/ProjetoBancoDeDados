import requests
import base64

# URL da API
url = "http://localhost:5000//modificaImagemItem/13"


"""
    nome = data.get("nome")
    descricao = data.get("descricao")
    preco = data.get("preco")
    dataLancamento = data.get("dataLancamento")
    nome_prod = data.get("nomeProdutora")
    foto = data.get("foto")
"""


with open('images.jpg', 'rb') as img_file:
    encoded_image = base64.b64encode(img_file.read()).decode('utf-8')  # Convertendo para string

data = {
    "dado": encoded_image
}


response = requests.post(url, json=data, headers={'Content-Type': 'application/json'})
print(f"Status Code: {response.status_code}")
print(f"Response JSON: {response.text}")
