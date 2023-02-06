import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: {
        type: 'String',
        required: true,
      },
      year: {
        type: 'Number',
        required: true,
      },
      color: { 
        type: 'String', 
        required: true,
      },
      status: { 
        type: 'Boolean', 
        required: false,
      },
      buyValue: { 
        type: 'Number', 
        required: true,
      },
      doorsQty: { 
        type: 'Number', 
        required: true,
      },
      seatsQty: { 
        type: 'Number', 
        required: true,
      },
    });

    this.model = models.Car || model('Car', this.schema);
  }

  public async registerCar(newCar: ICar): Promise<ICar> {
    const carCreate = await this.model.create({ ...newCar });
    return carCreate;
  }

  public async listAllCars(): Promise<ICar[]> {
    const currentCar = await this.model.find();
    return currentCar;
  }

  public async searchCar(id: string): Promise<ICar | undefined> {
    try {
      const currentCar = await this.model.findOne({ _id: id });
      if (currentCar) {
        return currentCar;
      }
    } catch (error) {
      // console.log(error);
      return undefined;
    }
    // return { message: "Car not found" };
  }
}

export default CarsModel;
