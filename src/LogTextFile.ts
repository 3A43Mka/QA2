import { Directory } from './Directory';
import { File } from './File';

export class LogTextFile extends File {
    private data: string = "";

    constructor(
        public parent: Directory,
        public readonly name?: string,
    ) {
        super(parent, name);
    }

    public append(data: string): void {
        this.data += `${data}\n`;
    }

    get content(): string {
        return this.data;
    }
}
