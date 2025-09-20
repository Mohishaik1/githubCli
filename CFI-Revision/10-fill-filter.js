const arr = [1,2,3,4,5]
const arry2 = [1,2,4,5,6,56,3,53,2,1,42,5,2,5]


// console.log(arr);

let testArr = arr;

// console.log(testArr.fill("inserted",2,4));

let eve = arry2.filter((ele)=>{
    return ele != 2
})

console.log(eve);