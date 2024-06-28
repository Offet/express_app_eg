import express from "express";
import mongoose from "mongoose";

import recipesRouter from "./routes/route.recipe.js";
//  import category router so that we can use it
import categoryRouter from "./routes/route.category.js";

//  Connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express App
const app = express();

// Apply middlewares
app.use(express.json());

//  Use routes
app.use(recipesRouter); /* using recipe router*/
app.use(categoryRouter); /* using category router*/


// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

