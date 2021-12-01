import { Router } from "express";
import { userController } from "../../controller/user/user.controller";

const router = Router();

router.post("/signup", new userController().signupUser);
router.post("/signin", new userController().signinUser);

export default router;
