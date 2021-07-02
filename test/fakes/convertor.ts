import {ValidatedDummy} from '~/test/fakes/validator'
import ModelConvertor from '~/services/model/convertor'


export interface ConvertedDummy {
    id: number|string,
    name: string
}


export class ConvertorMock extends ModelConvertor<ConvertedDummy>{

    public passedModel: unknown;


    public eat(model: ValidatedDummy): ConvertedDummy {
        this.passedModel = model;
        return model;
    }
}


export class ConvertorStub extends ModelConvertor<ConvertedDummy>{

    
    public eat(model: ConvertedDummy): ConvertedDummy {
        return model;
    }
}
