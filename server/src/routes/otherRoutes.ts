import { Router } from "express";
import otherController from "../controllers/otherController";

class OtherRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', otherController.list);
        this.router.get('/:id', otherController.getOne);
        this.router.post('/', otherController.create);
        this.router.put('/:id', otherController.update);
        this.router.delete('/:id', otherController.delete);
    }
}

const otherRoutes = new OtherRoutes();
export default otherRoutes.router;