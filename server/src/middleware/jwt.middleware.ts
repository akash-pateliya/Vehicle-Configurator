import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import * as jwt from "jsonwebtoken";
import { eFunction } from "../enums/function.enum";
import { eModule } from "../enums/modules.enum";
import { eResponse } from "../enums/response.enum";
import { log } from "../utils/logger/logger";

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.hasOwnProperty('authorization')) {
        //Get the jwt token from the head
        const token = <string>req.headers["authorization"];
        //Try to validate the token and get data
        try {
            let jwtPayload = <any>jwt.verify(token, process.env.JWT_KEY);
            res.locals.jwtPayload = jwtPayload;
        } catch (error) {
            //If token is not valid, respond with 401 (unauthorized)
            log.error(StatusCodes.UNAUTHORIZED, req.path, eModule.Middleware, eFunction.JWT, error);
            res.status(StatusCodes.UNAUTHORIZED).send(eResponse.Unauthorized);
            return;
        }
    } else {
        log.error(StatusCodes.NOT_FOUND, req.path, eModule.Middleware, eFunction.JWT, eResponse.TokenNotFount);
        res.status(StatusCodes.NOT_FOUND).send(eResponse.TokenNotFount);
        return;
    }
    //Call the next middleware or controller
    next();
};
