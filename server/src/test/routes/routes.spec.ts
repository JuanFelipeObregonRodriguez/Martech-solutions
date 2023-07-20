import { Request, Response } from 'express';
import { jest } from 'jest';
import { routes } from '../../routes/routes';

describe('Routes', () => {
  let routes: routes;
  let request: Request;
  let response: Response;

  beforeEach(() => {
    routes = new Routes();
    request = { body: { name: 'Product 1' } };
    response = { json: jest.fn() };
  });

  it('should create a product', async () => {
    await routes.post('/', controller.create, request, response);
    expect(response.json).toBeCalledWith({ messague: 'producto guardado' });
  });

  it('should update a product', async () => {
    await routes.put('/:id', controller.update, request, response);
    expect(response.json).toBeCalledWith({ text: 'actualizar productos ' + request.params.id });
  });

  it('should get a product', async () => {
    await routes.get('/:id', controller.getOne, request, response);
    expect(response.json).toBeCalledWith({ text: 'un producto ' + request.params.id });
  });

  it('should delete a product', async () => {
    await routes.delete('/:id', controller.delete, request, response);
    expect(response.json).toBeCalledWith({ text: 'borrar productos' });
  });

  it('should list products', async () => {
    const productos = await routes.get('/', controller.list, request, response);
    expect(productos).toBeInstanceOf(Array);
  });
});