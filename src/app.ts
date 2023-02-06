import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use('/cars', router.carsRouter);
app.use('/motorcycles', router.motorcycleRouter);

export default app;
