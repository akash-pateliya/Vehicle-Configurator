import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as env from "dotenv";
import adminRoutes from "./routes/admin/admin.routes";
import datalogRoutes from "./routes/dataLog/dataLog.routes";
import userRoutes from "./routes/user/user.routes";
import vehicleRoutes from "./routes/vehicle/vehicle.routes";
import cors = require("cors");

createConnection().then(async connection => {
    if (connection.isConnected) {
        console.log("Connected to MySql");
    }
    
    env.config();

    // Create Express app
    const app = express();
    app.use(express.json());
    app.use(cors());

    //routes
    app.use('/admin', adminRoutes);
    app.use('/datalog', datalogRoutes);
    app.use('/user', userRoutes);
    app.use('/vehicle', vehicleRoutes);

    // start express server
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Express server has started on port ${process.env.SERVER_PORT}. Click http://localhost:${process.env.SERVER_PORT}/ `);
    })
}).catch(error => console.log(error));
