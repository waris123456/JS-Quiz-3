// Code By AbdulWaris
// 1. Random Password Generator
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&^*()\|[]{};"<>/?';
var userInp = prompt("Enter the lenght of your password")
var length = parseInt(userInp)
var result = ' ';
const charactersLength = characters.length;

for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result)

// 2. Seperate Even odd Numbers
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var even = []
// var odd = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         even.push(arr[i])
//     }
//     else if (arr[i] % 2 !== 0) {
//         odd.push(arr[i])
//     }
// }

// console.log("Even Array:", even)
// console.log("Odd Array:", odd)