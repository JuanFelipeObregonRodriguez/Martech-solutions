CREATE DATABASE martech;

USE martech;

CREATE TABLE Productos(
    id INT(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nombre VARCHAR(120),
    categoria VARCHAR(120),
    precio DECIMAL(9.2),
    valor INT(12),
    stock INT(12)
);

CREATE TABLE Categorias(
    id INT(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120),
    descripcion VARCHAR(120)
);