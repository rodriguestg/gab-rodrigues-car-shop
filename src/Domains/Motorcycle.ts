import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private _category: string;
  private _engineCapacity: number;

  constructor({
    _id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ model, color, year, status, buyValue, _id });
    this._category = category;
    this._engineCapacity = engineCapacity;
  }

  private get category() : string {
    return this._category;
  }

  private set setCategory(newCategory : string) {
    this._category = newCategory;
  }

  private get engineCapacity() : number {
    return this._engineCapacity;
  }

  private set setEngineCapacity(newQty : number) {
    this._engineCapacity = newQty;
  }

  public getMotorcycle = () => ({
    id: this.id,
    model: this.model,
    year: this.year,
    color: this.color,
    status: this.status,
    buyValue: this.buyValue,
    category: this.category,
    engineCapacity: this.engineCapacity,
  });
}

export default Motorcycle;
