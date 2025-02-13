# Descrição das Views do Banco de Dados

Segue abaixo a descrição das três **views** que extraem informações do banco de dados relacionadas a usuários, itens, vendas e avaliações.

## 1. **Itens no Carrinho de Compra**
```sql
SELECT i.id_usuario,
       it.nome AS nome_item
FROM carrinho_compra i
JOIN item it ON i.id_item = it.id_item;

Esta view retorna a lista de itens adicionados ao carrinho de compra de cada usuário. Ela relaciona a tabela carrinho_compra com item, trazendo o id do usuário e o nome do item.

2. Itens no Inventário do Usuário

SELECT i.id_usuario,
       it.nome AS nome_item
FROM inventario i
JOIN item it ON i.id_item = it.id_item;

Semelhante à anterior, essa view exibe os itens que um usuário já adquiriu e possui no inventário. A junção ocorre entre inventario e item, retornando o id do usuário e o nome do item.

3. Desempenho e Avaliação dos Jogos

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

Esta view apresenta informações detalhadas sobre os jogos disponíveis, incluindo:

Nome do jogo

Nome da produtora

Descrição e data de lançamento

Quantidade de unidades vendidas (baseado na tabela inventario)

Média das avaliações dos usuários


A junção é feita entre as tabelas item, produtora, inventario e avaliacao. O uso de LEFT JOIN garante que os jogos sem vendas ou avaliações ainda apareçam na consulta.