
import API from '~/services/API'

interface Node { 
    [key: string]: object
}

export default class DummyApi implements API {
    
    private data: Node = {
        // 
    };


    public async find(path: string): Promise<object> {
        let node = this.traverse(path);
        return node;
    }

    public async update(path: string, body: object): Promise<object> {
        let node = this.traverse(path, true);
        
        Object.assign(node, body);
        
        return node;
    }

    public async create(path: string, body: object): Promise<object> {
        let node = this.traverse(path, true);
        let newId = this.getLastId(node) + 1;

        node[newId] = body;
        (body as any).id = newId; 

        return body;
    }

    public async delete(path: string): Promise<void> {
        let splitted = path.split('/');
        let lastPart = splitted.pop();

        if (!!!lastPart)
            throw Error('Incorrect path');

        let newPath = splitted.join('/');
        let parentNode = this.traverse(newPath);

        delete parentNode[lastPart];
    }

    private traverse(path: string, createParents: boolean = false): Node {
        let node = this.data;

        for (let part of path.split('/')) {

            let founded = node.hasOwnProperty(part);
             
            if (!!!founded && createParents)
                node[part] = {};

            if (!!!founded && !!!createParents)
                throw Error('Incorrect path');
            
            if (founded && typeof node[part] !== 'object')
                throw Error('Incorrect path');

            node = node[part] as Node;
        }

        return node;
    }

    private getLastId(node: object): number {
        return Object.keys(node).length - 1;
    }
}