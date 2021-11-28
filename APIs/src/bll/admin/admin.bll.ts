import { HmacSHA1 } from "crypto-js";
import * as jwt from "jsonwebtoken";
import { getManager } from "typeorm";
import { Admin } from "../../entity/admin/Admin";

export class adminBLL {

    async loginAdmin(userName: string, password: string): Promise<any> {
        try {
            const encryptedPassword = HmacSHA1(password, process.env.VALIDATE_KEY) + "";
            const admin = await getManager().findOne(Admin, { userName: userName, password: encryptedPassword });
            let result = null;
            if (admin) {
                const token = jwt.sign(
                    { adminUid: admin.adminUid, username: admin.userName },
                    process.env.JWT_KEY
                );
                result = {
                    adminDetails: admin,
                    token: token
                }
            }
            return result;
        } catch (error) {
            throw new Error(`Method : loginAdmin, Class : adminBLL, Error : ${error}`);
        }
    }

    async registerAdmin(admin: Admin): Promise<any> {
        try {
            admin.password = HmacSHA1(admin.password, process.env.VALIDATE_KEY) + "";
            const ab = 's';
            const result = await getManager().save(Admin, admin);
            return result;
        } catch (error) {
            throw new Error(`Method : registerAdmin, Class : adminBLL, Error : ${error}`);
        }
    }
}