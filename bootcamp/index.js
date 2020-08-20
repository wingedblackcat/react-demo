// Write a function that receives 2 arguments, a string and a callback function.
// 1. The function checks that the callback function is indeed a function.
// 2. Pass the string to the callback function which logs that string to the
// console.

const checkMe = (str, printIt) =>{
    printIt.constructor === Function ? printIt(str) : null; //can use also condition: typeof printit === 'function' 
} 

const printMeSymor = (string) => console.log(string);

checkMe('hello', printMeSymor);