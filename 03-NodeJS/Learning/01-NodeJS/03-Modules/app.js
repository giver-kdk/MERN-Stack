// Importing the exported modules 
let num = require("./values");
let func = require("./functions");

// Accessing module variables and functions
func.adder(num.num1, num.num2);
func.subtractor(num.num3, num.num4);

// Importing module executes the module function
require("./test");