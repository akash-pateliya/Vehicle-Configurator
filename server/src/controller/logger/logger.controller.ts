import { loggerBLL } from "../../bll/logger/logger.bll";
import { elogType } from "../../enums/logger.enum";

export class loggerController {
  private loggerBLL = new loggerBLL();
  async consoleLog(logType: elogType, log: any): Promise<any> {
    try {
      if (logType === elogType.Request) {
        await this.loggerBLL.logInConsoleForRequest(log);
      }
      else if (logType === elogType.Info) {
        await this.loggerBLL.logInConsoleForInfo(log);
      }
      else if (logType === elogType.Error) {
        await this.loggerBLL.logInConsoleForError(log);
      }
    } catch (error) {
      throw new Error(`Method : consoleLog, Class : loggerController, Error : ${error}`);
    }
  }

  async databaseLog(logType: elogType, log: any) {
    try {
      if (logType === elogType.Request) {
        await this.loggerBLL.logInDatabaseForRequest(log);
      }
      else if (logType === elogType.Info) {
        await this.loggerBLL.logInDatabaseForInfo(log);
      }
      else if (logType === elogType.Error) {
        await this.loggerBLL.logInDatabaseForError(log);
      }
    } catch (error) {
      throw new Error(`Method : databaseLog, Class : loggerController, Error : ${error}`);
    }
  }
}
