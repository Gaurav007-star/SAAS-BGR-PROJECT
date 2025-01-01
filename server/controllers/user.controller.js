import { Webhook } from "svix";
import UserModel from "../models/user.model.js";

// https://localhost:4000/api/user/webhooks

export const register = async (req, res) => {
  console.log(req.body);
  const { clerkId, email, photo, firstname, lastname } = req.body;
  try {
    const createUser = await UserModel.create({
      clerkId: clerkId,
      email: email,
      photo: photo,
      firstname: firstname,
      lastname: lastname
    });

    res.json({ createUser });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getUser = async(req,res)=>{
  try {
    const id = req.params.id
    console.log("get user data",id);
    
    const user = await UserModel.findOne({clerkId
      :id})

    if(!user){
      return res.status(400).json({
        success:false,
        message:"User not found"
      })
    }

    return res.status(200).json({
      success:true,
      user
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

export const update = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("update coming data", req.body);
    await UserModel.updateOne(
      {
        clerkId: userId
      },
      {
        $set: {}
      }
    );
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
