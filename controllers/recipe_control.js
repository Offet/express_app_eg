import { RecipeModel } from "../models/recipe_model.js";

export const getRecipes = async (req, res, next) => { /* next is used to handle try catch errors in express*/
    try {
        // get all recipes from database 
    const allRecipes = await RecipeModel.find(); /* find is used to retrieve items*/
        // Return all recipes
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
};


export const postRecipes = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);  /* anywhere there is await, add async at the top*/
        // return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

/* OLD PATCH RECIPE*/
// export const patchRecipe = async (req, res, next) => { /* the id can also be called recipeId*/
//     try {
//     // update recipe by id using the findIdAndUpdate method
//         const deletedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id);
//         // Return response(res.json("whatever you have to say"))
//         res.json("Recipe Updated!")
//     } catch (error) {
//         next(error);
//     }
// };

// Updating a recipe (New Patch recipe). This is to take effect when the user marks an item as favourite
export const patchRecipe = async (req, res, next) => {
    try {
        // update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // return response
        res.json(updatedRecipe);
    } catch (error) {
        next(error);
    }
};


export const deleteRecipe = async (req, res, next) => {
    try {
    // delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response(res.json("whatever you have to say"))
        res.json("Recipe Deleted!");
    } catch (error) {
        next(error);
    }
};

export const getRecipeId = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} is available`)
};