"use strict";
// This is my name
var myName = "Josh";
// constant set to number of states
var numOfStates = 50;
// adding 5 to 4 and storing the result
var result = 5 + 4;
function sayHello() {
    alert("Hello World");
}
// sayHello();
// sayHello();
// function to take name and age and if age is less than 21, alert a denial message
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
// checkAge("Charles", 21);
// checkAge("Abby", 27);
// checkAge("James", 18);
// checkAge("John", 17);
var myFavVeggies = ["Broccoli", "Peas", "Carrot", "Radish", "Corn"];
for (var index = 0; index <= 4; index++) {
    console.log(myFavVeggies[index]);
}
var pet = {
    name: "Benny",
    breed: "German Shepard"
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: "Josh",
        age: 27
    },
    {
        name: "Garrett",
        age: 22
    },
    {
        name: "Jake",
        age: 26
    },
    {
        name: "Benny",
        age: 3
    },
    {
        name: "Pete",
        age: 29
    }
];
for (var index = 0; index < people.length; index++) {
    checkAge(people[index].name, people[index].age);
}
function getLength(word) {
    return word.length;
}
var wordLength = getLength("Hello World");
if (wordLength % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
