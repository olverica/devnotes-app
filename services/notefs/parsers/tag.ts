import NoteValidator, {ValidatedNote} from '~/services/notefs/parsers/validators/note'
import {ValidatedTag} from '~/services/notefs/parsers/validators/tag'
import NoteParser from '~/services/notefs/parsers/note'
import TagNote, {TagChild} from '~/services/notefs/nodes/tag'
import Builder from '~/services/notefs/builder'


export default class TagParser {
    
    private noteValidator = new NoteValidator();

    private noteParser = new NoteParser();


    public generate(model: ValidatedTag): TagNote {
        let children = 
            this.createChildren(model);

        return Builder.tag()
            .id(model.id)
            .name(model.name)
            .color(model.color)
            .children(children)
            .build();
    }

    private createChildren(model: ValidatedTag): TagChild[]  {
        let children: TagChild[] = [];

        for (let child of model.children) {
            let node = 
                this.createChild(child);
            
            children.push(node);
        }

        return children;
    }

    private createChild(model: unknown): TagChild {
        if (this.isNote(model))
            return this.createNote(model);

        throw Error('Incorrect child type');
    }

    private isNote(model: unknown): model is ValidatedNote {
        return this.noteValidator.check(model);
    }

    private createNote(model: ValidatedNote) {
        return this.noteParser.generate(model);
    }
}