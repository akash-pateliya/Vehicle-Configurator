import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { vehicleBLL } from "../../bll/vehicle/vehicle.bll";
import { eErrorMessage } from "../../enums/errors.enum";
import { eFunction } from "../../enums/function.enum";
import { eModule } from "../../enums/modules.enum";
import { eResponse } from "../../enums/response.enum";
import { eCrud } from "../../enums/webApiRequests.enum";
import { log } from "../../utils/logger/logger";

export class vehicleController {

    async saveVehicle(req: Request, res: Response, next: NextFunction) {
        log.request(req, eCrud.Post, eModule.User, eFunction.Vehicle);
        try {
            const result = await new vehicleBLL().addVehicle(req.body);
            if (result) {
                log.info(StatusCodes.OK, req.path, eModule.User, eFunction.Vehicle, result);
                res.status(StatusCodes.OK).send(result);
            }
            else {
                log.error(StatusCodes.NO_CONTENT, req.path, eModule.User, eFunction.Vehicle, eErrorMessage.SomethingWentWrong);
                res.status(StatusCodes.NO_CONTENT).send(eErrorMessage.SomethingWentWrong);
            }
        } catch (error) {
            log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.User, eFunction.Vehicle, error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : saveVehicle, Class : vehicleController, Error : ${error}`);
        }
    }

    async getManufacturer(req: Request, res: Response, next: NextFunction) {
        log.request(req, eCrud.Post, eModule.User, eFunction.Vehicle);
        try {
            const result = await new vehicleBLL().getManufacturer(req.body.segment);
            if (result) {
                log.info(StatusCodes.OK, req.path, eModule.User, eFunction.Vehicle, result);
                res.status(StatusCodes.OK).send(result);
            } else {
                log.info(StatusCodes.NOT_FOUND, req.path, eModule.User, eFunction.Vehicle, eResponse.BadCredentials);
                res.status(StatusCodes.NOT_FOUND).send(eResponse.BadCredentials);
            }
        } catch (error) {
            log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.User, eFunction.Vehicle, error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : getManufacturer, Class : vehicleController, Error : ${error}`);
        }
    }

    async getVariant(req: Request, res: Response, next: NextFunction) {
        log.request(req, eCrud.Post, eModule.User, eFunction.Vehicle);
        try {
            const result = await new vehicleBLL().getVariant(req.body.segment, req.body.manufacturer);
            if (result) {
                log.info(StatusCodes.OK, req.path, eModule.User, eFunction.Vehicle, result);
                res.status(StatusCodes.OK).send(result);
            } else {
                log.info(StatusCodes.NOT_FOUND, req.path, eModule.User, eFunction.Vehicle, eResponse.BadCredentials);
                res.status(StatusCodes.NOT_FOUND).send(eResponse.BadCredentials);
            }
        } catch (error) {
            log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.User, eFunction.Vehicle, error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : getVariant, Class : vehicleController, Error : ${error}`);
        }
    }
}
