import TagValidator, {ValidatedTag} from '~/services/notefs/parsers/validators/tag'
import TagNode, {TagChild} from '~/services/notefs/nodes/tag'
import ParentParser from '~/services/notefs/parsers/parent'
import NoteParser from '~/services/notefs/parsers/note'
import Builder from '~/services/notefs/builder'


export default class TagParser extends ParentParser<TagNode, ValidatedTag, TagChild> {
    
    protected childParsers = [
        new NoteParser()
    ]


    protected validate(model: unknown): model is ValidatedTag {
        let validator = new TagValidator();
        
        return validator.check(model);
    }

    protected createParent(model: ValidatedTag): TagNode {
        let {id, name, color} = model;
       
        return Builder.tag()
            .id(id)
            .name(name)
            .color(color)
            .build();
    }
}