import {Model} from '~/services/Model'

export default class DataMapper {

    public save(model: Model) {
        console.log(model.fields());

        if (model.exists)
    }
    
    public update() {

    }

    public create() {

    }
}