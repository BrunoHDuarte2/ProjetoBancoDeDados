CREATE TABLE Usuario (
	id_usuario serial PRIMARY KEY,
	Email varchar(35) NOT NULL,
	Nome varchar(35) NOT NULL,
	Senha varchar(35) NOT NULL,
	Foto bytea
);

CREATE TABLE Pagamento (
	id_pagamento serial PRIMARY KEY,
	Valor int NOT NULL,
	Data varchar(10) NOT NULL,
	Status varchar(20) NOT NULL
);

CREATE TABLE Produtora (
	Id_produtora varchar(14) PRIMARY KEY,
	Nome varchar(40) NOT NULL
);

CREATE TABLE Avaliacao (
	id_avaliacao serial PRIMARY KEY,
	Nota int NOT NULL,
	Comentario varchar(150) NOT NULL
);

CREATE TABLE Item (
	id_item serial PRIMARY KEY,
	Nome varchar(30) NOT NULL,
	Descrição varchar(100) NOT NULL,
	Preco int NOT NULL,
	Data_lancamento varchar(10) NOT NULL,
	id_produtora varchar(100),
  FOREIGN KEY (id_produtora) REFERENCES Produtora (Id_produtora)
);


CREATE TABLE Wishlist (
	Id serial PRIMARY KEY,
	id_usuario int,
	FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)
);

CREATE TABLE Inventario (
	Id_inventario serial PRIMARY KEY,
	id_usuario int,
	id_item int,
	FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario),
	FOREIGN KEY (id_item) REFERENCES Item (id_item)
	
);

CREATE TABLE Carteira (
	id_usuario int,
	saldo int NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)
); 

CREATE TABLE Carrinho_compra (
	id_item int,
	id_usuario int,
	FOREIGN KEY (id_item) REFERENCES Item (id_item),
	FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)
);
