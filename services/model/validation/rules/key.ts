import {Key} from '~/services/model'


export default function isKey(prop : unknown): prop is Key {
    return typeof prop === 'string'
        || typeof prop === 'number';
}