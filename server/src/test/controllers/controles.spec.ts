import { controller } from '../../controllers/controller';
import { Request, Response } from 'express';
import { jest } from 'jest';

describe('Controller', () => {
  let controller: Controller;
  let request: Request;
  let response: Response;

  beforeEach(() => {
    controller = new Controller();
    request = { body: { name: 'Product 1' } };
    response = { json: jest.fn() };
  });

  it('should create a product', async () => {
    await controller.create(request, response);
    expect(response.json).toBeCalledWith({ messague: 'producto guardado' });
  });

  it('should update a product', () => {
    controller.update(request, response);
    expect(response.json).toBeCalledWith({ text: 'actualizar productos ' + request.params.id });
  });

  it('should get a product', () => {
    controller.getOne(request, response);
    expect(response.json).toBeCalledWith({ text: 'un producto ' + request.params.id });
  });

  it('should delete a product', () => {
    controller.delete(request, response);
    expect(response.json).toBeCalledWith({ text: 'borrar productos' });
  });

  it('should list products', async () => {
    const productos = await controller.list(request, response);
    expect(productos).toBeInstanceOf(Array);
  });
});