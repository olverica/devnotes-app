import {ActionsSchema} from '~/services/model/mapper/action'
import ModelMapper from '~/services/model/mapper'
import Model from '~/services/model'


export default abstract class MapperBuilder<T extends Model> {

    public abstract createActions(): ActionsSchema<T>;


    public build() {
        let actions = this.createActions();

        return new ModelMapper<T>(actions);
    }
}   