import { Router } from "express";
import { getCategories, postCategories } from "../controllers/category_controller.js";

//  instantiate a router
const categoryRouter = Router();


// Define your routes

// router to get categories
categoryRouter.get("/categories", getCategories);

// router to add/post categories
categoryRouter.post("/categories", postCategories);

// Export your router
export default categoryRouter;