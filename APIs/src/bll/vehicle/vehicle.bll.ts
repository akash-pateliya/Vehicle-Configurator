import { HmacSHA1 } from "crypto-js";
import * as jwt from "jsonwebtoken";
import { getManager } from "typeorm";
import { User } from "../../entity/user/User";
import { Vehicle } from "../../entity/vehicle/Vehicle";

export class vehicleBLL {

    async addVehicle(vehicle: Vehicle){
        try {
            const result = await getManager().save(Vehicle, vehicle);
            return result;
        } catch (error) {
            throw new Error(`Method : addVehicle, Class : vehicleBLL, Error : ${error}`);
        }
    }

    async getManufacturer(segment: string){
        try {
            const query = `SELECT DISTINCT manufacturer FROM vehicles WHERE segment LIKE '%${segment}%'`;
            const result = await getManager().query(query);
            return result;
        } catch (error) {
            throw new Error(`Method : getManufacturer, Class : vehicleBLL, Error : ${error}`);
        }
    }

    async getVariant(segment: string, manufacturer: string){
        try {
            const query = `SELECT DISTINCT variant FROM vehicles WHERE segment LIKE '%${segment}%' and manufacturer LIKE '%${manufacturer}%'`;
            const result = await getManager().query(query);
            return result;
        } catch (error) {
            throw new Error(`Method : getVariant, Class : vehicleBLL, Error : ${error}`);
        }
    }
}