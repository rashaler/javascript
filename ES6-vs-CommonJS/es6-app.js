// app.js 
// import { hello1, hello2 } from './es6-hello.js'
// --or--
import * as myExports from './es6-hello.js'

// console.log(hello1()) // returns hello1
// console.log(hello2())  // returns hello2

console.log(myExports.hello1()) // returns hello1
console.log(myExports.hello2())  // returns hello2