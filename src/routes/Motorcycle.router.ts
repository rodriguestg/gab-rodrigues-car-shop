import express from 'express';
import MotorcyclesController from '../Controllers/motorcycles.controller';

const motorcyclesController = new MotorcyclesController();
const route = express.Router();

route.post('/', (req, res) => motorcyclesController.registerMotorcycle(req, res));
route.get('/', (req, res) => motorcyclesController.listAllMotorcycles(req, res));
route.put('/:id', (req, res) => motorcyclesController.updateMotorcycle(req, res));
route.get('/:id', (req, res) => motorcyclesController.searchMotorcycle(req, res));

export default route;
