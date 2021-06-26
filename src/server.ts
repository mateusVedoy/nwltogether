import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "./database";
import { router } from "./routes/routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "../swagger.json";

const app = express();

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use((err: Error, request:Request, response:Response, next: NextFunction) => {

    if(err instanceof Error){

        return response.status(400).json({
            status: "error",
            error:err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.listen(3000, () => { console.log("RUNNING AT PORT 3000") });