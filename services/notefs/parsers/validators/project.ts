import {ValidationTarget} from '~/services/notefs/parsers/validators/node'
import NodeValidator from '~/services/notefs/parsers/validators/node'
import {Key} from '~/services/notefs/node' 


export interface ValidatedProject {
    id: Key;
    name: string;
    root: object;
}


export default class ProjectValidator extends NodeValidator<ValidatedProject> {

    protected checkProps(model: ValidationTarget): boolean {
        let {root} = model;

        return this.hasRoot(root);
    }

    protected hasRoot(root: unknown): boolean {
        return typeof root === 'object';
    }
}