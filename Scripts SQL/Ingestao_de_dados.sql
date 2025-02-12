INSERT INTO Usuario (Nome, Email, Senha, Foto) VALUES
('João Silva', 'joao@email.com', 'senha123', NULL),
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

INSERT INTO Produtora (Id_produtora, Nome) VALUES
('11111111111111', 'Sony Entertainment'),
('22222222222222', 'Nintendo'),
('33333333333333', 'Microsoft'),
('44444444444444', 'Ubisoft'),
('55555555555555', 'Capcom');

INSERT INTO Avaliacao (Nota, Comentario) VALUES
(5, 'Ótimo produto, recomendo!'),
(4, 'Muito bom, mas poderia ser melhor.'),
(3, 'Produto mediano, esperava mais.'),
(2, 'Não gostei muito, tem vários problemas.'),
(1, 'Horrível, não recomendo.');

INSERT INTO Item (Nome, Descricao, Preco, Data_lancamento, id_produtora) VALUES
('PlayStation 5', 'Console de última geração', 5000, '2020-11-12', '11111111111111'),
('Nintendo Switch', 'Console híbrido da Nintendo', 2500, '2017-03-03', '22222222222222'),
('Xbox Series X', 'Console potente da Microsoft', 4500, '2020-11-10', '33333333333333'),
('Assassin''s Creed', 'Jogo de ação e aventura', 300, '2020-11-10', '44444444444444'),
('Resident Evil', 'Jogo de terror e sobrevivência', 350, '2021-05-07', '55555555555555');

INSERT INTO Wishlist (id_usuario) VALUES
('João Silva'),
('Maria Oliveira'),
('Carlos Souza'),
('Ana Pereira'),
('Lucas Mendes');

INSERT INTO Inventario (id_usuario, id_item) VALUES
('João Silva', 1),
('Maria Oliveira', 2),
('Carlos Souza', 3),
('Ana Pereira', 4),
('Lucas Mendes', 5);

INSERT INTO Carteira (id_usuario, saldo) VALUES
('João Silva', 1000),
('Maria Oliveira', 500),
('Carlos Souza', 1500),
('Ana Pereira', 2000),
('Lucas Mendes', 750);

INSERT INTO Carrinho_compra (id_item, id_usuario) VALUES
(1, 'João Silva'),
(2, 'Maria Oliveira'),
(3, 'Carlos Souza'),
(4, 'Ana Pereira'),
(5, 'Lucas Mendes');
