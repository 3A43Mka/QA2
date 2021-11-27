import { Directory } from './Directory';
import { File } from './File';

export class BinaryFile extends File {
    constructor(
        public readonly name: string,
        public parent: Directory,
        private readonly data: string = "",
    ) {
        super(name, parent);
    }

    get content(): string {
    }
}
