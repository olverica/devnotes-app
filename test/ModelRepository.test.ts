import ModelRepository from '~/services/models/repository'
import DummyAPI from '~/services/api/DummyAPI'


interface CreateUpdateRequest {
    name: string
}

interface DummyUser {
    id: number,
    name: string,
    createdAt: string 
}

class DummyUserRepository extends ModelRepository<DummyUser, CreateUpdateRequest, CreateUpdateRequest> {
    
    protected readonly path = 'path';

}


describe('API repository', () => {
    
    let api = new DummyAPI();
    let repository = new DummyUserRepository(api);

    test('should create', async () => {
        let data = { name: 'John'};
       
        let created = await repository.create(data);

        expect(created.name).toEqual(data.name);
    });

    test('should search', async () => {
        let data = { name: 'John'};

        let created = await repository.create(data);
        let founded = await repository.find(created.id);

        expect(founded.id).toEqual(created.id);
    });

    test('should update', async () => {
        let initalData = { name: 'Roe'}
        let created = await repository.create(initalData);

        let editedData = { name: 'John'};
        let edited = await repository.update(created.id, editedData);

        expect(edited.name).toEqual(editedData.name);
    });

    test('should delete', async () => {
        let data = { name: 'Roe'}
        let created = await repository.create(data);

        await repository.delete(created.id);

        let promise = repository.find(created.id);
        await expect(promise).rejects.toThrow();
    });
});