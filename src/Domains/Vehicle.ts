import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected _id?: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;

  constructor({
    _id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IVehicle) {
    this._id = _id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status || false;
    this._buyValue = buyValue;
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
}

export default Vehicle;
