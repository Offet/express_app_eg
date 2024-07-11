import { categoryModel } from "../models/category.js";


// getting categories
export const getCategories = async (req, res, next) => {
    try {
        //  get all queries
        const {limit, skip, filter, fields} = req.query; /* the term for this syntax is destructuring*/
        //  get all categories from database
        const allCategories = await categoryModel
            .find(filter ? JSON.parse(filter) : {}) /* fllter can be replaced with search*/
            .select(fields ? JSON.parse(fields) : '')
            .limit(limit ? parseInt(limit) : undefined)
            .skip(skip ? parseInt(skip) : undefined);
        // return all recipe as response
        res.json(allCategories);
    } catch (error) {
        next(error);
        
    }
};

//  Adding new categories
export const postCategories = async (req, res, next) => {
    try {
        // console.log(req.body);
        // console.log(req.file);
        //  add category to database
        const newCategory = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        //  return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

