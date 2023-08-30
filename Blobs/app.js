import { Blob, Buffer } from "node:buffer";

const blob = new Blob(["hello there"]);

const buffer = Buffer.from([1, 2, 3, 4]);
const blob2 = new Blob([buffer, blob]);
console.log(blob2);

blob2.text().then(console.log);
blob2.arrayBuffer().then(console.log);
