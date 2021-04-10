import Node from '~/services/navigation/Node'

export default class Tag implements Node {

    private name: string = 'repo';

    private children: Node[];


    constructor(children: Node[] = []) {
        this.children = children;
    }
    
    public getName(): string {
        return this.name;
    }

    public getChildren(): Node[] {
        return this.children;
    } 
}