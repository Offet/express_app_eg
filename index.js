import express from "express";
import mongoose from "mongoose";

import recipesRouter from "./routes/route.recipe.js";

//  Connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express App
const app = express();

// Apply middlewares
app.use(express.json());

//  Use routes
app.use(recipesRouter);

// Listen for incoming requests
app.listen(3000, () => {
    console.log("App listening on port 3000");
})


