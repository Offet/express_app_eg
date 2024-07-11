import { Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const userSchema = new Schema ({
    name: {type: String, required: true},
    username: {type: String, unique: true},
    email: {type: String, unique: true, required: true},
    phone: {type: String, unique: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

userSchema.plugin(toJSON);

//  export the user model
export const userModel = model("User", userSchema);