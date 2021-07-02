import TreeNode from '~/services/notefs/node'
import {Key} from '~/services/notefs/node'


export default abstract class NodeBuilder<T extends TreeNode> {

    protected $id?: Key;

    protected $name?: string;


    protected abstract create(): T;

    protected abstract cantBuild(): boolean;


    public name(name: string) {
        this.$name = name;
        return this;
    }

    public id(id: Key) {
        this.$id = id;
        return this;
    }

    public build(): T {
        if (this.cantBuild())
            throw Error('Can`t create node');

        let node = 
            this.create();

        return node;
    }
}