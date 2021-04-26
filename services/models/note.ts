import {Key} from '~/services/models/repository'


export interface NoteModel {
    id: Key,
    name: string,
    type: 'note'
}