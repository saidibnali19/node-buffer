import { Buffer } from "node:buffer";

const buffer1 = Buffer.from("ABC");
const buffer2 = Buffer.from("BCD");

// console.log(buffer1.compare(buffer1));
// console.log(buffer1.compare(buffer2));

const buffer3 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buffer4 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

// console.log(buffer3.compare(buffer3));
// console.log(buffer3.compare(buffer4));
// console.log(buffer3.compare(buffer4, 5, 9, 0, 4));
console.log(buffer3.compare(buffer4, 0, 5, 4));
