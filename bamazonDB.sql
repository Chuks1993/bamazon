
DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;
CREATE TABLE products(
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NOT NULL,
	department_name VARCHAR(45) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY(item_id)
);


INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("NIke Shoes", "Clothing and Footwear", 100.00, 50);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Lenevo Laptop", "Electronics", 500.23, 38);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Frozen Pizza", "Food", 10.11, 210);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("OldSpice body wash", "Personal Hygeine", 1000.01, 14);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Gucci shirt", "Clothing and Footwear", 40.34, 45);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Samsung Galaxy S11", "Electronics", 20.22, 89);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Lucky Charms", "Food", 2000.50, 43);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Colgate toothpaste", "Personal Hygeine", 34.12, 56);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Tesla", "Automobiles", 12.60, 75);
INSERT INTO PRODUCTS(product_name, department_name, price, stock_quantity) VALUES ("Jeep", "Automobiles", 65.12, 90);

