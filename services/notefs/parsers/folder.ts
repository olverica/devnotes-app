import FolderValidator, {ValidatedFolder} from '~/services/notefs/parsers/validators/folder'
import FolderNode, {FolderChild} from '~/services/notefs/nodes/folder'
import ParentParser from '~/services/notefs/parsers/parent'
import NoteParser from '~/services/notefs/parsers/note'
import TagParser from '~/services/notefs/parsers/tag'
import Builder from '~/services/notefs/builder'


export default class FolderParser extends ParentParser<FolderNode, ValidatedFolder, FolderChild> {
    
    protected childParsers = [
        new NoteParser(), new TagParser(),
    ]


    protected validate(model: unknown): model is ValidatedFolder {
        let validator = new FolderValidator();

        return validator.check(model);
    }

    protected createParent(model: ValidatedFolder): FolderNode {
        let {id, name, permission} = model;
       
        return Builder.folder()
            .id(model.id)
            .name(name)
            .permission(permission)
            .build();
    }
}