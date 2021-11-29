import { Directory } from './Directory';

export class File {
    constructor(
        public parent: Directory | null = null,
        public readonly name?: string,
    ) {
        if (parent && parent.files.find(f => f.name === name)) {
            throw new Error('File already exist');
        }

        if (!name) {
            this.name = `file_${Date.now()}`;
        }

        if (parent) {
            parent.files.push(this);
        }
    }

    public delete(): void {
        if (!this.parent) {
            throw new Error('Can not delete a root folder');
        }

        const filteredFiles = this.parent.files.filter(file  => file !== this);
        this.parent.files = filteredFiles;
    }

    public moveTo(target: Directory): void {
        if (!this.parent) {
            throw new Error('Can not move a root folder');
        }

        this.delete();
        target.addFile(this);
    }
}
