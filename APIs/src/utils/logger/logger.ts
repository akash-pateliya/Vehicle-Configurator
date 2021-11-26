import { Request } from "express";
import { loggerController } from "../../controller/logger/logger.controller";
import { RequestLog } from "../../entity/logger/RequestLog";
import { IRequestLog } from "../../model/logger/IRequestLog";
import { eFunction } from "../../enums/function.enum";
import { elogType } from "../../enums/logger.enum";
import { eModule } from "../../enums/modules.enum";
import { eCrud } from "../../enums/webApiRequests.enum";
import { IInfoLog } from "../../model/logger/IInfoLog";
import { StatusCodes } from "http-status-codes";
import { InfoLog } from "../../entity/logger/InfoLog";
import { IErrorLog } from "../../model/logger/IErrorLog";
import { ErrorLog } from "../../entity/logger/ErrorLog";

export abstract class log {
  static async request(req: Request, Method: eCrud, Module: eModule, Function: eFunction) {
    try {
      const body: IRequestLog = {
        path: req.path,
        method: Method,
        module: Module,
        function: Function
      }
      await new loggerController().consoleLog(elogType.Request, body);

      const log: RequestLog = new RequestLog();
      log.body = req.body ? JSON.stringify(req.body) : null;
      log.function = Function;
      log.module = Module;
      log.params = req.params ? JSON.stringify(req.params) : null;
      log.requestPath = req.path;
      // obj.userId = req.body.userId;
      log.userId = 0; // just for testing, later remove this line and uncomment above line
      await new loggerController().databaseLog(elogType.Request, log);
    } catch (error) {
      throw new Error(`Method : request, Class : log, Error : ${error}`);
    }
  }

  static async info(Status: StatusCodes, Path: string, Module: eModule, Function: eFunction, Response: any) {
    try {
      const body: IInfoLog = {
        status: Status as number,
        path: Path,
        module: Module,
        function: Function,
        response: JSON.stringify(Response)
      }
      await new loggerController().consoleLog(elogType.Info, body);

      const log: InfoLog = new InfoLog();
      log.response = JSON.stringify(Response);
      log.status = Status as number;
      log.requestPath = Path;
      log.module = Module;
      log.function = Function;
      // obj.userId = req.body.userId;
      log.userId = 0; // just for testing, later remove this line and uncomment above line
      await new loggerController().databaseLog(elogType.Info, log);
    } catch (error) {
      throw new Error(`Method : info, Class : log, Error : ${error}`);
    }
  }

  static async error(Status: StatusCodes, Path: string, Module: eModule, Function: eFunction, err: string) {
    try {
      const body: IErrorLog = {
        status: Status as number,
        path: Path,
        module: Module,
        function: Function,
        error: err
      }
      await new loggerController().consoleLog(elogType.Error, body);

      const log: ErrorLog = new ErrorLog();
      log.error = JSON.stringify(err);
      log.function = Function;
      log.module = Module;
      log.requestPath = Path;
      log.status = Status as number;
      log.userId = 0;
      await new loggerController().databaseLog(elogType.Error, log);
    } catch (error) {
      throw new Error(`Method : error, Class : log, Error : ${error}`);
    }
  }
}
