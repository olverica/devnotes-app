import {Key} from '~/services/models/repository'


export interface FolderModel {
    id: Key,
    name: string,
    type: 'folder'
}