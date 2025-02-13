INSERT INTO Usuario (Nome, Email, Senha, Foto) VALUES
('Joao Silva', 'joao@email.com', 'senha123', NULL),
('Maria Oliveira', 'maria@email.com', 'senha456', NULL),
('Carlos Souza', 'carlos@email.com', 'senha789', NULL),
('Ana Pereira', 'ana@email.com', 'senhaabc', NULL),
('Lucas Mendes', 'lucas@email.com', 'senhadef', NULL);

INSERT INTO Pagamento (Valor, Data, Status) VALUES
(100, '2024-02-01', 'Pago'),
(250, '2024-02-02', 'Pendente'),
(75, '2024-02-03', 'Cancelado'),
(180, '2024-02-04', 'Pago'),
(50, '2024-02-05', 'Pendente');

INSERT INTO Produtora (Nome, Senha) VALUES
('Sony Entertainment', '1234'),
('Nintendo', '5678'),
('Microsoft', 'senha'),
('Ubisoft', 'senhaMuitoBoa'),
('Capcom', 'empresaFaDaMaristela');

INSERT INTO Avaliacao (Nota, Comentario) VALUES
(5, 'Ótimo produto, recomendo!'),
(4, 'Muito bom, mas poderia ser melhor.'),
(3, 'Produto mediano, esperava mais.'),
(2, 'Não gostei muito, tem vários problemas.'),
(1, 'Horrível, não recomendo.');

INSERT INTO Item (Nome, Descricao, Preco, Data_lancamento, Nome_prod) VALUES
('PlayStation 5', 'Console de última geração', 5000, '2020-11-12', 'Sony Entertainment'),
('Nintendo Switch', 'Console híbrido da Nintendo', 2500, '2017-03-03', 'Nintendo'),
('Xbox Series X', 'Console potente da Microsoft', 4500, '2020-11-10', 'Microsoft'),
('Assassin''s Creed', 'Jogo de ação e aventura', 300, '2020-11-10', 'Ubisoft'),
('Resident Evil', 'Jogo de terror e sobrevivência', 350, '2021-05-07', 'Capcom');

INSERT INTO Wishlist (id_usuario) VALUES
('Joao Silva'),
('Maria Oliveira'),
('Carlos Souza'),
('Ana Pereira'),
('Lucas Mendes');

INSERT INTO Inventario (id_usuario, id_item) VALUES
('Joao Silva', 11),
('Maria Oliveira', 12),
('Carlos Souza', 13),
('Ana Pereira', 14),
('Lucas Mendes', 15);

INSERT INTO Carteira (id_usuario, saldo) VALUES
('Joao Silva', 1000),
('Maria Oliveira', 500),
('Carlos Souza', 1500),
('Ana Pereira', 2000),
('Lucas Mendes', 750);

INSERT INTO Carrinho_compra (id_item, id_usuario) VALUES
(11, 'Joao Silva'),
(12, 'Maria Oliveira'),
(13, 'Carlos Souza'),
(14, 'Ana Pereira'),
(15, 'Lucas Mendes');
