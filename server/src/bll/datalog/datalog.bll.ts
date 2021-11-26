import { getManager } from "typeorm";
import { elogType } from "../../enums/logger.enum";

export class datalogBLL {

    async ClearDataLogs(logType: elogType) {
        try {
            await getManager().query('CALL sp_clearDataLog(?)', [logType]);
        } catch (error) {
            throw new Error(`Method : ClearDataLogs, Class : datalogBLL, Error : ${error}`);
        }
    }
}