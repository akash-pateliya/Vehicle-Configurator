import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { datalogBLL } from "../../bll/datalog/datalog.bll";
import { eFunction } from "../../enums/function.enum";
import { eModule } from "../../enums/modules.enum";
import { eResponse } from "../../enums/response.enum";
import { eCrud } from "../../enums/webApiRequests.enum";
import { log } from "../../utils/logger/logger";

export class datalogController {
    async clearDataLog(req: Request, res: Response, next: NextFunction) {
        log.request(req, eCrud.Post, eModule.DataLog, eFunction.ClearDataLog);
        try {
            await new datalogBLL().ClearDataLogs(req.body.logType);
            res.status(StatusCodes.OK).send(eResponse.DataLogCleared);
            log.info(StatusCodes.OK, req.path, eModule.DataLog, eFunction.ClearDataLog, eResponse.DataLogCleared);
        } catch (error) {
            log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.DataLog, eFunction.ClearDataLog, error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : clearDataLog, Class : datalogController, Error : ${error}`);
        }
    }
}