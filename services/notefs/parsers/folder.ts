import NoteValidator, {ValidatedNote} from '~/services/notefs/parsers/validators/note'
import TagValidator, {ValidatedTag} from '~/services/notefs/parsers/validators/tag'
import FolderNote, {FolderChild} from '~/services/notefs/nodes/folder'
import {ValidatedFolder} from '~/services/notefs/parsers/validators/folder'
import NoteParser from '~/services/notefs/parsers/note'
import TagParser from '~/services/notefs/parsers/tag'
import Builder from '~/services/notefs/builder'



export default class FolderParser {
    
    private noteValidator = new NoteValidator();

    private tagValidator = new TagValidator();

    private noteParser = new NoteParser();

    private tagParser = new TagParser();


    public generate(model: ValidatedFolder): FolderNote {
        let children = 
            this.createChildren(model);

        return Builder.folder()
            .id(model.id)
            .name(model.name)
            .children(children)
            .build();
    }

    private createChildren(model: ValidatedFolder): FolderChild[]  {
        let children: FolderChild[] = [];

        for (let child of model.children) {
            let node = 
                this.createChild(child);
            
            children.push(node);
        }

        return children;
    }

    private createChild(model: unknown): FolderChild {
        if (this.isNote(model))
            return this.createNote(model);

        if (this.isTag(model))
            return this.createTag(model);

        throw Error('Icorrect child type');
    }

    private isNote(model: unknown): model is ValidatedNote {
        return this.noteValidator.check(model);
    }

    private isTag(model: unknown): model is ValidatedTag {
        return this.tagValidator.check(model);
    }

    private createNote(model: ValidatedNote) {
        return this.noteParser.generate(model);
    }

    private createTag(model: ValidatedTag) {
        return this.tagParser.generate(model);
    }
}