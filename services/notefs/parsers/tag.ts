import {SimpleParser} from '~/services/model/parser'
import TagNode from '~/services/notefs/nodes/tag'
import isString from '~/services/model/validation/rules/string'
import isKey from '~/services/model/validation/rules/key'
import {Key} from '~/services/model'


export interface ValidatedTag  {
    id: Key;
    parent: Key;
    name: string;
    color: string;
}

export default class TagParser extends SimpleParser<ValidatedTag, TagNode> {

    rules() {
       return {
            id: isKey,
            parent: isKey,
            name: isString,
            color: isString
        }
    }

    convert(model: ValidatedTag) {
        return new TagNode(
            model.id,
            model.name,
            model.color,
            []
        )
    }
}