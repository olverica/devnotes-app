
export default class Cursor<T = unknown> {
    
    private _history: T[] = [];

    
    public history() {
        return this._history;
    }

    public select(model: T) {
        this._history.push(model);
    }

    public goBack() {
        this._history.pop()
    }

    public selected() {
        let lastIndex = this._history.length - 1,
            lastModel = this._history[lastIndex];
            
        return lastModel;
    }
}