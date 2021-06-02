import NoteValidator, {ValidatedNote} from '~/services/notefs/parsers/validators/note'
import NodeParser from '~/services/notefs/parsers/node'
import NoteNode from '~/services/notefs/nodes/note'
import Builder from '~/services/notefs/builder'


export default class NoteParser extends NodeParser<NoteNode, ValidatedNote> {

    protected validate(model: unknown): model is ValidatedNote {
        let validator = new NoteValidator();

        return validator.check(model);
    }
    
    protected createNode(model: ValidatedNote): NoteNode {
        let {id, name, description} = model;

        return Builder.note()
            .id(id)
            .name(name)
            .description(description)
            .build();
    }
}