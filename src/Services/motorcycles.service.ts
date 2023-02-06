import MotorcyclesModel from '../Models/motocycle.model';
import MotorcyclesDomains from '../Domains/Motorcycle';
import isValidObjectId from '../Utills/validationId';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesService {
  private _motorcycleModel: MotorcyclesModel;

  constructor() {
    this._motorcycleModel = new MotorcyclesModel();
  }

  registerMotorcycle = async (motorcycle: IMotorcycle) => {
    const newMotorcycle = await this._motorcycleModel.registerVehicle(motorcycle);
    const newMotorcycleDomains = new MotorcyclesDomains(newMotorcycle).getMotorcycle();
    return newMotorcycleDomains;
  };

  listAllMotorcycles = async () => {
    const listMotorcycles = await this._motorcycleModel.listAllVehicles();
    const listMotorcyclesDomains = listMotorcycles
      .map((motorcycle) => new MotorcyclesDomains(motorcycle).getMotorcycle());
    return listMotorcyclesDomains;
  };

  searchMotorcycle = async (id: string) => {
    const validation = await isValidObjectId(id);
    if (validation === true) {
      return { status: 422, response: { message: 'Invalid mongo id' } };
    }

    const currentMotorcycle = await this._motorcycleModel.searchVehicle(id);
    
    if (currentMotorcycle) {
      const getMotorcycleDomains = new MotorcyclesDomains(currentMotorcycle).getMotorcycle();
      return { status: 200, response: getMotorcycleDomains };
    }

    return { status: 404, response: { message: 'Motorcycle not found' } };
  };

  updateMotorcycle = async (motorcycle: IMotorcycle, id: string) => {
    await this._motorcycleModel.updateVehicle(motorcycle, id);
    const currentMotorcycle = await this._motorcycleModel.searchVehicle(id);

    if (currentMotorcycle) {
      const getMotorcycleDomains = new MotorcyclesDomains(currentMotorcycle).getMotorcycle();
      return getMotorcycleDomains;
    }

    return currentMotorcycle;
  };
}

export default MotorcyclesService;
