import RootValidator, {ValidatedRoot} from '~/services/notefs/parsers/validators/root'
import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import FolderParser from '~/services/notefs/parsers/folder'
import ParentParser from '~/services/notefs/parsers/parent'
import NoteParser from '~/services/notefs/parsers/note'
import Builder from '~/services/notefs/builder'


export default class RootParser extends ParentParser<RootNode, ValidatedRoot, RootChild> {
    
    protected childParsers = [
        new NoteParser(), new FolderParser(),
    ]


    protected validate(model: unknown): model is ValidatedRoot {
        let validator = new RootValidator();

        return validator.check(model);
    }

    protected createParent(model: ValidatedRoot): RootNode {
        let {id, name} = model;
        
        return Builder.root()
            .id(id)
            .name(name)
            .build();
    }
}