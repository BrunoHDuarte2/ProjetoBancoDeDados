from flask import Flask, jsonify, request
import psycopg2

app = Flask(__name__)

DB = {
    "dbname": "projetobd", # Lembra de alterar pelo nome que você deu pro bd no seu pc 
    "user": "postgres",
    "password": "senhaQueVoceUsaNoPgAdmin :)", # Por favor não subir com sua senha de verdade  :))
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
    return jsonify([{"cpf": u[0], "nome": u[1]} for u in usuarios])

@app.route('/usuarioSearch/<cpf>', methods=['GET'])
def getUsuario(cpf):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM Usuario WHERE Cpf = %s;", (cpf,))
    usuario = cur.fetchone()
    cur.close()
    conn.close()
    if usuario:
        return jsonify({"cpf": usuario[0], "nome": usuario[1]})
    return jsonify({"error": "Usuário não encontrado"}), 404

@app.route('/usuarioCreate', methods=['POST'])
def createUsuario():
    data = request.json
    cpf = data.get("cpf")
    nome = data.get("nome")
    conn = getDbConnection()
    cur = conn.cursor()
    try:
        cur.execute("INSERT INTO Usuario (Cpf, Nome) VALUES (%s, %s);", (cpf, nome))
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"message": "Usuário criado com sucesso!"}), 201
    except psycopg2.Error as e:
        return jsonify({"error": str(e)}), 400

@app.route('/usuarioUpdate/<cpf>', methods=['PUT'])
def updateUsuario(cpf):
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

@app.route('/usuarioDelete/<cpf>', methods=['DELETE'])
def deleteUsuario(cpf):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Usuario WHERE Cpf = %s;", (cpf,))
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
    cur.execute("INSERT INTO Carrinho_compra (idItem, idUsuario) VALUES (%s, %s);", (idItem, idUsuario))
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
    return jsonify([{"idItem": i[0], "nome": i[1], "descricao": i[2], "preco": i[3], "dataLancamento": i[4], "idProdutora": i[5]} for i in itens])

@app.route('/itemCreate', methods=['POST'])
def addItem():
    data = request.json
    nome = data.get("nome")
    descricao = data.get("descricao")
    preco = data.get("preco")
    dataLancamento = data.get("dataLancamento")
    idProdutora = data.get("idProdutora")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("INSERT INTO Item (Nome, Descricao, Preco, Data_lancamento, idProdutora) VALUES (%s, %s, %s, %s, %s);", 
                (nome, descricao, preco, dataLancamento, idProdutora))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item (Jogo) criado com sucesso!"}), 201

@app.route('/itemUpdate/<int:idItem>', methods=['PUT'])
def updateItem(idItem):
    data = request.json
    preco = data.get("preco")
    descricao = data.get("descricao")
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("UPDATE Item SET Preco = %s, Descricao = %s WHERE idItem = %s RETURNING *;", 
                (preco, descricao, idItem))
    updatedItem = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updatedItem:
        return jsonify({"idItem": updatedItem[0], "nome": updatedItem[1], "descricao": updatedItem[2]})
    return jsonify({"error": "Item não encontrado"}), 404

@app.route('/itemDelete/<int:idItem>', methods=['DELETE'])
def deleteItem(idItem):
    conn = getDbConnection()
    cur = conn.cursor()
    cur.execute("DELETE FROM Item WHERE idItem = %s;", (idItem,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Item deletado com sucesso!"})


if __name__ == '__main__':
    app.run(debug=True)
