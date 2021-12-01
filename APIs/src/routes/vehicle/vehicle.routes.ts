import { Router } from "express";
import { vehicleController } from "../../controller/vehicle/vehicle.controlller";

const router = Router();

router.post("/save-vehicle", new vehicleController().saveVehicle);
router.post("/get-manufacturer", new vehicleController().getManufacturer);
router.post("/get-variant", new vehicleController().getVariant);

export default router;
