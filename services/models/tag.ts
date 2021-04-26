import {Key} from '~/services/models/repository'


export interface TagModel {
    id: Key,
    name: string,
    type: 'tag'
}