import express from 'express';
import type { Express, Router } from 'express';
import cors from 'cors';
import router from './routes';

class App{

    private server: Express;
    private routes: Router;

    constructor(){
        this.server = express();
        this.routes = router;
        this.middlewares(); // Método para checar as requisições
        this.setupRoutes(); // Método que define os destinos da API
    }

    private middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
    };

    private setupRoutes(){
        this.server.use(this.routes);
    }

    public get_server(){
        return this.server;
    }
   
}

export default new App().get_server();