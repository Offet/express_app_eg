import { Schema, model } from "mongoose";

// schema defines the structure of the database
const recipeSchema = new Schema({
    name: {type: String},
    ingredients: [{type: String}]
});

// exporting the recipe model...recipe model is a class, and will be called with camel case
export const RecipeModel = model("Recipe", recipeSchema);
