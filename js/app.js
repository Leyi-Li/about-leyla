'use strict';

alert("Hi There")

//The answers to my give questions
var travel = prompt("Do you like to travel?").toUpperCase();
console.log(travel);
var answer1= true;
if (travel === "Y" || travel === "YES"){
    answer1 = true;
    console.log(answer1);
}else if(travel === "N" || travel === "NO") {
    answer1 = false;
    console.log(answer1);
}else {
    console.log("Error");
    alert("Please answer with Y/N or Yes/No");
}

//answer2
var food = prompt("Do you like to eat sushi?").toUpperCase();
console.log(food);
var answer2= true;
if (food === "Y" || food === "YES"){
    answer2 = true;
}else if(food === "N" || food === "NO") {
    answer2 = false;
}else {
    console.log("Error");
    alert("Please answer with Y/N or Yes/No");
}

//answer3
var pet = prompt("Do you like dogs?").toUpperCase();
console.log(pet);
var answer3= true;
if (pet === "Y" || pet === "YES"){
    answer3 = true;
}else if(pet === "N" || pet === "NO") {
    answer3 = false;
}else {
    console.log("Error");
    alert("Please answer with Y/N or Yes/No");
}

//answer4
var answer4= true;
var drink = prompt("Do you like to drink wine?").toUpperCase();
console.log(drink);
if (drink === "Y" || drink === "YES"){
    answer4 = true;
}else if(drink === "N" || drink === "NO") {
    answer4 = false;
}else {
    console.log("Error");
    alert("Please answer with Y/N or Yes/No");
}

//answer5
var answer5= true;
var activity = prompt("Do you like camping?").toUpperCase();
console.log(activity);

if (activity === "Y" || activity === "YES"){
    answer1 = true;
}else if(activity === "N" || activity === "NO") {
    answer5 = false;
}else {
    console.log("Error");
    alert("Please answer with Y/N or Yes/No");
}

//see if Leyla's friend
if (answer1 && answer2 && answer3 && answer4 
    && answer5) { 
    console.log("We will be best friends");
}else if(answer1 || answer2 || answer3 || answer4 || answer5) {
    console.log("Maybe we can be friends");
}else {
    console.log("I guess we can still try to be friends");
}
