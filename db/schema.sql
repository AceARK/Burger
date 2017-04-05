CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers IF NOT EXISTS(
id INTEGER(5) AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(500) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- in order to get current timestamp when devoured state is changed
);