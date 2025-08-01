let array =  [30,80,45,80,24.99,12.95,12.95,5.99]

let sum = 0;

array = array.forEach(array =>{
    sum+= 2*array
})
console.log(sum);