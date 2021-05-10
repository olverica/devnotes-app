import {TagUpdateModel} from '~/services/notefs/repos/actions/update/tag'
import TagUpdateAction from '~/services/notefs/repos/actions/update/tag'
import TagAppendAction from '~/services/notefs/repos/actions/append/tag'
import TagGetAction  from '~/services/notefs/repos/actions/get/tag'
import NodeDeleteAction from '~/services/notefs/repos/actions/delete'
import NodeRepository from '~/services/notefs/repos/node'
import {TagChild} from '~/services/notefs/nodes/tag'
import ParentNode from '~/services/notefs/nodes/parent'
import TagNode from '~/services/notefs/nodes/tag'


export default class TagRepository implements NodeRepository {
    
    private parent: ParentNode<TagNode>;
    
    private tag: TagNode;


    constructor(tag: TagNode, parent: ParentNode<TagNode>) {
        this.parent = parent;
        this.tag = tag;
    }

    public get(): TagNode {
        let action = 
            new TagGetAction(this.tag);

        return action.proceed();
    }

    public update(model: TagUpdateModel) {
        let action = 
            new TagUpdateAction(this.tag, model);

        action.proceed();
    }

    public append(node: TagChild) {
        let action = 
            new TagAppendAction(this.tag, node);

        action.proceed();
    }

    public delete() {
        let action = 
            new NodeDeleteAction(this.parent, this.tag);

        action.proceed();
    }
} 