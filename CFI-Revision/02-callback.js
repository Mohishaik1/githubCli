import readline from "readline-sync"
import { greet } from "./01-greet.js"

// function talk(){
//     greet();
//     console.log(``)
// }


let arr = [1,2,3,4,5]
let sum = 0;
arr = arr.forEach(arr => {
    sum=sum+arr;
});

console.log(sum);

