import { Directory } from './Directory';
import { File } from './File';

export class LogTextFile extends File {
    private data: string = "";

    constructor(
        public readonly name: string,
        public parent: Directory,
    ) {
        super(name, parent);
    }

    public append(data: string): void {
    }

    get content(): string {
    }
}
