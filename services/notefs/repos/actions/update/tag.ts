import UpdateAction from '~/services/notefs/repos/actions/update'
import TagNote from '~/services/notefs/nodes/tag'


export interface TagUpdateModel {
    color?: string,
    name?: string,
}

export default class TagUpdateAction extends UpdateAction<TagNote, TagUpdateModel> {
    //
}