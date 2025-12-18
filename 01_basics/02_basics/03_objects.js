const jsUser ={
    name:"Naveen",
    age:18,
    class:"Tenth",
    email: "navindubey@cutm.ac.in",
    location:"West_champaran",

}
console.log(jsUser);
console.log(typeof jsUser);

// accessing object properties
console.log(jsUser.name);
console.log(jsUser.age);
console.log(jsUser.class);
console.log(jsUser.email);
console.log(jsUser.location);

// updating object properties
jsUser.age = 19;
jsUser.location = "East_champaran";

console.log("After updating:");
console.log(jsUser);

//adding new property
jsUser.phone = "123-456-7890";
console.log("After adding phone number:");
console.log(jsUser);

// // deleting a property
delete jsUser.class;
console.log("After deleting class:");
console.log(jsUser);

// nested object
const student = {
    name: "Amit",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Patna",
        state: "Bihar"
    }
};

console.log("Student Address:", student.address);
console.log("Student City:", student.address.city);