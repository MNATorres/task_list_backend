CREATE DATABASE nombre_de_tu_base_de_datos;

CREATE TABLE tasks (
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  createAt VARCHAR(255) NOT NULL,
  complete BOOLEAN NOT NULL
);