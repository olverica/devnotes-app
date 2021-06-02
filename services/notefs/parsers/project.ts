import ProjectValidator, {ValidatedProject} from '~/services/notefs/parsers/validators/project'
import ProjectNode from '~/services/notefs/nodes/project'
import RootParser from '~/services/notefs/parsers/root'
import NodeParser from '~/services/notefs/parsers/node'
import Builder from '~/services/notefs/builder'


export default class ProjectParser extends NodeParser<ProjectNode, ValidatedProject> {

    protected validate(model: unknown): model is ValidatedProject {
        let validator = new ProjectValidator();

        return validator.check(model);
    }
    
    protected createNode(model: ValidatedProject): ProjectNode {
        let {id, name} = model;
        let root = this.parseRoot(model.root);

        return Builder.project()
            .id(id)
            .name(name)
            .root(root)
            .build();
    }

    private parseRoot(model: unknown) {
        let parser = new RootParser();
        let parsed = parser.eat(model);

        if (!!!parsed)
            throw Error('Can`t parse root');
            
        return parsed;
    }
}