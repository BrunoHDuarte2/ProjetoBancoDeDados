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

Essas entidades são fracas em relação ao **Usuário**, pois sua identificação depende da existência de um Usuário. Ou seja, o **Inventário**, **Carrinho de Compra**, **Avaliação** e **Lista de Desejos** não teriam sentido sem o **Usuário** que as define. Da mesma forma, o **Pagamento** é gerado por um **Carrinho de Compra**, que o define.

---

Esse modelo representa de forma clara as entidades e os relacionamentos de um sistema de loja de itens digitais, com as considerações sobre especialização e entidades fracas que são essenciais para a organização dos dados no banco de dados.
