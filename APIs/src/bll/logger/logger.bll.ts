import { getManager } from "typeorm";
import { ErrorLog } from "../../entity/logger/ErrorLog";
import { InfoLog } from "../../entity/logger/InfoLog";
import { RequestLog } from "../../entity/logger/RequestLog";
import { IErrorLog } from "../../model/logger/IErrorLog";
import { IInfoLog } from "../../model/logger/IInfoLog";
import { IRequestLog } from "../../model/logger/IRequestLog";
import { Time } from "../../utils/datetime/datetime";

export class loggerBLL {
  async logInConsoleForRequest(log: IRequestLog) {
    try {
      console.log(`${Time.getCurrentTime()}  ${log.method}  ${log.module}  ${log.function}  ${log.path}`);
    } catch (error) {
      throw new Error(`Method : logInConsoleForRequest, Class : loggerBLL, Error : ${error}`);
    }
  }

  async logInConsoleForInfo(log: IInfoLog) {
    try {
      console.log(`${Time.getCurrentTime()}  ${log.status}  ${log.module}  ${log.function}  ${log.path}  ${log.response}`);
    } catch (error) {
      throw new Error(`Method : logInConsoleForInfo, Class : loggerBLL, Error : ${error}`);
    }
  }

  async logInConsoleForError(log: IErrorLog) {
    try {
      console.log(`${Time.getCurrentTime()}  ${log.status}  ${log.module}  ${log.function}  ${log.path}  ${log.error}`);
    } catch (error) {
      throw new Error(`Method : logInConsoleForError, Class : loggerBLL, Error : ${error}`);
    }
  }

  async logInDatabaseForRequest(log: RequestLog) {
    try {
      await getManager().save(log);
    } catch (error) {
      throw new Error(`Method : logInDatabaseForRequest, Class : loggerBLL, Error : ${error}`);
    }
  }

  async logInDatabaseForInfo(log: InfoLog) {
    try {
      await getManager().save(log);
    } catch (error) {
      throw new Error(`Method : logInDatabaseForInfo, Class : loggerBLL, Error : ${error}`);
    }
  }

  async logInDatabaseForError(log: ErrorLog) {
    try {
      await getManager().save(log);
    } catch (error) {
      throw new Error(`Method : logInDatabaseForError, Class : loggerBLL, Error : ${error}`);
    }
  }
}
