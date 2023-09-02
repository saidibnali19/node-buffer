import { Buffer } from "node:buffer";

const buffer1 = Buffer.alloc(10);
const buffer2 = Buffer.alloc(10);
const buffer3 = Buffer.alloc(10);

const totalLength = buffer1.length + buffer2.length + buffer3.length;

// console.log(totalLength);

const buffer4 = Buffer.concat([buffer1, buffer2, buffer3]);
// console.log(buffer4);
// console.log(buffer4.length);

const buffer5 = Buffer.concat([buffer1, buffer2, buffer3], 15);
// console.log(buffer5);
console.log(buffer5.length);

