import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  id?: string,
  category: string,
  engineCapacity: number,
}

export default IMotorcycle;