import { categoryModel } from "../models/category.js";


// getting categories
export const getCategories = async (req, res, next) => {
    try {
        //  get all categories from database
        const allCategories = await categoryModel.find();
        res.json(allCategories);
    } catch (error) {
        next(error);
        
    }
};

//  Adding new categories
export const postCategories = async (req, res, next) => {
    try {
        const newCategory = categoryModel.create(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};