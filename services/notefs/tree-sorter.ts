import {isTrashBin, isFolder, isNote} from '~/services/notefs/guards'
import TreeNode from '~/services/notefs/node'


interface PriorityGuard {
    (node: TreeNode): boolean 
}


export default class TreeSorter {
  
    protected priorities: PriorityGuard[] = [
        isFolder, isNote, isTrashBin, 
    ];


    constructor(priorities?: PriorityGuard[]) {
        if (priorities)
            this.priorities = priorities
    }

    sort(nodes: TreeNode[]): TreeNode[] {
        let copy = [...nodes];
        copy.sort(this.compare.bind(this));

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