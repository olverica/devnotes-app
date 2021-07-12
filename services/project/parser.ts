import RootValidator, {ValidatedRoot} from '~/services/project/validators/root'
import {SimpleParser} from '~/services/model/parser'
import RootConvertor from '~/services/project/convertors/root'
import isString from '~/services/model/validation/rules/string'
import Project from '~/models/project'
import {Key} from '~/services/model'
import isKey from '~/services/model/validation/rules/key'


interface ValidatedProject {
    id: Key,
    name: string,
    root: ValidatedRoot,
}


export default class ProjectParser extends SimpleParser<ValidatedProject, Project> {

    public rules() {
        return {
            id: isKey,
            name: isString, 
            root: this.validateRoot,
        }
    }

    public convert(model: ValidatedProject) {
        let {id, name} = model;
        let root = this.createRoot(model.root);

        return {id, name, root};
    }

    private validateRoot(root: unknown) {
        let validtor = new RootValidator();
        return validtor.eat(root);
    }

    private createRoot(model: ValidatedRoot) {
        let convertor = new RootConvertor();
        return convertor.eat(model);
    }
}