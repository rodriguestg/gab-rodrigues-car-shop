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
}

export default CarsModel;
