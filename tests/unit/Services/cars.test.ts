import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validCarDB, validCar, getValidCar,
  carsArrayDB, carsArray, updatedCar } from '../../mocks/CarsNewMock';
import CarsService from '../../../src/Services/cars.service';

describe('Testando os cadastros, listagem e validações dos Carros', function () {
  it('Cadastrando um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(validCarDB);
    
    const service = new CarsService();
    const result = await service.registerCar(validCar);
    
    expect(result).to.be.deep.equal(getValidCar);
  });

  it('Listando todos os carros registrados', async function () {
    sinon.restore();
    sinon.stub(Model, 'find').resolves(carsArrayDB);

    const service = new CarsService();
    const result = await service.listAllCars();

    expect(result).to.be.deep.equal(carsArray);
  });

  const ID_CORRECT = '63e25818a32e7454e6e3d070';
  const ID_UP = '633ec9fa3df977e30e993492';
  const ID_INCORRECT = 'ID_INCORRECT';
  const ID_MONGO_INVALID = '7777c9fa3df977e30e8888888';

  it('Procurando carro por ID com sucesso', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves(carsArrayDB[0]);

    const service = new CarsService();
    const result = await service.searchCar(ID_CORRECT);

    expect(result.response).to.be.deep.equal(carsArray[0]);
  });

  it('Procurando carro com ID incorreto', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves(carsArrayDB);

    const service = new CarsService();
    const result = await service.searchCar(ID_MONGO_INVALID);

    expect(result.response).to.be.deep.equal({ message: 'Invalid mongo id' });
  });

  it('Verificando se é possível procurar um carro não cadastrado', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves();

    const service = new CarsService();
    const result = await service.searchCar(ID_INCORRECT);

    expect(result.response).to.be.deep.equal({ message: 'Car not found' });
  });

  it('Fazendo alteração das informações de um carro através do ID', async function () {
    sinon.restore();
    const service = new CarsService();
    sinon.stub(Model, 'findOne').resolves(carsArrayDB[0]);
    sinon.stub(Model, 'updateOne');
    
    const result = await service.updateCar(updatedCar, ID_UP);
    expect(result).to.be.deep.equal(carsArray[0]);
  });
});
