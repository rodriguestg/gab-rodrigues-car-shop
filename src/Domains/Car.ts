import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private _doorsQty: number;
  private _seatsQty: number;

  constructor({
    _id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ model, color, year, status, buyValue, _id });
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  private get doorsQty() : number {
    return this._doorsQty;
  }

  private set setDoorsQty(newQty : number) {
    this._doorsQty = newQty;
  }

  private get seatsQty() : number {
    return this._seatsQty;
  }

  private set setSeatsQty(newQty : number) {
    this._seatsQty = newQty;
  }

  public getCar = () => ({
    id: this.id,
    model: this.model,
    year: this.year,
    color: this.color,
    status: this.status,
    buyValue: this.buyValue,
    doorsQty: this.doorsQty,
    seatsQty: this.seatsQty,
  });
}

export default Car;
