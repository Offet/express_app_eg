import express from "express";
import mongoose from "mongoose";

// importing express OAS
import expressOasGenerator from "express-oas-generator";  
import recipesRouter from "./routes/route.recipe.js";
//  import category router so that we can use it
import categoryRouter from "./routes/route.category.js";

//  Connect to database
await mongoose.connect(process.env.MONGO_URL);

// create express App
const app = express();
/*add exp oas generator*/
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true, /* to serve render whether in production or development */
    tags: ["categories", "recipes"],
    mongooseModels: mongoose.modelNames(),
});

// Apply middlewares
app.use(express.json());

//  Use routes
app.use(recipesRouter); /* using recipe router*/
app.use(categoryRouter); /* using category router */
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));


// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

