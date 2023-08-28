import { Buffer } from "node:buffer";

const buffer = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buffer);

console.log(uint32array);

const int8array = new Int8Array(buffer);
console.log(int8array);

const buffer2 = Buffer.from("hello", "utf16le");
const uint16array = new Uint16Array(
    buffer2.buffer,
    buffer2.byteOffset,
    buffer2.length / Uint16Array.BYTES_PER_ELEMENT
);

console.log(buffer2);

console.log(uint16array);

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buffer3 = Buffer.from(arr);
console.log(buffer3);

const buffer4 = Buffer.from(arr.buffer);
console.log(buffer4);

const arr2 = new Uint16Array(20)
const buffer5 = Buffer.from(arr2.buffer, 0, 16)

console.log(buffer5.length);
