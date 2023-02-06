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
}

export default CarController;
