import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
  
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};




//POST LOGIN
export const loginController = async(req,res) =>{ //this is call back fun.because this is take two par in req res
  try {
    const {email,password} = req.body;
    //validation
    if(!email || !password){
      return res.status(404).send({
        success:false,
        message:"Invalid email or password"
      })
    }
    //check user
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:'Email is not registerd'
      })
    }
    //decrypt the password because database me encrypted hai. compare kar rahe hai 
    const match = await comparePassword(password,user.password)
    if(!match){
      return res.status(200).sned({
       success:false,
       message:'Invalid Password'
      })
    }
    //Token, we create a method throught the sign method    , 
   const token = await JWT.sign({_id : user._id},process.env.JWT_SECRET,{expiresIn: '1h',
  });
  res.status(200).send({
    success: true,
    message:'login succesfuly',
    user:{
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address
    },
    token
  })


  } catch (error) { // jo bhi arror hai use print karo
    console.log(error)
    res.status(404).send({
      success:false,
      message:'error in login',
      error //error object ko as it is pass kar denge.
    })
  }
}


//text controller
export const testController = (req,res)=>{
  res.send("protectted Route")
}