 CREATE VIEW carrinhoDeCompras AS
 SELECT i.id_usuario,
    it.nome AS nome_item
   FROM carrinho_compra i
     JOIN item it ON i.id_item = it.id_item;