import {SimpleParser} from '~/services/model/parser'
import ModelConverotor from '~/services/model/convertor'
import ModelValidator from '~/services/model/validator'
import {Key} from '~/services/model'


interface ValidatedUser {
    id: Key,
    name: number
}

interface UserModel {
    id: Key
    name: string
}


export class UserValidator extends ModelValidator<ValidatedUser> {

    protected rules = {
        //
    }
}

export class UserConvertor extends ModelConverotor<ValidatedUser, UserModel>{

    eat(model: ValidatedUser) {
        return {
            id: model.id,
            name: model.name.toString()
        };
    }
}


export default class UserParser extends SimpleParser<ValidatedUser, UserModel> {

    protected validator = new UserValidator();

    protected convertor = new UserConvertor();
}