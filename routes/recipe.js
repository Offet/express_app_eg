import { Router } from "express";

import { RecipeModel } from "../models/recipe.js";

//  Create a router
const recipesRouter = Router();

//  defining all routes 
recipesRouter.get("/recipes", (req, res) => {
    res.json("All recipes");
});

/* router that posts recipes*/
recipesRouter.post("/recipes", async (req, res) => {
    // Add recipe to database
    await RecipeModel.create(req.body)  /* anywhere there is await, add async at the top*/
    // return response
    res.json("Recipe Added!");
});

/*router that updates a recipe - patch*/
recipesRouter.patch("/recipes/:id", (req, res) => {   /* the id can also be called recipeId*/
    res.json(`Recipe with ID ${req.params.id} updated`);
});

/* router that deletes a recipe - delete */
recipesRouter.delete("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`)
})

recipesRouter.get("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} is available`)
})

//  export router
export default recipesRouter;






// ending p - dmOsgcVoSSmh7nCd