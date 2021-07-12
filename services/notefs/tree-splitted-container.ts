import TreeNode from '~/services/notefs/node'


export interface SplittedCollection {
    [key: string]: TreeNode[]
}

export default class SplittedContainer {
    
    private splitted: SplittedCollection;


    constructor(splitted: SplittedCollection = {}) {
        this.splitted = splitted;
    }

    public set(type: string, node: TreeNode) {
        let collection;

        if (this.has(type)) {
            collection = this.splitted[type];
            collection.push(node);
        }
        else {
            collection = [node];
            this.splitted[type] = collection;
        }
    }

    public first(nodeType: string) {
        let collection = this.get(nodeType);
        if (collection.length)
            return collection[0];

        throw Error(`Cant find any ${nodeType}`)
    }

    public get(nodeType: string) {
        if (this.has(nodeType))
            return this.splitted[nodeType];

        return [];
    }

    public has(nodeType: string): boolean {
        let nodeOrUndefined = this.splitted[nodeType];
        return Boolean(nodeOrUndefined);
    }
}