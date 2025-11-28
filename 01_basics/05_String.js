// String mathods practice

let str1='naveen-kumar-dubey.';
let cast='Hindusium'

console.log(str1.length);

//console.log(`Hello my name is${str1} and my cast is ${cast}`);
//console.log(str1[0]);

//console.log(cast.toUpperCase());

//console.log(str1.charAt(3));
//console.log(cast.indexOf('s'))

//console.log(str1.substring(0,6)) -->naveen
console.log(str1.slice(-12,-7));
// kumar --> string ke pichhe se 12 char gino(including space) 
            // fir pichhe se 7 gin lo or dono ke bich me jo hai whi output hoga
console.log(str1.slice(-6))    // dubey.

console.log(str1.replace('-','_'))// naveen-kumar-dubey. to naveen_kumar_dubey

const newName='  Amit  ';
console.log(newName);// ___Amit
// for removing space use trim()

console.log(newName.trim()) //-->Amit

const myName='Naveen-Kumar-Dubey'
//const chars=split.myName('');
console.log(myName.split("",3));






