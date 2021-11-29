import { Directory } from './Directory';
import { File } from './File';

export class BufferFile extends File {
    private data: string[] = [];

    constructor(
        public parent: Directory,
        public readonly name?: string,
    ) {
        super(parent, name);
    }

    public push(data: any): void {
        if (this.data.length + 1 > Number(process.env.MAX_BUF_FILE_SIZE)) {
            throw new Error('Buffer files limit is reached');
        }

        let serializedData = null;
        try {
            serializedData = JSON.stringify(data);
        } catch (error) {
            throw new Error('Such data can not be stored');
        }


        this.data.push(serializedData);
    }

    get content(): any {
        if (!this.data.length) {
            throw new Error('The buffer is empty');
        }

        return JSON.parse(this.data.shift());
    }
}
