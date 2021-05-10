import NoteValidator, {ValidatedNote} from '~/services/notefs/parsers/validators/note'
import FolderValidator, {ValidatedFolder} from '~/services/notefs/parsers/validators/folder'
import RootNode, {RootChild} from '~/services/notefs/nodes/root'
import {ValidatedRoot} from '~/services/notefs/parsers/validators/root'
import NoteParser from '~/services/notefs/parsers/note'
import FolderParser from '~/services/notefs/parsers/folder'
import Builder from '~/services/notefs/builder'



export default class RootParser {
    
    private noteValidator = new NoteValidator();

    private folderValidator = new FolderValidator();

    private noteParser = new NoteParser();

    private folderParser = new FolderParser();


    public generate(model: ValidatedRoot): RootNode {
        let children = 
            this.createChildren(model);

        return Builder.root()
            .id(model.id)
            .name(model.name)
            .children(children)
            .build();
    }

    private createChildren(model: ValidatedFolder): RootChild[]  {
        let children: RootChild[] = [];

        for (let child of model.children) {
            let node = 
                this.createChild(child);
            
            children.push(node);
        }

        return children;
    }

    private createChild(model: unknown): RootChild {
        if (this.isNote(model))
            return this.createNote(model);

        if (this.isFolder(model))
            return this.createFolder(model);

        throw Error('Icorrect child type');
    }

    private isNote(model: unknown): model is ValidatedNote {
        return this.noteValidator.check(model);
    }

    private isFolder(model: unknown): model is ValidatedFolder {
        return this.folderValidator.check(model);
    }

    private createNote(model: ValidatedNote) {
        return this.noteParser.generate(model);
    }

    private createFolder(model: ValidatedFolder) {
        return this.folderParser.generate(model);
    }
}