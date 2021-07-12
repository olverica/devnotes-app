import {isTrashBin, isArchive, isFolder, isNote, isTag} from '~/services/notefs/guards'
import TreeNode, {ParentNode} from '~/services/notefs/node'
import SplittedContainer from '~/services/notefs/tree-splitted-container';


export type Guard = (node: unknown) => boolean;

export interface GuardsCollection {
    [key: string]: Guard
}

export default class TreeSplitter {

    private guards: GuardsCollection = {
        tags: isTag,
        notes: isNote,
        folders: isFolder,
        archives: isArchive,
        trashBins: isTrashBin,
    };


    constructor(guards: GuardsCollection = {}) {
        Object.assign(this.guards, guards);
    }

    public split(parent: ParentNode) {
        let splitted: SplittedContainer = new SplittedContainer();

        for (let child of parent.children)
            this.decide(child, splitted);

        return splitted;
    }

    private decide(node: TreeNode, splitted: SplittedContainer) {
        let entries = Object.entries(this.guards);

        for (let [type, guard] of entries) {
            if (!!!guard(node))
                continue;

            splitted.set(type, node);
            return;
        }
    }
}