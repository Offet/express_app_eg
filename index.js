import express from "express";
import mongoose from "mongoose";

import recipesRouter from "./routes/recipe.js";

//  Connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express App
const app = express();

// Apply middlewares
app.use(express.json());

// Define routes

// app.get('/' ,(req, res)=> {
//     res.send ("You are welcome!");
// });

app.get('/' ,(req, res)=> {
    res.json ("You are welcome!");
});

// doing another route definition
app.post("/login", (req, res) => {
    res.json("Login Successful!");
});

//  Use routes
app.use(recipesRouter);

app.get("/cart", (req, res) => {
    res.json("Your cart is here!");
});

app.patch("/recent", (req, res) => {
    res.json ("Find your recent works here!");
});

// //  define an endpoint that wil get a single recipe
// app.get("/recipes/", (req, res) => {
//     res.json("Find your fufu recipe here!")
// })

// Listen for incoming requests
app.listen(3000, () => {
    console.log("App listening on port 3000");
})


