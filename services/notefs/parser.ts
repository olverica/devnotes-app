import ProjectParser from '~/services/notefs/parsers/project'
import ProjectNode from '~/services/notefs/nodes/project'


export default class TreeParser {

    private parser = new ProjectParser();


    public eat(model: unknown): ProjectNode {
        let parsed = this.parser.eat(model)

        if (!!!parsed)
            throw Error('Cant parse project');

        return parsed;
    }
}