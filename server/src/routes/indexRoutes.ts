import { Router } from "express";
import {indexController} from "../controllers/Controller";

class IndexRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.list);
        this.router.get('/:id', indexController.getOne);
        this.router.post('/', indexController.create);
        this.router.put('/:id', indexController.update);
        this.router.delete('/:id', indexController.delete);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;