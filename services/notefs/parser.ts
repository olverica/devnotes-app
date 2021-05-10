import RootValidator, {ValidatedRoot} from '~/services/notefs/parsers/validators/root'
import RootParser from '~/services/notefs/parsers/root'
import RootNode from '~/services/notefs/nodes/root'


export default class TreeParser {

    private validator = new RootValidator();

    private parser = new RootParser();


    public generate(model: unknown): RootNode {
        if (!!!this.validate(model))
            throw Error('Incorrect root');

        return this.convert(model)
    }

    private convert(model: ValidatedRoot) {
        return this.parser.generate(model);
    }

    private validate(model: unknown): model is ValidatedRoot {
        return this.validator.check(model);
    }
}