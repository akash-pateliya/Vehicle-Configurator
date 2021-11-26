import { Router } from "express";
import { adminController } from "../../controller/admin/admin.controller";

const router = Router();

router.post("/signup", new adminController().signupAdmin);
router.post("/signin", new adminController().signinAdmin);

export default router;
