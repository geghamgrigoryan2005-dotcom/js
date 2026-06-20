// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const ardyunq = []
// arr1.forEach((elemets) => {
//     console.log(elemets);
//     arr2.forEach((element) => {
//         console.log(`${element} * ${elemets} = ${elemets * element}`);

//     })
// });

// for(let i  of arr1){
//     console.log(i);

// }

// console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);


// let numbersSorted = []

// numbers.forEach ((num) => {
//     if (num === 0){
//         numbersSorted.unshift(num)
//     }else{
//         numbersSorted.push(num)
//     }

// })

// console.log(numbersSorted);
const numbers = [5, 0, 7, 0,  44, 0, 21, 0,  77, 0, 888, -20, -99, 7.8];
let nums = {
    even:[],
    odd:[]
} 
numbers.forEach((num) => {
    if(num % 2 == 0){
        nums.even.unshift(num)
    }else{
        nums.odd.unshift(num)
    }
})

console.log(nums);
