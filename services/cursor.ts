
export default class Cursor<T = unknown> {
    
    private history: T[] = [];
    
    private position: number = -1;


    public selected(): T|null {
        if (this.position === -1)
            return null

        return this.history[this.position];
    }

    public select(node: T) {
        if (this.hasTail())
            this.cutTail();

        this.append(node);
    }

    public undo() {
        if (this.history.length === 0)
            throw Error('Nothing to undo');

        this.position--;
    }

    public redo() {
        let lastElementIndex = this.history.length - 1;
        if (this.position === lastElementIndex)
            throw Error('Nothing to redo')

        this.position++;
    }

    private hasTail(): boolean {
        let lastElementIndex = this.history.length - 1;

        return lastElementIndex > this.position;
    }   

    private cutTail() {
        let tailStart = this.position + 1;

        this.history.splice(tailStart);
    }

    private append(node: T) {
        this.history.push(node);
        this.position++;
    }
}