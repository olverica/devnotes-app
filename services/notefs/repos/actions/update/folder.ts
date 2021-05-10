import UpdateAction from '~/services/notefs/repos/actions/update'
import FolderNode from '~/services/notefs/nodes/folder'


export interface FolderUpdateModel {
    name?: string
}

export default class FolderUpdateAction extends UpdateAction<FolderNode, FolderUpdateModel> {
    //
}