import UpdateAction from '~/services/notefs/repos/actions/update'
import NoteNode from '~/services/notefs/nodes/note'


export interface NoteUpdateModel {
    name?: string
}

export default class NoteUpdateAction extends UpdateAction<NoteNode, NoteUpdateModel> {
    //
}