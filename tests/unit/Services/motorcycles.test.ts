import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validMotorcycleDB, validMotorcycle, getValidMotorcycle,
  motorcyclesArrayDB, motorcyclesArray, updatedMotorcycle } from '../../mocks/MotorcyclesNewMock';
import MotorcyclesService from '../../../src/Services/motorcycles.service';

describe('Testando os cadastros, listagem e validações dos Motos', function () {
  it('Cadastrando uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(validMotorcycleDB);
    
    const service = new MotorcyclesService();
    const result = await service.registerMotorcycle(validMotorcycle);
    
    expect(result).to.be.deep.equal(getValidMotorcycle);
  });

  it('Listando todos as motos registradas', async function () {
    sinon.restore();
    sinon.stub(Model, 'find').resolves(motorcyclesArrayDB);

    const service = new MotorcyclesService();
    const result = await service.listAllMotorcycles();

    expect(result).to.be.deep.equal(motorcyclesArray);
  });

  const ID_CORRECT = '63e25818a32e7454e6e3d070';
  const ID_INCORRECT = 'ID_INCORRECT';
  const ID_MONGO_INVALID = '7777c9fa3df977e30e8888888';

  it('Procurando moto por ID com sucesso', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves(motorcyclesArrayDB[0]);

    const service = new MotorcyclesService();
    const result = await service.searchMotorcycle(ID_CORRECT);

    expect(result.response).to.be.deep.equal(motorcyclesArray[0]);
  });

  it('Procurando moto com ID incorreto', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves(motorcyclesArrayDB);

    const service = new MotorcyclesService();
    const result = await service.searchMotorcycle(ID_MONGO_INVALID);

    expect(result.response).to.be.deep.equal({ message: 'Invalid mongo id' });
  });

  it('Verificando se é possível procurar uma moto não cadastrada', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves();

    const service = new MotorcyclesService();
    const result = await service.searchMotorcycle(ID_INCORRECT);

    expect(result.response).to.be.deep.equal({ message: 'Motorcycle not found' });
  });

  it('Fazendo alteração das informações de uma moto através do ID', async function () {
    sinon.restore();
    sinon.stub(Model, 'findOne').resolves(motorcyclesArrayDB[0]);
    sinon.stub(Model, 'updateOne');

    const service = new MotorcyclesService();
    const result = await service.updateMotorcycle(updatedMotorcycle, ID_CORRECT);

    expect(result).to.be.deep.equal(motorcyclesArray[0]);
  });
});
