import { Directory } from './Directory';
import { File } from './File';

export class BufferFile extends File {
    private data: string[] = [];

    constructor(
        public readonly name: string,
        public parent: Directory,
    ) {
        super(name, parent);
    }

    public push(data: string): void {
    }

    get content(): string | undefined {
    }
}
