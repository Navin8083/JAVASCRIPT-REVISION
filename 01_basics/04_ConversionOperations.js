let str1="Hello"
let str2=" Naveen"
let str3= str1+str2;
//console.log(str3); Hello Naveen

let value =3;
let negvalue=-value;
//console.log(negvalue) -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
// console.log(2==2); 

// console.log("1"+2)  // 12
// console.log(1+"2")  // 12
// console.log("1"+2 + 2) // 122
// console.log(1+ 2 +"2")  //32

//console.log(2001 + ": Its my birthday")

// console.log("2"==2)  true
// console.log("2"===2) false 
// console.log(null>0)  false 
// console.log(null>=0) true

// Datatypes summery

// premitive 
// 7types-: String ,Number, Boolean , null, undefined ,symbol,BigInt
const score=100
const scoreValue=100

//console.log(score === scoreValue);

const isloggin=false;  // Boolean
const outerTemp=null; // object
let userEmail; // undefined

const id= Symbol('123')
const anotherId= Symbol('123')

//console.log(id===anotherId);  -->false

// Refrence (Non primitive)

// Array, Object , Functions
const heros=["Naveen","Chandan","naggraj"]
let myObj={
     name: "naveen",
    age:22,
}
const myFunction=function(){
//console.log("Hello World");

}
//console.log(typeof userEmail)

//...........Memory allocation.........//

// Premivite data store in stack memory
// Non premitive data store in heap memory

let myname="Navin";

let othername=myname;
console.log(othername);

let userOne={
    email: 'navin@google.com',
    upi: 'navin@ybl'
}
let userTwo=userOne;
 userTwo.email='naveen12@gmail.com'

 userTwo.upi='2345@ybl'

 console.log(userOne.email)
    console.log(userTwo.email)
    console.log(userTwo.upi)





 

 








