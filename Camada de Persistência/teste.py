import requests
import base64

# URL da API
url = "http://localhost:5000/usuarioGet"

data = {
    "email": "quismudarDnv@teste.com",
    "senha": "eunaoseifazersenha" 
}

response = requests.get(url)

# Exibindo a resposta
print(f"Status Code: {response.status_code}")
print(f"Response JSON: {response.text}")

"""
# Caminho da imagem a ser enviada
image_path = './Pokémon_Gengar_art.png'

# Abrir e codificar a imagem em base64
with open(image_path, 'rb') as img_file:
    encoded_image = base64.b64encode(img_file.read()).decode('utf-8')  # Convertendo para string

# Dados para enviar na requisição
data = {
    "nome": "bruno",  # Nome do usuário
    "dado": encoded_image  # Imagem codificada em base64
}

# Fazendo a requisição POST
response = requests.post(url, json=data, headers={'Content-Type': 'application/json'})

# Exibindo a resposta
print(f"Status Code: {response.status_code}")
print(f"Response JSON: {response.text}")"""
