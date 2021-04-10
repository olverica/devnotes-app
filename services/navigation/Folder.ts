import Node from '~/services/navigation/Node'

export default class Folder implements Node {

    private name: string = 'repo';
    
    private children: Node[];


    constructor(children: Node[] = []) {
        this.children = children;
    }

    public getName() {
        return this.name;
    }

    public getChildren() {
        return this.children;
    } 
}