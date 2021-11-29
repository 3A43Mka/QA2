import {Directory} from "./Directory";
import {BinaryFile} from "./BinaryFile";
import {LogTextFile} from "./LogTextFile";
import {BufferFile} from "./BufferFile";

let rootDir = new Directory(null, 'root');
let subDir1 = new Directory(rootDir, "subDir1");
let subDir2 = new Directory(subDir1, "subDir2");
let binFile1 = new BinaryFile(subDir1, "someBinaryFile1", "Somebody once told me..." );
let binFile2 = new BinaryFile(subDir2, "someBinaryFile2", "...hand off my macaroni");
let logTextFile1 = new LogTextFile(subDir2, "someLogTextFile1");
logTextFile1.append("I'm new here");
let bufferFile1 = new BufferFile(subDir2, "IAmBufferFile");

console.dir(rootDir);
console.dir(subDir1);
console.dir(subDir2);

console.log(subDir1.files);

console.log(subDir2.files);

