import { File } from './File';

export class Directory extends File {
    constructor(
        public readonly name: string,
        public parent: Directory | null = null,
        public files: File[] = [],
    ) {
        super(name, parent);
    }

    public moveFile(file: File, target: Directory): void {
    }

    public addFile(file: File): void {
    }

    get ls(): File[] {
    }
}
