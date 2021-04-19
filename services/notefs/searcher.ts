
import TreeNode, {Key} from '~/services/notefs/node'

export default interface TreeSearcher {
   find(id: Key): TreeNode;
}