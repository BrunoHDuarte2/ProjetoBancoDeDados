# Álgebra Relacional - Consultas

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

