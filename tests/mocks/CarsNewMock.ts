import ICar from '../../src/Interfaces/ICar';

const modelUno = 'Uno da Escada';

export const validCar: ICar = {
  model: modelUno,
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validCarDB: ICar = {
  _id: '633ec9fa3df977e30e993492',
  model: modelUno,
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const getValidCar = {
  id: '633ec9fa3df977e30e993492',
  model: modelUno,
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const updatedCar = {
  model: 'Uno',
  year: 1979,
  color: 'Red',
  status: true,
  buyValue: 3500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carsArray = [
  {
    id: '63e25818a32e7454e6e3d070',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '4444c9fa3df977e300000000',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carsArrayDB: ICar[] = [
  {
    _id: '63e25818a32e7454e6e3d070',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    _id: '4444c9fa3df977e300000000',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];
