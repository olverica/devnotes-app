import TreeNode, {Key} from '~/services/notefs/nodes/node'

export default interface TreeSearcher {
    findOrFail(id: Key): TreeNode; 
    find(id: Key): TreeNode|null;
}