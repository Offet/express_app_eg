import bcrypt from "bcrypt";
import { userModel } from "../models/user.js";


export const register = async (req, res, next) => {
    try {
        // hash user's password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        //  create a new user
        const registeredUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        });
        // return response
        res.status(201).json("User registered successfully");
    } catch (error) {
        next(error);
    }    
};

const login = async (req, res, next) => {
    // try {
    //     // hash user's password
    //     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    //     //  create a new user
    //     const loggedUser = await userModel.create({
    //         ...req.body,
    //         password: hashedPassword
    //     });
    //     // return response
    //     res.status(201).json("User registered successfully");
    // } catch (error) {
    //     next(error);
    // }    
};


const logout = async () => {};

const profile = async () => {};