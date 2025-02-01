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
INSERT INTO Avaliacao (id_avaliacao, Nota, Comentario) VALUES
(1, 5, 'Amazing gameplay and story.'),
(2, 4, 'Great graphics but short campaign.'),
(3, 3, 'Good mechanics but needs improvement.'),
(4, 2, 'Boring storyline, not recommended.'),
(5, 5, 'One of the best games ever!');

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
INSERT INTO Inventario (Id_inventario, id_usuario, id_item) VALUES
(1, '12345678901', 1),
(2, '23456789012', 3),
(3, '34567890123', 5),
(4, '45678901234', 2),
(5, '56789012345', 4);

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
