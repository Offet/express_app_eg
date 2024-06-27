import { Schema, model } from "mongoose";

// schema defines the structure of the database. Read more on database validation
const recipeSchema = new Schema({
    name: {type: String, unique: true, required: true}, /*unique: true and required: true are validations done on databases*/
    ingredients: [{type: String}]
});

// exporting the recipe model...recipe model is a class, and will be called with camel case
export const RecipeModel = model("Recipe", recipeSchema);
