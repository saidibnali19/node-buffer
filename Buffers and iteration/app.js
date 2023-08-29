import { Buffer } from "node:buffer";

const buffer = Buffer.from([1, 2, 3, 4]);
for (let b of buffer) console.log(b);

const buffer2 = Buffer.from("hello world", "utf8");
for (let b of buffer2) console.log(b);

buffer.forEach((b) => console.log(b));
buffer2.forEach((b) => console.log(b));
