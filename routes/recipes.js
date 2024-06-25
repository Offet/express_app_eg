import { Router } from "express";

//  Create a router
const recipesRouter = Router();

//  defining all routes 
recipesRouter.get("/recipes", (req, res) => {
    res.json("All recipes");
});

/* router that posts recipes*/
recipesRouter.post("/recipes", (req, res) => {
    res.json("recipe added!");
});

/*router that updates a recipe - patch*/
recipesRouter.patch("/recipes/:id", (req, res) => {   /* the id can also be called recipeId*/
    res.json(`Recipe with ID ${req.params.id} updated`);
});

/* router that deletes a recipe - delete */
recipesRouter.delete("/recipes/:id", (req, res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`)
})

//  export router
export default recipesRouter;