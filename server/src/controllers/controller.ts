import {Request, Response, text} from 'express';
import pool from '../db';

class Controller{
 
    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO products set ?', [req.body]);
        res.json({messague:'producto guardado'});
    }
    public update (req: Request, res: Response) {
        
        res.json({text:'actualizar productos ' + req.params.id});
    } 
    public getOne (req: Request, res: Response) {
    res.json({text:'un producto ' + req.params.id});
    } 
    public delete (req: Request, res: Response) {
       
        res.json({text:'borrar productos'});
    } 
    public async list (req: Request, res: Response) {
        const productos = await pool.query('SELECT * FROM products');
        res.json(productos);

    }
    
}

export const controller = new Controller();