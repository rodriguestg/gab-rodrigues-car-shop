import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/cars.model';
import CarDomains from '../Domains/Car';

class CarsService {
  private _carModel: CarsModel;

  constructor() {
    this._carModel = new CarsModel();
  }

  registerCar = async (car: ICar) => {
    const newCar = await this._carModel.registerCar(car);
    const newCarDomains = new CarDomains(newCar).getCar();
    return newCarDomains;
  };
}

export default CarsService;
