import { HmacSHA1 } from "crypto-js";
import * as jwt from "jsonwebtoken";
import { getManager } from "typeorm";
import { User } from "../../entity/user/User";

export class userBLL {

    async loginUser(userName: string, password: string): Promise<any> {
        try {
            const encryptedPassword = HmacSHA1(password, process.env.VALIDATE_KEY) + "";
            const user = await getManager().findOne(User, { userName: userName, password: encryptedPassword });
            let result = null;
            if (user) {
                const token = jwt.sign(
                    { userUid: user.userUid, username: user.userName },
                    process.env.JWT_KEY
                );
                result = {
                    userDetails: user,
                    token: token
                }
            }
            return result;
        } catch (error) {
            throw new Error(`Method : loginUser, Class : userBLL, Error : ${error}`);
        }
    }

    async registerUser(user: User): Promise<any> {
        try {
            user.password = HmacSHA1(user.password, process.env.VALIDATE_KEY) + "";
            const result = await getManager().save(User, user);
            return result;
        } catch (error) {
            throw new Error(`Method : registerUser, Class : userBLL, Error : ${error}`);
        }
    }
}