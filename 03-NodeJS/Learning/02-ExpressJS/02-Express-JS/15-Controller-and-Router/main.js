// Controllers are the functions that process specific request and give response 
// Controllers are specific but Middleware are generic 
const express = require("express");
const app = express();
// Import routers
const productRouter = require("./routes-2/products");
const userRouter = require("./routes-2/user");
const homeRouter = require("./routes-2/home");

// Use the respective routers
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/", homeRouter);

app.listen(5000, () => console.log("Listening on Port 5000!!!"));