debugger;

import {Model, ProxyModel} from '~/services/Model'

export function Propety(target: ProxyModel, name: string) {
  
    function getter(this: ProxyModel) {
      return this.get(name);
    };
   
    function setter(this: ProxyModel, value: unknown) {
      return this.set(name, value)
    };
  
    Object.defineProperty(target, name, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
  

class TestModel extends ProxyModel {
    public readonly path = 'test';

    public readonly keyName  = 'id';
	
	protected readonly key!: number;

    @Propety public name!: string;
}



describe('Models', () => {

  	test('Support dummy creation ', () => {
		let fields = {
			name: 'some'
		};

		let model = new TestModel(fields);

		expect(model.name).toEqual(fields.name);
	    expect(model.exists()).toBeFalsy();
		expect(model.getKey).toThrow();

		
	}); 

    test('Support creation from data', () => {
		const key = 123;

        let model = new TestModel({
            id: key, 
            name: 'some'
        });

      expect(model.exists()).toBeTruthy();
		  expect(model.getKey()).toEqual(key);
    }); 
}); 