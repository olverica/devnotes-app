import RootNode from '~/services/notefs/nodes/root'
import build from '~/services/model/build'
import Model from '~/services/model'


export class ProjectParser implements ModelParser {

    eat() {
        
    }
}

export default interface Project extends Model {
    name: string,
    root: RootNode
}