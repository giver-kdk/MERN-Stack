// Router is used to group/modularize the collection of related routes
const express = require("express");
const app = express();
// Import routers for using in our app
const productRouter = require("./routes-1/products");
const userRouter = require("./routes-1/user");
const homeRouter = require("./routes-1/home");

// Use routers for specified 'base' route
app.use("/product", productRouter);			// Grouping product router
app.use("/user", userRouter);				// Grouping user router
app.use("/", homeRouter);				// Grouping user router


app.listen(5000, () => console.log("Listening on Port 5000!!!"));

// NOTE: It is recommended to use API Testing tools like Thunder Client or Postman for http request