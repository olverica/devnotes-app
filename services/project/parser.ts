import TrashValidator, {ValidatedTrash} from '~/services/project/validators/trash-bin'
import RootValidator, {ValidatedRoot} from '~/services/project/validators/root'
import {SimpleParser} from '~/services/model/parser'
import TrashConvertor from '~/services/project/convertors/trash-bin'
import RootConvertor from '~/services/project/convertors/root'
import isString from '~/services/model/validation/rules/string'
import Project from '~/models/project'
import {Key} from '~/services/model'
import isKey from '~/services/model/validation/rules/key'


interface ValidatedProject {
    id: Key,
    name: string,
    root: ValidatedRoot,
    trash: ValidatedTrash,
}


export default class ProjectParser extends SimpleParser<ValidatedProject, Project> {

    public rules() {
        return {
            id: isKey,
            name: isString, 
            root: this.validateRoot,
            trash: this.validateTrash
        }
    }

    public convert(model: ValidatedProject) {
        let {id, name} = model;
        let root = this.createRoot(model.root);
        let trash = this.createTrash(model.trash);

        return {id, name, root, trash};
    }

    private validateRoot(root: unknown) {
        let validtor = new RootValidator();
        return validtor.eat(root);
    }

    private validateTrash(trash: unknown) {
        let validtor = new TrashValidator();
        return validtor.eat(trash);
    }

    private createRoot(model: ValidatedRoot) {
        let convertor = new RootConvertor();
        return convertor.eat(model);
    }

    private createTrash(model: ValidatedTrash) {
        let convertor = new TrashConvertor();
        return convertor.eat(model);
    }
}