-- Insert into Usuario
INSERT INTO Usuario (Email, Nome, Senha) VALUES
('a@gmail.com', 'Alice Santos', 'a'),
('b@hotmail.com', 'Bruno Costa', 'b'),
('c@yahoo.com', 'Carla Ferreira', 'c'),
('d@outlook.com', 'Daniel Lima', 'd'),
('e@unb.br', 'Elisa Souza', 'e');

-- Insert into Pagamento
INSERT INTO Pagamento (Valor, Data, Status) VALUES
(150, '2025-01-01', 'Completed'),
(200, '2025-01-02', 'Pending'),
(100, '2025-01-03', 'Completed'),
(250, '2025-01-04', 'Failed'),
(300, '2025-01-05', 'Completed');

-- Insert into Produtora
INSERT INTO Produtora (Id_produtora, Nome) VALUES
('11111111111111', 'Ubisoft'),
('22222222222222', 'Electronic Arts'),
('33333333333333', 'Rockstar Games'),
('44444444444444', 'Nintendo'),
('55555555555555', 'Valve');

-- Insert into Avaliacao
-- Reviews for Zelda: Breath of the Wild 2 (10 reviews, high ratings)
INSERT INTO Avaliacao (Nota, Comentario) VALUES
(5, 'Jogo incrível, melhor da franquia!'),
(5, 'Gráficos espetaculares, jogabilidade perfeita.'),
(4, 'Ótimo jogo, mas a história poderia ser melhor.'),
(5, 'Exploração fantástica, vale cada centavo.'),
(5, 'A trilha sonora é incrível.'),
(4, 'Muito bom, mas esperava mais inovações.'),
(5, 'Definitivamente um dos melhores jogos já feitos.'),
(5, 'O mundo aberto é simplesmente maravilhoso.'),
(5, 'A física do jogo é impressionante.'),
(4, 'Bom jogo, mas tem alguns bugs.');

-- Reviews for GTA VI (7 reviews, slightly lower ratings)
INSERT INTO Avaliacao (Nota, Comentario) VALUES
(5, 'O melhor GTA já feito!'),
(4, 'Gráficos incríveis, mas a IA dos NPCs poderia ser melhor.'),
(5, 'O mapa é gigantesco e muito detalhado.'),
(4, 'Ótimo jogo, mas tem microtransações.'),
(5, 'O realismo do jogo é impressionante.'),
(4, 'Ótimo jogo, mas prefiro GTA V.'),
(5, 'Modo história muito bem feito!');

-- Reviews for Counter-Strike 2 (5 reviews)
INSERT INTO Avaliacao (Nota, Comentario) VALUES
(18, 4, 'Melhorado em relação ao CS:GO.'),
(19, 5, 'Os gráficos e a movimentação estão bem melhores.'),
(20, 3, 'Ainda tem muitos hackers no jogo.'),
(21, 4, 'Ótima jogabilidade, mas falta mais conteúdo.'),
(22, 5, 'Ótimo para quem gosta de jogos competitivos.');

-- Reviews for Assassin’s Creed (3 reviews)
INSERT INTO Avaliacao (Nota, Comentario) VALUES
(4, 'História muito envolvente.'),
(4, 'Bons gráficos, mas tem bugs.'),
(5, 'O combate e a exploração são muito divertidos.');

-- Reviews for FIFA 25 (4 reviews, lowest average)
INSERT INTO Avaliacao (Nota, Comentario) VALUES
(3, 'Mesmo jogo de sempre, poucas novidades.'),
(4, 'Boa jogabilidade, mas os servidores são ruins.'),
(3, 'Muitos bugs no modo carreira.'),
(4, 'Ótimo para jogar com amigos.');

-- Insert into Item (Games)
INSERT INTO Item (Nome, Descrição, Preco, Data_lancamento, id_produtora) VALUES
('Assassin''s Creed', 'Action-adventure stealth game.', 150, '2023-10-01', '11111111111111'),
('FIFA 25', 'Football simulation game.', 200, '2024-09-15', '22222222222222'),
('GTA VI', 'Open-world action-adventure.', 300, '2025-06-10', '33333333333333'),
('Zelda: Breath of Wild 2', 'Fantasy action-adventure.', 250, '2024-12-05', '44444444444444'),
('Counter-Strike 2', 'First-person shooter.', 100, '2023-08-20', '55555555555555');

-- Insert into Wishlist
INSERT INTO Wishlist (id_usuario) VALUES
("1"),
("2"),
("3"),
("4"),
("5");

-- Insert into Inventario (Owned Games)
-- Zelda: Breath of the Wild 2 (Most Sold)
INSERT INTO Inventario (id_usuario, id_item) VALUES
("1", 4),
("2", 4),
("3", 4),
("4", 4),
("5", 4),
("1", 4),
("2", 4),
("3", 4),
("4", 4),
("5", 4);

-- GTA VI (Second Most Sold)
INSERT INTO Inventario (id_usuario, id_item) VALUES
("1", 3),
("2", 3),
("3", 3),
("4", 3),
("5", 3),
("1", 3),
("2", 3);

-- Counter-Strike 2 (Third Most Sold)
INSERT INTO Inventario (id_usuario, id_item) VALUES
("1", 5),
("2", 5),
("3", 5),
("4", 5),
("5", 5);

-- Assassin's Creed (Fourth Most Sold)
INSERT INTO Inventario (id_usuario, id_item) VALUES
("1", 1),
("2", 1),
("3", 1);

-- FIFA 25 (4 Purchases)
INSERT INTO Inventario (id_usuario, id_item) VALUES
("1", 2),
("2", 2),
("3", 2),
("4", 2);

-- Insert into Carteira (Wallets)
INSERT INTO Carteira (id_usuario, saldo) VALUES
("1", 500),
("2", 300),
("3", 100),
("4", 700),
("5", 400);

-- Insert into Carrinho_compra (Shopping Cart)
INSERT INTO Carrinho_compra (id_item, id_usuario) VALUES
(1, "1"),
(2, "2"),
(3, "3"),
(4, "4"),
(5, "5");
