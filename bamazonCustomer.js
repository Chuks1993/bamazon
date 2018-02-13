var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as ID " + connection.threadId + "\n");
  readProducts();
  whatToBuy();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      
      console.log(res[i].item_id + " | " + res[i].product_name + " | Price $" + res[i].price);
    } 
    console.log("-----------------------------------");
  });
}

function whatToBuy() {
inquirer.prompt([
      {
        name: "ID",
        message: "What is the ID of product you would like to purchase?\n"
      }, {
        name: "quantity",
        message: "How many would you like?\n"
      }
    ]).then(function(answers) {
   
      var answerID = parseInt(answers.ID);
      var answerQuantity = answers.quantity;
      connection.query("SELECT * FROM products", function(err, res) {
        
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      
      if (res[i].item_id === answerID) {
        var cost = (res[i].price * res[i].stock_quantity); 
        console.log("-----------------------------------");
        console.log("Your total cost: $" + cost);

        if (res[i].stock_quantity < answerQuantity) {
          console.log("Insufficient Quantity!");
        } else {
          updatedQuantity = res[i].stock_quantity - answerQuantity;
        }
      }
    }
    console.log("-----------------------------------");
    function updateProduct() {
  console.log("Updating...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: updatedQuantity
      },
      {
        item_id: answerID
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

updateProduct();
  });
  
})
};



