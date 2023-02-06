import {
  Model,
  models,
  Schema,
  model,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<I> {
  protected model: Model<I>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async registerVehicle(newVehicle: I): Promise<I> {
    const vehicleCreate = await this.model.create({ ...newVehicle });
    return vehicleCreate;
  }

  public async listAllVehicles(): Promise<I[]> {
    const currentVehicle = await this.model.find();
    return currentVehicle;
  }

  public async searchVehicle(id: string): Promise<I | undefined> {
    try {
      const currentVehicle = await this.model.findOne({ _id: id });
      if (currentVehicle) {
        return currentVehicle;
      }
      return undefined;
    } catch (error) {
      return undefined;
    }
  }

  public async updateVehicle(vehicle: UpdateQuery<I>, id: string) {
    const currentVehicle = await this.model.updateOne({ _id: id }, vehicle);
    return currentVehicle;
  }
}

export default AbstractODM;
