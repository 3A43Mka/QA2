import { Directory } from '../src/Directory';
import { BufferFile } from '../src/BufferFile';

describe('Buffer file', () => {
    const OLD_ENV = process.env;

    beforeAll(() => {
        process.env = {
            ...OLD_ENV,
            MAX_BUF_FILE_SIZE: '2',
        };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    const filename = 'filename';
    let rootDir = null;

    beforeEach(() => {
        rootDir = new Directory(null, 'root');
    });

    test('should be successfully created', () => {
        expect(() => new BufferFile(rootDir)).not.toThrowError();
    });

    test('should have a correct filename', () => {
        const bf = new BufferFile(rootDir, filename);
        expect(bf.name).toBe(filename);
    });

    test('should have a correct parent', () => {
        const bf = new BufferFile(rootDir, filename);
        expect(bf.parent).toBe(rootDir);
    });

    test('should throw error when reading data from the empty buffer', () => {
        const bf = new BufferFile(rootDir, filename);
        expect(() => bf.content).toThrowError();
    });

    test('should be like a queue', function() {
        const bf = new BufferFile(rootDir, filename);
        bf.push({ test: 'test' });
        bf.push(['a', 'b', 'c']);

        expect(bf.content.test).toBe('test');
        expect(bf.content.includes('d')).toBe(false);
        bf.push(15);
        expect(bf.content).toBeLessThan(20);
    });

    test('should throw error on buffer overflow', () => {
        const bf = new BufferFile(rootDir, filename);
        expect(() => {
            bf.push(18);
            bf.push([{}, 'a']);
            bf.push({ 'a': 4 });
        }).toThrowError();
    });
});
