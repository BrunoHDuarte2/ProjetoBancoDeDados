# MER
Modelagem Entidade Relacionamento é uma forma conceitual de se modelar entidades e relacionamentos do mundo real para futura modelagem em banco de dados. O modelo aqui feito foi utilizando a ferramenta [BRModelo](https://app.brmodeloweb.com/#!/main)

A modelagem em anexo, [MER.md](MER\MER.png), modela o sistema de loja de jogos digitais com base as entidades:
1. Usuário.
2. Jogo.
3. Lista de Desejos.
4. Carteira.
5. Carrinho de Compra.
6. Pagamento.
7. Inventário.
8. Avaliação.
9. DLC.
10. Produtora.

E também os relacionamentos que os envolvem:
1. Usuário $\iff$ Inventário
    - Um Usuário possui um inventário.
    - Um inventário está relacionado com um Usuário.
2. Usuário $\iff$ Pagamento
    - Um usuário realiza diversos pagamentos.
    - Um pagamento é pago por somente um Usuário.
3. Usuário $\iff$ Carrinho de Compra
    - Um Usuário possui um Carrinho de Compra.
    - Um Carrinho de Compra está associado a um Usuário.
4. Usuário $\iff$ Carteira 
    - Um Usuário possui uma Carteira.
    - Uma Carteira está associada a um Usuário.
5. Usuário $\iff$ Lista de Desejos
    - Um Usuário possui uma Lista de Desejos.
    - Um Lista de Desejos está associada a um Usuário.
6. Lista de Desejos $\iff$ Jogo
    - Uma Lista de Desejos está associada a 0 ou mais Jogos.
    - Um Jogo está associadao a 0 ou mais Listas de Desejos.
7. Jogo $\iff$ Produtora 
    - Um Jogo é produzido por uma Produtora.
    - Uma Produtora produziu 0 ou mais Jogos.
8. Jogo $\iff$ DLC
    - Um Jogo possui 0 ou mais DLC's.
    - Uma DLC está associada a um Jogo.
9. Avaliação $\iff$ Jogo
    - Um Jogo possui 0 ou mais Avaliações.
    - Uma Avaliação está associada a um Jogo.
10. Avaliação $\iff$ Usuário
    - Um Usuário realiza 0 ou mais Avaliações.
    - Uma Avaliação está relacionada com um Usuário. 