'use strict';

alert("Hi There");

//The answers to my give questions
var travel = prompt("Do you like to travel?").toUpperCase();
if (travel !== "Y" && travel !== "YES" && travel !== "N" && travel !== "NO"){
    alert("Please answer with Y/N or Yes/No");
}
console.log(travel);
var answer1= true;
if (travel === "Y" || travel === "YES"){
    answer1 = true;
    console.log(answer1);
    alert("That's great that you love traveling too!!");
}else {
    answer1 = false;
    console.log(answer1);
    alert("That's sad that you don't like traveling ");
}

//answer2
var food = prompt("Do you like to eat sushi?").toUpperCase();
console.log(food);
var answer2= true;
if (food === "Y" || food === "YES"){
    answer2 = true;
    console.log(answer2);
    alert("That's great that you love sushi too!!");
}else {
    answer2 = false;
    console.log(answer2);
    alert("That's sad that you don't like sushi ");
}

//answer3
var pet = prompt("Do you like dogs?").toUpperCase();
console.log(pet);
var answer3= true;
if (pet === "Y" || pet === "YES"){
    answer3 = true;
    console.log(answer3);
    alert("That's great that you like doggy ");
}else  {
    answer3 = false;
    console.log(answer1);
    alert("That's sad that you don't like dogs, who are you? ");
}

//answer4
var answer4= true;
var drink = prompt("Do you like to drink wine?").toUpperCase();
console.log(drink);
if (drink === "Y" || drink === "YES"){
    answer4 = true;
    console.log(answer4);
    alert("That's great that you like wine ");
}else  {
    answer4 = false;
    console.log(answer4);
    alert("That's sad that you don't like wine ");
}

//answer5
var answer5= true;
var activity = prompt("Do you like camping?").toUpperCase();
console.log(activity);

if (activity === "Y" || activity === "YES"){
    answer1 = true;
    console.log(answer5);
    alert("That's sad that you don't like camping ");
}else {
    answer5 = false;
    console.log(answer5);
    alert("That's sad that you don't like camping ");
}

//see if Leyla's friend
if (answer1 && answer2 && answer3 && answer4 
    && answer5) { 
    console.log("We will be best friends");
    alert("We will be best friends")
}else if(answer1 || answer2 || answer3 || answer4 || answer5) {
    console.log("Maybe we can be friends");
    alert("Maybe we can be friends");
}else {
    console.log("I guess we can still try to be friends");
    alert("I guess we can still try to be friends");
}


//(drink === "N" || drink === "NO")