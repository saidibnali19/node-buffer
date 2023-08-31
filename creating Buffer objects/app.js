import { Buffer } from "node:buffer";

const buffer1 = Buffer.alloc(5);
// console.log(buffer1);

const buffer2 = Buffer.alloc(5, 1);
// console.log(buffer2);

const buffer3 = Buffer.alloc(5, 10);
// console.log(buffer3);

const buffer4 = Buffer.from([1, 2, 3, 4, 5, 5, 6]);
// console.log(buffer4);

const buffer5 = Buffer.allocUnsafe(10);
// console.log(buffer5);
buffer5.fill("a");
// console.log(buffer5);

const buffer6 = Buffer.from([257, 257.5, -255, "1"]);
// console.log(buffer6);

const buffer7 = Buffer.from("test");
// console.log(buffer7);

// console.log(Buffer.allocUnsafe(-3));
