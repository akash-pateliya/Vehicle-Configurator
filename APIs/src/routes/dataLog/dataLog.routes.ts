import { Router } from "express";
import { datalogController } from "../../controller/datalog/datalog.controller";
import { authentication } from "../../middleware/jwt.middleware";

const router = Router();

router.post("/clearDataLog", [authentication], new datalogController().clearDataLog);

export default router;