import { Request, Response } from 'express';
import CarsService from '../Services/cars.service';

class CarController {
  private _carService: CarsService;

  constructor() {
    this._carService = new CarsService();
  }

  registerCar = async (req: Request, res: Response) => {
    const car = req.body;
    const newCar = await this._carService.registerCar(car);

    return res.status(201).json(newCar);
  };

  listAllCars = async (req: Request, res: Response) => {
    const listCars = await this._carService.listAllCars();
    return res.status(200).json(listCars);
  };

  searchCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await this._carService.searchCar(id);
    return res.status(car.status).json(car.response);
  };

  updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = req.body;
    const { status, response } = await this._carService.searchCar(id);
    if (status !== 200) {
      return res.status(status).json(response);
    }
    const update = await this._carService.updateCar(car, id);
    return res.status(status).json(update);
  };
}

export default CarController;
