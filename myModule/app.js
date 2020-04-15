'use strict';
const Enigma = require('./enigma');
const eng = new Enigma('thisstringistherawkey01234567890');

let encodeString = eng.encode("Don't panic!");
let decodeString = eng.decode(encodeString);

console.log("Encoded: ", encodeString);
console.log("Decoded: ", decodeString);