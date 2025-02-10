## Álgebra relacional - view *jogos_mais_vendidos*:

π_nome(jogo), π_nome(produtora), π_descricao, π_data_lancamento, <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   count(π_id_item(inventario)), <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   round(COALESCE(avg(π_nota(avaliacao)), 0), 2) <br/>
(σ_item.id_item = inventario.id_item AND item.id_item = avaliacao.id_avaliacao <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   (item ⨝ produtora ⨝ inventario ⨝ avaliacao)) <br/>
GROUP BY item.id_item, produtora.nome 
