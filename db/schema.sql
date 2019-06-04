-- mDrops any existing db
DROP DATABASE IF EXISTS burgers_db;

-- Sets up the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Sets up the burgers table
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
