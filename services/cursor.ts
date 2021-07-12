
export default class Cursor<T = unknown> {
    
    private history: T[] = [];

    
    public path() {
        return this.history;
    }

    public select(model: T) {
        this.history.push(model);
    }

    public goBack() {
        this.history.pop()
    }

    public selected() {
        let lastIndex = this.history.length - 1,
            lastModel = this.history[lastIndex];
            
        return lastModel;
    }
}