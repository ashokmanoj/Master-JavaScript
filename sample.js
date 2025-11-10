let arr = [1,2,3,[1,3,4],6,7]

let arr1 = arr //sample copy
arr.push=90;
arr[3] = 100;
let arr2 = [...arr] //spread operator copy

let arr3 = JSON.parse(JSON.stringify(arr)) //deep copy

console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)