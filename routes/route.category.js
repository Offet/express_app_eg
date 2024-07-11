import { Router } from "express";

// import multer from "multer";
import { remoteUpload } from "../middlewares/upload.js";

import { getCategories, postCategories } from "../controllers/category_controller.js";
import { checkUserSession } from "../middlewares/auth.js";

//  instantiate a router
const categoryRouter = Router();

// Define your routes

// router to get categories
categoryRouter.get("/categories", getCategories);

// router to add/post categories
categoryRouter.post("/categories", checkUserSession, remoteUpload.single("image"), postCategories);

// Export your router
export default categoryRouter;