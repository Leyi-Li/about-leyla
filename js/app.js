'use strict';

alert("Hi There");
var name = prompt('What is your name?');
alert('So nice to meet you ' + name + '!');

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


//Birthday guess

var bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
//normalize answers
if (isNaN(bDay) === true) {
    alert('Please answer with Arabic numerals like 1, 2, 3...');
    bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
}
//guess game here
for (var i = 4; i > 0; i--) {
    
    if (bDay === '5') {
        alert('You are right! My birthday is on June 5th');
        break;
    }else if(bDay < 5){
        alert('It should be a bigger number');
        bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
    }else{
        alert('it should be a smaller number');
        bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
    }

    if (i === 1 && bDay !== 5) {
        alert('Oh no, you used all 4 chances! My birthday is on June 5th!');
    }
}


