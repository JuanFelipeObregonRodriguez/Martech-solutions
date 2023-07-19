CREATE DATABASE ariadna;

USE ariadna;

CREATE TABLE Productos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    nombre VARCHAR(180),
    categoria VARCHAR(180),
    precio DECIMAL(9.2),
    valor INT(11),
    stock INT(11)
);

CREATE TABLE Categorias(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    descripcion VARCHAR(180)
);