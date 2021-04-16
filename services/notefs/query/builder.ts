
import QuerySelector from '~/services/notefs/query/selector';
import TreeContainer from '~/services/notefs/container'
import {Key} from '~/services/notefs/node'

export default class TreeQueryBuilder {
    
    private container: TreeContainer;

    
    constructor(container: TreeContainer) {
        this.container = container;
    }

    select(key: Key): QuerySelector {
        return new QuerySelector(this.container, key)
    }
}