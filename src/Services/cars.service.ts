import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/cars.model';
import CarDomains from '../Domains/Car';
import isValidObjectId from '../Utills/validationId';

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

  listAllCars = async () => {
    const listCars = await this._carModel.listAllCars();
    const listCarsDomains = listCars.map((car) => new CarDomains(car).getCar());
    return listCarsDomains;
  };

  searchCar = async (id: string) => {
    const validation = await isValidObjectId(id);
    if (validation === true) {
      return { status: 422, response: { message: 'Invalid mongo id' } };
    }

    const currentCar = await this._carModel.searchCar(id);
    
    if (currentCar) {
      const getCarDomains = new CarDomains(currentCar).getCar();
      return { status: 200, response: getCarDomains };
    }

    return { status: 404, response: { message: 'Car not found' } };
  };

  updateCar = async (car: ICar, id: string) => {    
    const currentCar = await this._carModel.updateCar(car, id);

    if (currentCar) {
      const getCarDomains = new CarDomains(currentCar).getCar();
      return getCarDomains;
    }

    return currentCar;
  };
}

export default CarsService;
