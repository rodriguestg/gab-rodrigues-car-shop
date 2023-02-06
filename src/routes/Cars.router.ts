import express from 'express';
import CarsController from '../Controllers/cars.controller';

const carController = new CarsController();
const route = express.Router();

route.post('/', (req, res) => carController.registerCar(req, res));

export default route;
