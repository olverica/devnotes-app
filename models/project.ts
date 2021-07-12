import RootNode from '~/services/notefs/nodes/root'
import Model from '~/services/model'


export default interface Project extends Model {
    name: string;
    root: RootNode;
}