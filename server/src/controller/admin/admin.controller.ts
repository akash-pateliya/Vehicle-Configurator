import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminBLL } from "../../bll/admin/admin.bll";
import { eErrorMessage } from "../../enums/errors.enum";
import { eFunction } from "../../enums/function.enum";
import { eModule } from "../../enums/modules.enum";
import { eResponse } from "../../enums/response.enum";
import { eCrud } from "../../enums/webApiRequests.enum";
import { log } from "../../utils/logger/logger";

export class adminController {
  async signupAdmin(req: Request, res: Response, next: NextFunction) {
    log.request(req, eCrud.Post, eModule.Admin, eFunction.SignUp);
    try {
      const result = await new adminBLL().registerAdmin(req.body);
      if (result) {
        log.info(StatusCodes.OK, req.path, eModule.Admin, eFunction.SignUp, result);
        res.status(StatusCodes.OK).send(result);
      }
      else {
        log.error(StatusCodes.NO_CONTENT, req.path, eModule.Admin, eFunction.SignUp, eErrorMessage.SomethingWentWrong);
        res.status(StatusCodes.NO_CONTENT).send(eErrorMessage.SomethingWentWrong);
      }
    } catch (error) {
      log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.Admin, eFunction.SignUp, error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : signupAdmin, Class : adminController, Error : ${error}`);
    }
  }
  async signinAdmin(req: Request, res: Response, next: NextFunction) {
    log.request(req, eCrud.Post, eModule.Admin, eFunction.SignIn);
    try {
      const result = await new adminBLL().loginAdmin(req.body.username, req.body.password);
      if (result) {
        log.info(StatusCodes.OK, req.path, eModule.Admin, eFunction.SignIn, result);
        res.status(StatusCodes.OK).send(result);
      } else {
        log.info(StatusCodes.NOT_FOUND, req.path, eModule.Admin, eFunction.SignIn, eResponse.BadCredentials);
        res.status(StatusCodes.NOT_FOUND).send(eResponse.BadCredentials);
      }
    } catch (error) {
      log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.Admin, eFunction.SignIn, error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : signinAdmin, Class : adminController, Error : ${error}`);
    }
  }
}
