import multer from "multer";

//  import multer savefiles
import { multerSaveFilesOrg } from "multer-savefilesorg";

// create upload 
export const localUpload = multer({dest: "uploads"});

//  create remote upload
export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: "/uploads/*"
    })
});