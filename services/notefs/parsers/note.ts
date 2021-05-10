import NoteNode from '~/services/notefs/nodes/note'
import {ValidatedNote} from '~/services/notefs/parsers/validators/note'
import Builder from '~/services/notefs/builder'


export default class NoteParser {
    
    public generate(model: ValidatedNote): NoteNode {
        return Builder.note()
            .id(model.id)
            .name(model.name)
            .description(model.description as any)
            .build();
    }
}