import ICar from '../Interfaces/ICar';

class Car {
  private _id?: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
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
    this._id = _id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status || false;
    this._buyValue = buyValue;
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

  protected get model() : string {
    return this._model;
  }

  protected get year() : number {
    return this._year;
  }

  protected get color() : string {
    return this._color;
  }

  protected get status() : boolean {
    return this._status;
  }

  protected get buyValue() : number {
    return this._buyValue;
  }

  protected get id() : string | undefined {
    return this._id;
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

  // public getAllCars = () => ({
  //   id: this.id,
  //   model: this.model,
  //   year: this.year,
  //   color: this.color,
  //   status: this.status,
  //   buyValue: this.buyValue,
  //   doorsQty: this.doorsQty,
  //   seatsQty: this.seatsQty,
  // });
}

export default Car;
