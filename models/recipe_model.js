import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose";

// schema defines the structure of the database. Read more on database validation
const recipeSchema = new Schema({
    name: {type: String, unique: true, required: true}, /*unique: true and required: true are validations done on databases*/
    categoryId: {type: Types.ObjectId, ref: "Category", required: true},
    description: {type: String, required: true},
    ingredients: [{type: String}],
    image: {type: String, required: true},
    favourites: {type: Boolean, default: false}
},{
    timestamps: true /* it will automatically insert created at and updated at without you having to manually input it*/
});

recipeSchema.plugin(normalize);

// exporting the recipe model...recipe model is a class, and will be called with camel case
export const RecipeModel = model("Recipe", recipeSchema);
