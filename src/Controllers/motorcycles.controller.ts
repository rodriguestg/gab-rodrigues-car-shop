import { Request, Response } from 'express';
import MotorcyclesService from '../Services/motorcycles.service';

class MotorcycleController {
  private _motorcycleService: MotorcyclesService;

  constructor() {
    this._motorcycleService = new MotorcyclesService();
  }

  registerMotorcycle = async (req: Request, res: Response) => {
    const motorcycle = req.body;
    const newMotorcycle = await this._motorcycleService.registerMotorcycle(motorcycle);

    return res.status(201).json(newMotorcycle);
  };

  listAllMotorcycles = async (req: Request, res: Response) => {
    const listMotorcycles = await this._motorcycleService.listAllMotorcycles();
    return res.status(200).json(listMotorcycles);
  };

  searchMotorcycle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const motorcycle = await this._motorcycleService.searchMotorcycle(id);
    return res.status(motorcycle.status).json(motorcycle.response);
  };

  updateMotorcycle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const motorcycle = req.body;
    const { status, response } = await this._motorcycleService.searchMotorcycle(id);
    if (status !== 200) {
      return res.status(status).json(response);
    }
    const update = await this._motorcycleService.updateMotorcycle(motorcycle, id);
    return res.status(status).json(update);
  };
}

export default MotorcycleController;
