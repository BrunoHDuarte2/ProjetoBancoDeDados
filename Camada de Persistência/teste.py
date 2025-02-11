import requests

# URL da API
url = "http://localhost:5000/itemSearch/33"  # Ajuste a URL conforme necessário

# Dados do usuário a serem enviados no POST
data = {
    "email": "teste@example.com",
    "nome": "bruno",
    "senha": "senhaSegura123"
}

# Fazendo a requisição POST
response = requests.get(url)

# Exibindo a resposta
print(f"Status Code: {response.status_code}")
print(f"Response JSON: {response.text}")
