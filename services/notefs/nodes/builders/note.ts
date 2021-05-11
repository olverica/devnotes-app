import NodeBuilder from '~/services/notefs/nodes/builders/node'
import NoteNode from '~/services/notefs/nodes/note'
import {Key} from '~/services/notefs/nodes/node'


export default class NoteBuilder extends NodeBuilder<NoteNode> {

    protected $description: string = '';


    public description(description: string) {
        this.$description = description;
        return this;
    }

    protected cantBuild(): boolean {
        return this.$id === undefined 
            || this.$name === undefined
    }

    protected create(): NoteNode {
        return new NoteNode(
            this.$id as Key,
            this.$name as string,
            this.$description
        );
    }
}