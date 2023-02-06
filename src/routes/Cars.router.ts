import express from 'express';
import CarsController from '../Controllers/cars.controller';

const carController = new CarsController();
const route = express.Router();

route.post('/', (req, res) => carController.registerCar(req, res));
route.get('/', (req, res) => carController.listAllCars(req, res));
route.put('/:id', (req, res) => carController.updateCar(req, res));
route.get('/:id', (req, res) => carController.searchCar(req, res));

export default route;
