CREATE TABLE Usuario (
	Cpf varchar(11) PRIMARY KEY,
	Nome varchar(35) NOT NULL
);

CREATE TABLE Pagamento (
	id_pagamento int PRIMARY KEY,
	Valor int NOT NULL,
	Data varchar(10) NOT NULL,
	Status varchar(20) NOT NULL
);

CREATE TABLE Produtora (
	Id_produtora varchar(14) PRIMARY KEY,
	Nome varchar(40) NOT NULL
);

CREATE TABLE Avaliacao (
	id_avaliacao int PRIMARY KEY,
	Nota int NOT NULL,
	Comentario varchar(150) NOT NULL
);

CREATE TABLE Item (
	id_item int PRIMARY KEY,
	Nome varchar(30) NOT NULL,
	Descrição varchar(100) NOT NULL,
	Preco int NOT NULL,
	Data_lancamento varchar(10) NOT NULL,
	id_produtora varchar(100),
  FOREIGN KEY (id_produtora) REFERENCES Produtora (Id_produtora)
);


CREATE TABLE Wishlist (
	Id int PRIMARY KEY,
	id_usuario varchar(11),
	FOREIGN KEY (id_usuario) REFERENCES Usuario (Cpf)
);

CREATE TABLE Inventario (
	Id_inventario int PRIMARY KEY,
	id_usuario varchar(11),
	id_item int,
	FOREIGN KEY (id_usuario) REFERENCES Usuario (Cpf),
	FOREIGN KEY (id_item) REFERENCES Item (id_item)
	
);

CREATE TABLE Carteira (
	id_usuario varchar(11),
	saldo int NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES Usuario (Cpf)
); 

CREATE TABLE Carrinho_compra (
	id_item int,
	id_usuario varchar(11),
	FOREIGN KEY (id_item) REFERENCES Item (id_item),
	FOREIGN KEY (id_usuario) REFERENCES Usuario (Cpf)
);
