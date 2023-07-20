import express, { Application } from 'express';
import { routes } from './routes/routes';

import cors from 'cors';

class Server{
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000 );
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(): void{
        this.app.use('/Api/Clothes', routes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('server on portcd', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();