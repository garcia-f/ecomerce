import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import env from "./enviroments/enviroments.js";
import connectionDB from "./config/connection.js";

import productRouter from "./routes/product.routes.js";

class Server {

    constructor() {
        this.app = Express();
        this.port = env.PORT;

        this.connection();
        this.middlewater();
        this.routes();
    }

    async connection() {
        await connectionDB();
    }

    middlewater() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(Express.json());
    }

    routes() {
        this.app.use('/product', productRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }

}

export default Server;