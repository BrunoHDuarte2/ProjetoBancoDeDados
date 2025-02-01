-- Insert into Usuario
INSERT INTO Usuario (Cpf, Nome) VALUES
('12345678901', 'Alice Santos'),
('23456789012', 'Bruno Costa'),
('34567890123', 'Carla Ferreira'),
('45678901234', 'Daniel Lima'),
('56789012345', 'Elisa Souza');

-- Insert into Pagamento
INSERT INTO Pagamento (id_pagamento, Valor, Data, Status) VALUES
(1, 150, '2025-01-01', 'Completed'),
(2, 200, '2025-01-02', 'Pending'),
(3, 100, '2025-01-03', 'Completed'),
(4, 250, '2025-01-04', 'Failed'),
(5, 300, '2025-01-05', 'Completed');

-- Insert into Produtora
INSERT INTO Produtora (Id_produtora, Nome) VALUES
('11111111111111', 'Ubisoft'),
('22222222222222', 'Electronic Arts'),
('33333333333333', 'Rockstar Games'),
('44444444444444', 'Nintendo'),
('55555555555555', 'Valve');

-- Insert into Avaliacao
-- Reviews for Zelda: Breath of the Wild 2 (10 reviews, high ratings)
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(1, 5, 'Jogo incrível, melhor da franquia!'),
(2, 5, 'Gráficos espetaculares, jogabilidade perfeita.'),
(3, 4, 'Ótimo jogo, mas a história poderia ser melhor.'),
(4, 5, 'Exploração fantástica, vale cada centavo.'),
(5, 5, 'A trilha sonora é incrível.'),
(6, 4, 'Muito bom, mas esperava mais inovações.'),
(7, 5, 'Definitivamente um dos melhores jogos já feitos.'),
(8, 5, 'O mundo aberto é simplesmente maravilhoso.'),
(9, 5, 'A física do jogo é impressionante.'),
(10, 4, 'Bom jogo, mas tem alguns bugs.');

-- Reviews for GTA VI (7 reviews, slightly lower ratings)
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(11, 5, 'O melhor GTA já feito!'),
(12, 4, 'Gráficos incríveis, mas a IA dos NPCs poderia ser melhor.'),
(13, 5, 'O mapa é gigantesco e muito detalhado.'),
(14, 4, 'Ótimo jogo, mas tem microtransações.'),
(15, 5, 'O realismo do jogo é impressionante.'),
(16, 4, 'Ótimo jogo, mas prefiro GTA V.'),
(17, 5, 'Modo história muito bem feito!');

-- Reviews for Counter-Strike 2 (5 reviews)
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(18, 4, 'Melhorado em relação ao CS:GO.'),
(19, 5, 'Os gráficos e a movimentação estão bem melhores.'),
(20, 3, 'Ainda tem muitos hackers no jogo.'),
(21, 4, 'Ótima jogabilidade, mas falta mais conteúdo.'),
(22, 5, 'Ótimo para quem gosta de jogos competitivos.');

-- Reviews for Assassin’s Creed (3 reviews)
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(23, 4, 'História muito envolvente.'),
(24, 4, 'Bons gráficos, mas tem bugs.'),
(25, 5, 'O combate e a exploração são muito divertidos.');

-- Reviews for FIFA 25 (4 reviews, lowest average)
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(26, 3, 'Mesmo jogo de sempre, poucas novidades.'),
(27, 4, 'Boa jogabilidade, mas os servidores são ruins.'),
(28, 3, 'Muitos bugs no modo carreira.'),
(29, 4, 'Ótimo para jogar com amigos.');

-- Insert into Item (Games)
INSERT INTO Item (id_item, Nome, Descrição, Preco, Data_lancamento, id_produtora) VALUES
(1, 'Assassin''s Creed', 'Action-adventure stealth game.', 150, '2023-10-01', '11111111111111'),
(2, 'FIFA 25', 'Football simulation game.', 200, '2024-09-15', '22222222222222'),
(3, 'GTA VI', 'Open-world action-adventure.', 300, '2025-06-10', '33333333333333'),
(4, 'Zelda: Breath of Wild 2', 'Fantasy action-adventure.', 250, '2024-12-05', '44444444444444'),
(5, 'Counter-Strike 2', 'First-person shooter.', 100, '2023-08-20', '55555555555555');

-- Insert into Wishlist
INSERT INTO Wishlist (Id, id_usuario) VALUES
(1, '12345678901'),
(2, '23456789012'),
(3, '34567890123'),
(4, '45678901234'),
(5, '56789012345');

-- Insert into Inventario (Owned Games)
-- Zelda: Breath of the Wild 2 (Most Sold)
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(1, '12345678901', 4),
(2, '23456789012', 4),
(3, '34567890123', 4),
(4, '45678901234', 4),
(5, '56789012345', 4),
(6, '12345678901', 4),
(7, '23456789012', 4),
(8, '34567890123', 4),
(9, '45678901234', 4),
(10, '56789012345', 4);

-- GTA VI (Second Most Sold)
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(11, '12345678901', 3),
(12, '23456789012', 3),
(13, '34567890123', 3),
(14, '45678901234', 3),
(15, '56789012345', 3),
(16, '12345678901', 3),
(17, '23456789012', 3);

-- Counter-Strike 2 (Third Most Sold)
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(18, '12345678901', 5),
(19, '23456789012', 5),
(20, '34567890123', 5),
(21, '45678901234', 5),
(22, '56789012345', 5);

-- Assassin's Creed (Fourth Most Sold)
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(23, '12345678901', 1),
(24, '23456789012', 1),
(25, '34567890123', 1);

-- FIFA 25 (4 Purchases)
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(26, '12345678901', 2),
(27, '23456789012', 2),
(28, '34567890123', 2),
(29, '45678901234', 2);

-- Insert into Carteira (Wallets)
INSERT INTO Carteira (id_usuario, saldo) VALUES
('12345678901', 500),
('23456789012', 300),
('34567890123', 100),
('45678901234', 700),
('56789012345', 400);

-- Insert into Carrinho_compra (Shopping Cart)
INSERT INTO Carrinho_compra (id_item, id_usuario) VALUES
(1, '23456789012'),
(2, '12345678901'),
(3, '56789012345'),
(4, '34567890123'),
(5, '45678901234');
