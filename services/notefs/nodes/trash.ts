import {Key, ParentNode} from '~/services/notefs/node'
import {RootChild} from '~/services/notefs/nodes/root'


export type TrashChild = RootChild;


export default class TrashNode implements ParentNode<TrashChild> {

    public children: TrashChild[];
    
    public name: string;
    
    public id: Key;


    constructor(id: Key, name: string, children: TrashChild[]) {
        this.id = id;
        this.name = name;
        this.children = children;
    }
}