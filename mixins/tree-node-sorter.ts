import {isFolder, isNote} from '~/services/notefs/guards'
import { Vue, Component} from 'vue-property-decorator'
import TreeNode from '~/services/notefs/node'


interface PriorityGuard {
    (node: TreeNode): boolean 
}


@Component
export default class TreeNodeSorter extends Vue {
  
    protected priorities: PriorityGuard[] = [
        isNote, isFolder
    ];


    sort(nodes: TreeNode[]): TreeNode[] {
        let copy = 
            [...nodes];

        copy.sort(this.compare)

        return copy;
    }

    compare(first: TreeNode, second: TreeNode) {
        let firstPriority = this.getPriority(first);
        let secondPriority = this.getPriority(second);

        return firstPriority - secondPriority;
    }

    getPriority(node: TreeNode) {
        let priority = 0;
        
        for (let guard of this.priorities) {
            if (guard(node))
            return priority;

            priority++;
        }

        return priority;
    }
}