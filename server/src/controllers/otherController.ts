import {Request, Response} from 'express';
import pool from '../database';

class OtherController{
    public async list (req: Request, res: Response) {
        const productos = await pool.query('SELECT * FROM productos');
        res.json(productos);
        //res.send('Other');
    }

    public getOne (req: Request, res: Response) {
        //pool.query('DESCRIBE Productos');
        res.json({text:'un producto ' + req.params.id});
        //res.send('Other');
    } 

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({messague:'producto guardado'});
    }
    public update (req: Request, res: Response) {
       
        res.json({text:'actualizar productos ' + req.params.id});
    } 
    
    public delete (req: Request, res: Response) {
       
        res.json({text:'borrar productos'});
    } 
    
}

const otherController = new OtherController();
export default otherController;