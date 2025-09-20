function createArray(n, value) {
 let array = [];
 for (let i = 0; i < n; i++) {
array.push(value);
 }
 return array;
}
createArray('me');

// var num = [1,2,3,4, [10,20,30, [100,200,300]]];
// console.log(num[4][3][2]);