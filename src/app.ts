import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use('/cars', router.carsRouter);

export default app;
