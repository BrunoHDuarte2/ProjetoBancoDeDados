Este projeto é uma atividade avaliativa da turma de bancos de dados ministrada pela professora Maristela. Cada uma das pastas na main do projeto contém um dos requisitos listados na especificação do trabalho, sendo eles:

• Front: todos os código do projeto

• Script SQL: os scripts que geraram o banco de dados -  criação das tabelas, ingestão de dados, procedure e views

As especificações do projeto podem ser observadas a seguir:

# MER - Modelagem Entidade-Relacionamento

A **Modelagem Entidade-Relacionamento (MER)** é uma forma conceitual de modelar entidades e seus relacionamentos com o mundo real, com o objetivo de facilitar a futura modelagem de banco de dados. A modelagem foi realizada utilizando a ferramenta [BRModelo](https://app.brmodeloweb.com/#!/main).

A modelagem descrita abaixo modela o sistema de **loja de itens digitais** e é baseada nas seguintes entidades:

1. **Usuário**
2. **Item**
3. **Lista de Desejos**
4. **Carteira**
5. **Carrinho de Compra**
6. **Pagamento**
7. **Inventário**
8. **Avaliação**
9. **DLC**
10. **Produtora**

E também os relacionamentos que as envolvem:

1. **Usuário ↔ Inventário**
    - Um Usuário possui um inventário.
    - Um inventário está relacionado a um Usuário.

2. **Usuário ↔ Pagamento**
    - Um Usuário pode realizar diversos pagamentos.
    - Um pagamento é feito por um único Usuário.

3. **Usuário ↔ Carrinho de Compra**
    - Um Usuário possui um Carrinho de Compra.
    - Um Carrinho de Compra está associado a um Usuário.

4. **Usuário ↔ Carteira**
    - Um Usuário possui uma Carteira.
    - Uma Carteira está associada a um Usuário.

5. **Usuário ↔ Lista de Desejos**
    - Um Usuário possui uma Lista de Desejos.
    - Uma Lista de Desejos está associada a um Usuário.

6. **Lista de Desejos ↔ Item**
    - Uma Lista de Desejos está associada a 0 ou mais Itens.
    - Um Item pode estar associado a 0 ou mais Listas de Desejos.

7. **Item ↔ Produtora**
    - Um Item é produzido por uma Produtora.
    - Uma Produtora pode produzir 0 ou mais Itens.

8. **Avaliação ↔ Item**
    - Um Item pode ter 0 ou mais Avaliações.
    - Uma Avaliação está associada a um único Item.

9. **Avaliação ↔ Usuário**
    - Um Usuário pode fazer 0 ou mais Avaliações.
    - Uma Avaliação está associada a um único Usuário.

10. **Jogo ↔ DLC**
    - Um Jogo pode ter 0 ou mais DLCs.
    - Uma DLC está associada a um único Jogo.

---

## Relacionamento de Especialização:

O modelo apresenta uma **especialização** entre **Item**, **Jogo** e **DLC**. Isso significa que **um Item pode ser um Jogo ou uma DLC**, reduzindo a quantidade de relacionamentos que representariam as mesmas ações. Esse relacionamento de especialização melhora a organização dos dados e elimina redundâncias no modelo.

---

## Entidades Fracas:

O modelo também inclui **entidades fracas**, que são representadas por linhas duplas. Essas entidades não fazem sentido sem a entidade principal que as define. No caso deste modelo, temos 5 entidades fracas:

1. **Inventário**
2. **Pagamento**
3. **Carrinho de Compra**
4. **Lista de Desejos**
5. **Avaliação**
6. **Carteira**

Essas entidades são fracas em relação ao **Usuário**, pois sua identificação depende da existência de um Usuário. Ou seja, o **Inventário**, **Carrinho de Compra**, **Avaliação**, **Carteira** e **Lista de Desejos** não teriam sentido sem o **Usuário** que as define. Da mesma forma, o **Pagamento** é gerado por um **Carrinho de Compra**, que o define.

---

Esse modelo representa de forma clara as entidades e os relacionamentos de um sistema de loja de itens digitais, com as considerações sobre especialização e entidades fracas que são essenciais para a organização dos dados no banco de dados.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e05e536f-f0f1-4a5e-b00b-1425df36870b" alt="MER 5">
</p>

# MR - Modelo Relacional

<p align="center">
  <img src="https://github.com/user-attachments/assets/4676102e-1515-41a0-8eed-93c72a2f65f0" alt="MR 4(1)">
</p>

# Consultas em Álgebra Relacional:

### Consulta da view *jogos_mais_vendidos*:

π_nome(jogo), π_nome(produtora), π_descricao, π_data_lancamento, <br/>
count(π_id_item(inventario)), <br/>
round(COALESCE(avg(π_nota(avaliacao)), 0), 2) <br/>
(σ_item.id_item = inventario.id_item AND item.id_item = avaliacao.id_avaliacao <br/>
(item ⨝ produtora ⨝ inventario ⨝ avaliacao)) <br/>
GROUP BY item.id_item, produtora.nome 

---

### Itens no carrinho de cada usuário junto com o nome do item e o saldo da carteira
π_usuario.Nome, π_item.Nome, π_carteira.saldo <br/>
(σ_usuario.Cpf = carteira.id_usuario AND usuario.Cpf = carrinho_compra.id_usuario AND item.id_item = carrinho_compra.id_item <br/>
(usuario ⨝ carteira ⨝ carrinho_compra ⨝ item))

---

### Média das notas das avaliações de cada item, junto com o nome do item e o nome da produtora
π_item.Nome, π_produtora.Nome, round(COALESCE(avg(π_avaliacao.Nota), 0), 2) <br/>
(σ_item.id_item = avaliacao.id_avaliacao AND item.id_produtora = produtora.Id_produtora <br/>
(item ⨝ produtora ⨝ avaliacao)) <br/>
GROUP BY item.id_item, produtora.Nome

---

### Pagamentos feitos pelos usuários, exibindo nome, valor e status do pagamento
π_usuario.Nome, π_pagamento.Valor, π_pagamento.Status <br/>
(σ_usuario.Cpf = pagamento.id_pagamento <br/>
(usuario ⨝ pagamento))

---

### Itens que estão na wishlist de cada usuário, junto com o nome do item e da produtora
π_usuario.Nome, π_item.Nome, π_produtora.Nome <br/>
(σ_usuario.Cpf = wishlist.id_usuario AND wishlist.id_usuario = usuario.Cpf AND item.id_produtora = produtora.Id_produtora AND wishlist.id_usuario = inventario.id_usuario <br/>
(usuario ⨝ wishlist ⨝ item ⨝ produtora))

---

### Usuários que possuem itens no inventário e também possuem saldo na carteira, exibindo o nome do usuário, o nome do item e o saldo
π_usuario.Nome, π_item.Nome, π_carteira.saldo <br/>
(σ_usuario.Cpf = inventario.id_usuario AND usuario.Cpf = carteira.id_usuario AND inventario.id_item = item.id_item <br/>
(usuario ⨝ inventario ⨝ carteira ⨝ item))

# Avaliação das Formas Normais das Tabelas

Foram analisadas cinco tabelas do diagrama: **Usuário, Item, Pagamento, Carrinho de Compra e Avaliação**. Abaixo está um resumo da avaliação das formas normais:

## 1. Usuário
✅ **Está na 3FN**  
Todos os atributos são atômicos e dependem da chave primária.

## 2. Item
✅ **Está na 3FN**  
A tabela contém apenas atributos atômicos e todas as dependências são diretas da chave primária. As FKs corretamente evitam dependências transitivas.

## 3. Pagamento
✅ **Está na 3FN**  
Os atributos (Id, Data, Valor, Status) são atômicos e dependem diretamente da chave primária. Não há dependências transitivas.

## 4. Carrinho de Compra
✅ **Está na 3FN**  
A estrutura está normalizada, sem atributos redundantes ou dependências transitivas. A relação com os itens ocorre via FKs.

## 5. Avaliação
✅ **Está na 3FN**  
Atributos atômicos, sem dependências transitivas. Nota e Comentário dependem diretamente da chave primária.

### **Conclusão**
Todas as tabelas atendem à **3ª Forma Normal (3FN)**, garantindo uma estrutura eficiente e sem redundâncias.

# Camada de persistência

<p align="center">
  <img src="https://github.com/user-attachments/assets/85d8fed4-a6a3-4275-938f-d3e51f4f9149" alt="Untitled">
</p>

# Views

Segue abaixo a descrição das três **views** que extraem informações do banco de dados relacionadas a usuários, itens, vendas e avaliações:

## 1. **Itens no Carrinho de Compra**
```sql
SELECT i.id_usuario,
       it.nome AS nome_item
FROM carrinho_compra i
JOIN item it ON i.id_item = it.id_item;
```

Esta view retorna a lista de itens adicionados ao carrinho de compra de cada usuário. Ela relaciona a tabela carrinho_compra com item, trazendo o id do usuário e o nome do item.

2. Itens no Inventário do Usuário

```
SELECT i.id_usuario,
       it.nome AS nome_item
FROM inventario i
JOIN item it ON i.id_item = it.id_item;

```
Semelhante à anterior, essa view exibe os itens que um usuário já adquiriu e possui no inventário. A junção ocorre entre inventario e item, retornando o id do usuário e o nome do item.

3. Desempenho e Avaliação dos Jogos

```
SELECT i.nome AS jogo,
       p.nome AS produtora,
       i."descrição" AS descricao,
       i.data_lancamento,
       count(inv.id_item) AS quantidade_vendida,
       round(COALESCE(avg(a.nota), 0::numeric), 2) AS media_avaliacao
FROM item i
JOIN produtora p ON i.id_produtora::text = p.id_produtora::text
LEFT JOIN inventario inv ON i.id_item = inv.id_item
LEFT JOIN avaliacao a ON i.id_item = a.id_avaliacao
GROUP BY i.id_item, p.nome;

```
Esta view apresenta informações detalhadas sobre os jogos disponíveis, incluindo:

Nome do jogo

Nome da produtora

Descrição e data de lançamento

Quantidade de unidades vendidas (baseado na tabela inventario)

Média das avaliações dos usuários


A junção é feita entre as tabelas item, produtora, inventario e avaliacao. O uso de LEFT JOIN garante que os jogos sem vendas ou avaliações ainda apareçam na consulta.


## Procedure `ComprarItem`

A procedure `ComprarItem` realiza a compra de um item por um usuário, seguindo as etapas abaixo:

1. **Verificação do preço do item**: Obtém o valor do item a ser comprado.
2. **Consulta do saldo do usuário**: Verifica se o usuário tem saldo suficiente na carteira.
3. **Validação de saldo**: Se o saldo for insuficiente, a compra é cancelada.
4. **Atualização da carteira**: Caso o usuário tenha saldo suficiente, o valor do item é descontado da carteira.
5. **Inserção no inventário**: O item adquirido é adicionado ao inventário do usuário.
6. **Transação segura**: Em caso de erro, a transação é revertida para evitar inconsistências.

### **Execução da Procedure**

Para chamar a procedure e realizar uma compra, utilize o comando:

```sql
CALL ComprarItem('<CPF_DO_USUARIO>', <ID_DO_ITEM>);
```

**Exemplo:** Para o usuário `12345678901` comprar o item `3`:

```sql
CALL ComprarItem('12345678901', 3);
```

Se a compra for bem-sucedida, o saldo do usuário será atualizado e o item será adicionado ao seu inventário.
