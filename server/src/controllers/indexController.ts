import {Request, Response, text} from 'express';

class IndexController{
    public index (req: Request, res: Response) {
        res.json({text: 'Api is /Other'});
        //res.send('Hola');
    } 
}

export const indexController = new IndexController();