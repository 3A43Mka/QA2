import { Directory } from './Directory';

export class File {
    constructor(
        public readonly name: string = `file_${Date.now()}`,
        public parent: Directory | null = null,
    ) {}

    public delete(): void {
    }

    public moveTo(target: Directory): void {
    }
}
