import mongoose from "mongoose"
import { Schema } from "mongoose"

const Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users", Users)

export {UserModel}