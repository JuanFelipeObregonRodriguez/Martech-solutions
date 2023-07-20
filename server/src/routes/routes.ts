import { Router } from "express";
import { controller } from "../controllers/controller";

class Routes{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controller.create);
        this.router.put('/:id', controller.update);
        this.router.delete('/:id', controller.delete);
        this.router.get('/:id', controller.getOne);
        this.router.get('/', controller.list);
    }
}

export const routes = new Routes().router;