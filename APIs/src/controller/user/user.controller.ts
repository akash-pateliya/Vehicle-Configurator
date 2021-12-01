import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { adminBLL } from "../../bll/admin/admin.bll";
import { userBLL } from "../../bll/user/user.bll";
import { eErrorMessage } from "../../enums/errors.enum";
import { eFunction } from "../../enums/function.enum";
import { eModule } from "../../enums/modules.enum";
import { eResponse } from "../../enums/response.enum";
import { eCrud } from "../../enums/webApiRequests.enum";
import { log } from "../../utils/logger/logger";

export class userController {
  async signupUser(req: Request, res: Response, next: NextFunction) {
    log.request(req, eCrud.Post, eModule.User, eFunction.SignUp);
    try {
      const result = await new userBLL().registerUser(req.body);
      if (result) {
        log.info(StatusCodes.OK, req.path, eModule.User, eFunction.SignUp, result);
        res.status(StatusCodes.OK).send(result);
      }
      else {
        log.error(StatusCodes.NO_CONTENT, req.path, eModule.User, eFunction.SignUp, eErrorMessage.SomethingWentWrong);
        res.status(StatusCodes.NO_CONTENT).send(eErrorMessage.SomethingWentWrong);
      }
    } catch (error) {
      log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.User, eFunction.SignUp, error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : signupUser, Class : userController, Error : ${error}`);
    }
  }
  async signinUser(req: Request, res: Response, next: NextFunction) {
    log.request(req, eCrud.Post, eModule.User, eFunction.SignIn);
    try {
      const result = await new userBLL().loginUser(req.body.userName, req.body.password);
      if (result) {
        log.info(StatusCodes.OK, req.path, eModule.User, eFunction.SignIn, result);
        res.status(StatusCodes.OK).send(result);
      } else {
        log.info(StatusCodes.NOT_FOUND, req.path, eModule.User, eFunction.SignIn, eResponse.BadCredentials);
        res.status(StatusCodes.NOT_FOUND).send(eResponse.BadCredentials);
      }
    } catch (error) {
      log.error(StatusCodes.INTERNAL_SERVER_ERROR, req.path, eModule.User, eFunction.SignIn, error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Method : signinUser, Class : userController, Error : ${error}`);
    }
  }
}
