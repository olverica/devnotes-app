import { Vue, Component} from 'vue-property-decorator'
import TreeNode from '~/services/notefs/nodes/node'

@Component
export default class TreeNodeSplitter extends Vue {
  
    sliceNodes(nodes: TreeNode[], validator: (node: TreeNode) => boolean) {
        let splitted = [];
    
          for (let node of nodes) {
            if (validator(node))
              splitted.push(node);
          }
    
        return splitted;
    }
}