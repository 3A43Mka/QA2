import { File } from './File';

export class Directory extends File {
    constructor(
        public parent: Directory | null = null,
        public readonly name?: string,
        public files: File[] = [],
    ) {
        super(parent, name);
    }

    public addFile(file: File): void {
        if (this.files.length + 1 > Number(process.env.DIR_MAX_ELEMS)) {
            throw new Error('Directory file limit is reached');
        }

        file.parent = this;
        this.files.push(file);
    }

    get content(): File[] {
        return this.files;
    }
}
