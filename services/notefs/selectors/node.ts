import NodeRepository from '~/services/notefs/repos/node'
import {Key} from '~/services/notefs/nodes/node'


export default interface NodeSelector {
    select(id: Key): NodeRepository
}