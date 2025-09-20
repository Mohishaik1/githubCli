const students = [ 
{ name: "Amit", marks: 40 }, 
{ name: "Sara", marks: 80 }, 
{ name: "John", marks: 60 }, 
{ name: "Meena", marks: 85 }, 
]; 

let topper = students.find((num)=>num.marks>75)
console.log(topper);