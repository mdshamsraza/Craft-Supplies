import express from 'express';
import {registerController,loginController,testController} from "../controllers/authcontroller.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//route object

const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);


//test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router;

