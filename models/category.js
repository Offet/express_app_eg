import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const categorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
},{
    timestamps: true /* it will automatically insert created at and updated at without you having to manually input it*/
});

categorySchema.plugin(normalize);

export const categoryModel = model("Category", categorySchema);