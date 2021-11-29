import { Directory } from '../src/Directory';
import { BinaryFile } from '../src/BinaryFile';

describe('Binary file', () => {
    let rootDir = null;

    beforeEach(() => {
        rootDir = new Directory(null, 'root');
    });

    test('should be successfully created', () => {
        expect(() => new BinaryFile(rootDir)).not.toThrowError();
    });

    describe('default file', () => {

        test('should have a correct default content', () => {
            const bf = new BinaryFile(rootDir);
            expect(bf.content).toBe('');
        });

        test('should have a correct parent', () => {
            const bf = new BinaryFile(rootDir);
            rootDir.addFile(bf)
            expect(bf.parent).toBe(rootDir);
        });
    });

    describe('named and filled file', () => {
        const content = 'some content';
        const filename = 'filename';
        const bf = new BinaryFile(rootDir, filename, content);

        test('should have a correct filename', () => {
            expect(bf.name).toBe(filename);
        });
        test('should have a correct content', () => {
            expect(bf.content).toBe(content);
        });
    });
});
