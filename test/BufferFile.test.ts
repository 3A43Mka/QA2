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

    const rootDir = new Directory(null, 'root');

    test('should be successfully created', () => {
        expect(() => new BufferFile(rootDir)).not.toThrowError();
    });

    const filename = 'filename';
    const bf = new BufferFile(rootDir, filename);

    test('should have a correct filename', () => {
        expect(bf.name).toBe(filename);
    });

    test('should have a correct parent', () => {
        expect(bf.parent).toBe(rootDir);
    });

    test('should throw error when reading data from the empty buffer', () => {
        expect(() => bf.content).toThrowError();
    });

    test('should be like a queue', function() {
        bf.push({ test: 'test' });
        bf.push(['a', 'b', 'c']);

        expect(bf.content.test).toBe('test');
        expect(bf.content.includes('d')).toBe(false);

        bf.push(15);

        expect(bf.content).toBeLessThan(20);
    });

    test('should throw error on buffer overflow', () => {
        expect(() => {
            bf.push(18);
            bf.push([{}, 'a']);
            bf.push({ 'a': 4 });
        }).toThrowError();
    });
});
