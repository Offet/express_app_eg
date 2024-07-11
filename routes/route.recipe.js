import { Router } from "express";
import {remoteUpload } from "../middlewares/upload.js";
// import { RecipeModel } from "../models/recipe_model.js";
import { deleteRecipe, getRecipeId, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe_control.js";
import { checkUserSession } from "../middlewares/auth.js";



//  Create a router
const recipesRouter = Router();


// apply middleware to the recipe router
// recipesRouter.use(checkUserSession);

//  defining all routes 
recipesRouter.get("/recipes", getRecipes);

/* router that posts recipes*/
recipesRouter.post("/recipes", checkUserSession, remoteUpload.single('image'), postRecipes);

/*router that updates a recipe - patch*/
recipesRouter.patch("/recipes/:id", patchRecipe);

/* router that deletes a recipe - delete */
recipesRouter.delete("/recipes/:id", deleteRecipe);

recipesRouter.get("/recipes/:id", getRecipeId);

//  export router
export default recipesRouter;






// ending p - dmOsgcVoSSmh7nCd