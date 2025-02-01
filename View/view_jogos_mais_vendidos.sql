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
