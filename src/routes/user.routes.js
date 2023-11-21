import { userRegister } from "../controllers/user.controllers.js";
import { Router } from "express";

// create router from Router

const router=Router();

router.route("/register").post(userRegister)
// login 
// logout
export default  router ;
