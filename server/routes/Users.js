import express from "express";
const router = express.Router();
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import connection from "../server.js"

const userSchema = new mongoose.Schema(
  {
    Email: String,
    Password: String,
  },
  { collection: "Users" }
);

const UserModel = mongoose.model("Users", userSchema);


//Route To Find A Specific User
router.post("/FindUser", async (req, res) => {
    let data = await UserModel.findOne({id: req.params.id});
    if(data ==null){
        console.log(data)
        res.send({data})

    }else if (data != null){
        res.send({data, confirm: "User Exists"});
    }
    
})


// Route to Create User Profile
router.post("/CreateUser", async (req, res) => {
    let user = req.body.user
    let response = await UserModel.create(req.body);
    res.send(response)
});

//Route To Update User Info
router.put("/updateUser/:id", async (req, res) => {
    let id = req.params.id
    let updateUser = await UserModel.updateOne({ id:id}, {$set: {email: req.body.email}} )

});


//Route To Delete
router.delete("/deleteUser/:id", async (req, res) => {
    let id = req.params.id
    let deletedUser = await UserModel.deleteOne({id: id})
});


export {router, UserModel};
