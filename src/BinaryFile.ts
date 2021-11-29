import { Directory } from './Directory';
import { File } from './File';

export class BinaryFile extends File {
    constructor(
        public parent: Directory,
        public readonly name?: string,
        private readonly data: string = '',
    ) {
        super(parent, name);
    }

    get content(): string {
        return this.data;
    }
}
