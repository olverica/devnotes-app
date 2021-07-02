
export default class RequestPath {
    
    public readonly entire: string;
    
    public readonly model: string;
    
    public readonly id: string;
    

    constructor(path: string) {
        let splitted = this.splitPath(path);

        this.id = this.selectLast(splitted);
        this.model = this.cutTeelLast(splitted);
        this.entire = path;
    }

    private splitPath(path: string) {
        let splitted = path.split('/');
        this.throwIfEmpty(splitted);

        return splitted;

    }

    private throwIfEmpty(array: unknown[]) {
        if (!!!array.length)
            throw Error('Path is empty')
    }

    private selectLast(array: string[]): string {
        let lastIndex = array.length - 1;

        return array[lastIndex];
    }

    private cutTeelLast(array: string[]) {
        return array.slice(0, -1).join('/');
    }
}
