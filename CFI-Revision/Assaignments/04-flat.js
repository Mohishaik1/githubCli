const nestedArray = [1, [2, 3], [4, [5, 6]], 7]
const flatArray = nestedArray.flat(0)
console.log(flatArray);
const flatArray2 = nestedArray.flat(Infinity)
console.log(flatArray2);