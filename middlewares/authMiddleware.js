import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';
//Protected Routes for token base ,
// token ko compare karnege


// request jab bhi ham get karenge ,so uskebad next validate hoga baad me response send hoga.
export const requireSignIn = async (req, res,next) =>{//middelware function
    try {
       const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
    }
}

// iske madat se kisi bhi route ko protect kar sakte hai


//admin access

export const isAdmin = async (req,res,next) =>{
    try {
       const user = await userModel.findById(req.user._id)
       if(user.role !== 1){
        return res.status(401).send({
            success:false,
            message:'UnAuthorized Access',
        })
       } else{
        next();
       }
    } catch (error) {
       res.status(401).send({
        success:false,
        error,
        message:'Error in admin middelware'
       })
    }
}