import dotenv from 'dotenv';
dotenv.config(); 

import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import env from "./enviroments/enviroments.js";
import connectionDB from "./config/connection.js";

class Server {

    constructor() {
        this.app = Express();
        this.port = env.PORT;

        this.connectionDB;
        this.middlewater();
        this.routes();
    }

    // async connectionDB() {
    //     await connectionDB();
    // }

    async start() {
        try {
            await connectionDB();
            console.log('La conexión a la base de datos se ha establecido exitosamente.');
            this.listen();
        } catch (error) {
            console.error('No se pudo conectar a la base de datos:', error);
        }
    }

    middlewater() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(Express.json());
    }

    routes() {
        // las rutas
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }

}

export default Server;