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
  menu();
  
});

function menu() {
  console.log("Welcome to Bamazon!\n");
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "Please select from the following options",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
  ]).then(function(choice) {
  console.log("-----------------------------------");
  
     switch(choice.menu) {
    case "View Products for Sale":
        console.log(choice.menu);
        readProducts();
        menu();
        break;
    case "View Low Inventory":
        console.log(choice.menu);
        menu();
        break;
    case "Add to Inventory":
        console.log(choice.menu);
        break;
    case "Add new product":
        console.log(choice.menu);
        break;
    default:
        console.log("Please try again");
}
  })
};



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


