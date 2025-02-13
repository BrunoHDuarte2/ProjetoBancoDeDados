from flask import Flask, jsonify, request
import psycopg2
from flask_cors import CORS
import base64
app = Flask(__name__)
CORS(app)

DB = {
    "dbname": "projetobd", # Lembra de alterar pelo nome que você deu pro bd no seu pc 
    "user": "postgres",
    "password": "mainPyke02!", # Por favor não subir com sua senha de verdade  :))
    "host": "localhost",
    "port": "5432"
}

def getDbConnection():
    return psycopg2.connect(**DB)

"""
    Padrão utilizado:
        /nometabelaAção 
        Get -> Retorna toda a tabela (GET).
        Search -> adiciona '/PK' a url para poder pesquisar na tabela (GET).
        Create -> Usa um post, logo ao usar deve-se passar um payload na comunicação (POST).
        Update ->  Atualiza tudo, ou seja, passa o objeto todo no payload e altera somente o que deve ser alterado (PUT).
        Delete -> adiciona '/PK' na url para deletar a linha da tabela referente a essa PK. (DELETE)

"""
@app.route('/usuarioGet', methods=['GET'])
def getUsuarios():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Usuario;")
    usuarios = cur.fetchall()
    cur.close()
    conn.close()
    response = jsonify([{"nome": u[0]} for u in usuarios])
    return response

@app.route('/colecaoDeJogos/<nome>', methods=['GET'])
def getJogos(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("""SELECT nome_item, foto FROM public."colecaoDeJogos" WHERE id_usuario = (%s);""", (nome,))
    jogos = cur.fetchall()
    cur.close()
    conn.close()
    response = jsonify({"jogos": jogos})
    return response

@app.route('/carrinhoDeComprasDeUmUsuario/<nome>', methods=['GET'])
def getCarrinhoDeCompra(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("""SELECT nome_item, preco, foto FROM public."carrinhoDeCompra" WHERE id_usuario = (%s);""", (nome,))
    jogos = cur.fetchall()
    cur.close()
    conn.close()
    response = jsonify({"jogos": jogos})
    return response


@app.route('/modificaImagemItem/<id>', methods=['POST'])
def insereImagemEmBase64Item(id):
    try:
        conn = getDbConnection()
        cur = conn.cursor()
        
        data = request.json
        imgEmB64 = base64.b64decode(data.get("dado"))  
        
        cur.execute("UPDATE Item SET Foto = %s WHERE id_item = %s RETURNING *;", (imgEmB64, id))
        updated_user = cur.fetchone()
        
        conn.commit()
        
        cur.close()
        conn.close()
        
        if updated_user:
            return jsonify({"message": "Imagem atualizada com sucesso!"}), 200
        else:
            return jsonify({"message": "Usuário não encontrado!"}), 404
    except Exception as e:
        return jsonify({"error": f"Erro ao processar a requisição: {e}"}), 500


@app.route('/modificaImagemUser/<nome>', methods=['POST'])
def insereImagemEmBase64(nome):
    try:
        conn = getDbConnection()
        cur = conn.cursor()
        
        data = request.json
        imgEmB64 = base64.b64decode(data.get("dado"))  
        
        cur.execute("UPDATE Usuario SET Foto = %s WHERE nome = %s RETURNING *;", (imgEmB64, nome))
        updated_user = cur.fetchone()
        
        conn.commit()
        
        cur.close()
        conn.close()
        
        if updated_user:
            return jsonify({"message": "Imagem atualizada com sucesso!"}), 200
        else:
            return jsonify({"message": "Usuário não encontrado!"}), 404
    except Exception as e:
        return jsonify({"error": f"Erro ao processar a requisição: {e}"}), 500

@app.route('/usuarioSearch/<nome>', methods=['GET'])
def getUsuario(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Usuario WHERE Nome = %s;", (nome,))
    usuario = cur.fetchone()
    cur.close()
    conn.close()
    if usuario:
        return jsonify({"nome": usuario[0], "email": usuario[1], "senha": usuario[2], "foto": usuario[3]})
    return jsonify({"error": "Usuário não encontrado"}), 404
    
@app.route('/usuarioCreate', methods=['POST'])
def createUsuario():
    data = request.json
    email = data.get("email")
    nome = data.get("nome")
    senha = data.get("senha")
    conn = getDbConnection()
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO Usuario (Email, Nome, Senha) VALUES (%s, %s, %s);", (email, nome, senha))
        conn.commit()
        cur.close()
        conn.close()
        response = jsonify({"message": "Usuário criado com sucesso!"}), 201
        return response
    except psycopg2.Error as e:
        response = jsonify({"error": str(e)}), 400
        return response

@app.route('/usuarioUpdate/<nome>', methods=['PUT'])
def updateUsuario(nome):
    data = request.json
    email = data.get("email")
    senha = data.get("senha")
    conn = getDbConnection()
    cur = conn.cursor()
    if email:
        cur.execute("UPDATE Usuario SET email = %s WHERE nome = %s RETURNING *;", (email, nome))
    if senha:
        cur.execute("UPDATE Usuario SET senha = %s WHERE nome = %s RETURNING *;", (senha, nome))
    updatedUser = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updatedUser:
        return jsonify({"nome": updatedUser[0], "email": updatedUser[1],"senha": updatedUser[2], "foto": updatedUser[3]})
    return jsonify({"error": "Usuário não encontrado"}), 404

@app.route('/usuarioDelete/<nome>', methods=['DELETE'])
def deleteUsuario(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Usuario WHERE nome = %s;", (nome,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Usuário deletado com sucesso!"})


@app.route('/pagamentoGet', methods=['GET'])
def getPagamentos():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Pagamento;")
    pagamentos = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([{"idPagamento": p[0], "valor": p[1], "data": p[2], "status": p[3]} for p in pagamentos])

@app.route('/pagamentoCreate', methods=['POST'])
def createPagamento():
    data = request.json
    idPagamento = data.get("idPagamento")
    valor = data.get("valor")
    dataPagamento = data.get("data")
    status = data.get("status")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Pagamento (idPagamento, Valor, Data, Status) VALUES (%s, %s, %s, %s);", 
                (idPagamento, valor, dataPagamento, status))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Pagamento criado com sucesso!"}), 201

@app.route('/pagamentoUpdate/<int:idPagamento>', methods=['PUT'])
def updatePagamento(idPagamento):
    data = request.json
    status = data.get("status")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("UPDATE Pagamento SET Status = %s WHERE idPagamento = %s RETURNING *;", (status, idPagamento))
    updatedPayment = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updatedPayment:
        return jsonify({"idPagamento": updatedPayment[0], "status": updatedPayment[3]})
    return jsonify({"error": "Pagamento não encontrado"}), 404

@app.route('/pagamentoDelete/<int:idPagamento>', methods=['DELETE'])
def deletePagamento(idPagamento):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Pagamento WHERE idPagamento = %s;", (idPagamento,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Pagamento deletado com sucesso!"})


@app.route('/carrinhoCompraGet', methods=['GET'])
def getCarrinhoCompra():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Carrinho_compra;")
    carrinho = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([{"idItem": c[0], "idUsuario": c[1]} for c in carrinho])

@app.route('/carrinhoCompraCreate', methods=['POST'])
def addItemCarrinho():
    data = request.json
    idItem = data.get("idItem")
    idUsuario = data.get("idUsuario")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Carrinho_compra (id_item, id_usuario) VALUES (%s, %s);", (idItem, idUsuario))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item adicionado ao carrinho!"}), 201

@app.route('/carrinhoCompraDelete/<int:idItem>', methods=['DELETE'])
def removeItemCarrinho(idItem):
    data = request.json
    idUsuario = data.get("idUsuario")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Carrinho_compra WHERE idItem = %s AND idUsuario = %s;", (idItem, idUsuario))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item removido do carrinho!"})

@app.route('/inventarioGet', methods=['GET'])
def getInventarios():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Inventario;")
    inventarios = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([{"idInventario": i[0], "idUsuario": i[1], "idItem": i[2]} for i in inventarios])

@app.route('/inventarioCreate', methods=['POST'])
def addItemInventario():
    data = request.json
    idUsuario = data.get("idUsuario")
    idItem = data.get("idItem")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Inventario (idUsuario, idItem) VALUES (%s, %s);", (idUsuario, idItem))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item adicionado ao inventário!"}), 201

@app.route('/inventarioDelete/<int:idInventario>', methods=['DELETE'])
def removeItemInventario(idInventario):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Inventario WHERE idInventario = %s;", (idInventario,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item removido do inventário!"})


@app.route('/itemGet', methods=['GET'])
def getItens():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Item;")
    itens = cur.fetchall()
    cur.close()
    conn.close()
    response = jsonify([{"idItem": i[0], "nome": i[1], "descricao": i[2], "preco": i[3], "dataLancamento": i[4], "idProdutora": i[5]} for i in itens])
    return response

@app.route('/itemSearch/<int:idItem>', methods=['GET'])
def getItem(idItem):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Item WHERE id_item = %s;", (idItem,))
    item = cur.fetchone()
    cur.close()
    conn.close()
    if item:
        response = jsonify({"idItem": item[0], "nome": item[1], "descricao": item[2], "preco": item[3], "dataLancamento": item[4], "idProdutora": item[5]})
        return response
    response = jsonify({"error": "Item não encontrado"}), 404
    return response

@app.route('/itemCreate', methods=['POST'])
def addItem():
    data = request.json
    nome = data.get("nome")
    descricao = data.get("descricao")
    preco = data.get("preco")
    dataLancamento = data.get("dataLancamento")
    nome_prod = data.get("nomeProdutora")
    foto = data.get("foto")
    conn = getDbConnection()
    cur = conn.cursor()
    if foto:
        imgEmB64 = base64.b64decode(foto) 
        cur.execute("INSERT INTO Item (Nome, Descricao, Preco, Data_lancamento, nome_prod, foto) VALUES (%s, %s, %s, %s, %s, %s);", 
                (nome, descricao, preco, dataLancamento, nome_prod, imgEmB64))
    else:
        with open('mario.png', 'rb') as img_file:
            encoded_image = base64.b64encode(img_file.read()).decode('utf-8')
        cur.execute("INSERT INTO Item (Nome, Descricao, Preco, Data_lancamento, nome_prod, foto) VALUES (%s, %s, %s, %s, %s,%s);", 
                (nome, descricao, preco, dataLancamento, nome_prod, encoded_image))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item (Jogo) criado com sucesso!"}), 201

@app.route('/itemUpdate/<int:idItem>', methods=['PUT'])
def updateItem(idItem):
    data = request.json
    preco = data.get("preco")
    descricao = data.get("descricao")
    foto = data.get("foto")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("UPDATE Item SET Preco = %s, Descricao = %s, Foto = %s WHERE idItem = %s RETURNING *;", 
                (preco, descricao, foto ,idItem))
    updatedItem = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updatedItem:
        response = jsonify({"idItem": updatedItem[0], "nome": updatedItem[1], "descricao": updatedItem[2]})
        return response
    return jsonify({"error": "Item não encontrado"}), 404

@app.route('/itemDelete/<nome>', methods=['DELETE'])
def deleteItem(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Item WHERE nome = %s;", (nome,))
    conn.commit()
    cur.close()
    conn.close()
    response = jsonify({"message": "Item deletado com sucesso!"})
    return response

@app.route('/produtoraGet', methods=['GET'])
def getProdutoras():
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Produtora;")
    prod = cur.fetchall()
    cur.close()
    conn.close()
    response = jsonify([{"nome": p[1]} for p in prod])
    return response

@app.route('/produtoraSearch/<nome>', methods=['GET'])
def getProdutora(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Produtora WHERE Nome = %s;", (nome,))
    prod = cur.fetchone()
    cur.close()
    conn.close()
    if prod:
        return jsonify({"nome": prod[0], "senha": prod[1]})
    return jsonify({"error": "Produtora não encontrada"}), 404

@app.route('/itensPelaProdutora/<nome>', methods=['GET'])
def getItensProdutora(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    
    cur.execute("SELECT * FROM Item WHERE nome_prod = (%s);", (nome,))
    produtos = cur.fetchall()  # Lista de tuplas
    
    cur.close()
    conn.close()
    
    if not produtos:
        return jsonify({"error": "Nenhum item encontrado para essa produtora"}), 404

    # Criar uma lista de dicionários para cada produto encontrado
    lista_itens = []
    for prod in produtos:
        foto_base64 = base64.b64encode(prod[6]).decode('utf-8') if prod[6] else None
        item = {
            "nome": prod[1],
            "descricao": prod[2],
            "preco": prod[3],
            "dataLancamento": prod[4],
            "nomeProd": prod[5],
            "foto": foto_base64
        }
        lista_itens.append(item)

    return jsonify(lista_itens)
    

@app.route('/produtoraCreate', methods=['POST'])
def createProdutora():
    data = request.json
    nome = data.get("nome")
    senha = data.get("senha")   
    conn = getDbConnection()
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO Produtora (Nome, Senha) VALUES (%s, %s);", ( nome, senha))
        conn.commit()
        cur.close()
        conn.close()
        response = jsonify({"message": "Produtora criada com sucesso!"}), 201
        return response
    except psycopg2.Error as e:
        response = jsonify({"error": str(e)}), 400
        return response

@app.route('/produtoraUpdate/<id>', methods=['PUT'])
def updateProdutora(cpf):
    data = request.json
    novoNome = data.get("nome")
    if not novoNome:
        return jsonify({"error": "O campo 'nome' é obrigatório"}), 400
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("UPDATE Usuario SET Nome = %s WHERE Cpf = %s RETURNING *;", (novoNome, cpf))
    updatedUser = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updatedUser:
        return jsonify({"cpf": updatedUser[0], "nome": updatedUser[1]})
    return jsonify({"error": "Usuário não encontrado"}), 404

@app.route('/produtoraDelete/<nome>', methods=['DELETE'])
def deleteProdutora(nome):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Produtora WHERE Nome = %s;", (nome,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Usuário deletado com sucesso!"})


if __name__ == '__main__':
    app.run(debug=True)
