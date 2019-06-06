'use strict';

alert('Hi There');
var name = prompt('What is your name?');
alert('So nice to meet you ' + name + '!');

//The answers to my give questions

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;


q1Ask();
q2Ask();
q3Ask();
q4Ask();
q5Ask();
q6Ask();
q7Ask();
q8Ask();


// answer === 'Y' || answer === 'YES' || answer === 'N' || answer === 'NO'

function askYesOrNoQuestion(string) {
    var answer = prompt(string).toUpperCase();
    while (answer !== 'Y' && answer !== 'YES' && answer !== 'N' && answer !== 'NO') {
        alert('Please answer with Y/N or Yes/No');
        answer = prompt(string).toUpperCase();
    }
    return answer;
}

function q1Ask() {
    var travel = askYesOrNoQuestion('Do you like to travel?');

    console.log(travel);
    answer1 = true;
    if (travel === 'Y' || travel === 'YES') {
        answer1 = true;
        console.log(answer1);
        alert('That\'s great that you love traveling too!!');
    } else {
        answer1 = false;
        console.log(answer1);
        alert('That\'s sad that you don\'t like traveling ');
    }
}

//answer2
function q2Ask() {
    var food = askYesOrNoQuestion('Do you like to eat sushi?');

    console.log(food);
    answer2 = true;
    if (food === 'Y' || food === 'YES') {
        answer2 = true;
        console.log(answer2);
        alert('That\'s great that you love sushi too!!');
    } else {
        answer2 = false;
        console.log(answer2);
        alert('That\'s sad that you don\'t like sushi ');
    }
}

//answer3
function q3Ask() {
    var pet = askYesOrNoQuestion('Do you like dogs?');
    console.log(pet);
    answer3 = true;
    if (pet === 'Y' || pet === 'YES') {
        answer3 = true;
        console.log(answer3);
        alert('That\'s great that you like doggy ');
    } else {
        answer3 = false;
        console.log(answer3);
        alert('That\'s sad that you don\'t like dogs, who are you? ');
    }
}

//answer4
function q4Ask() {
    var drink = askYesOrNoQuestion('Do you like to drink wine?');
    answer4 = true;
    console.log(drink);
    if (drink === 'Y' || drink === 'YES') {
        answer4 = true;
        console.log(answer4);
        alert('That\'s great that you like wine ');
    } else {
        answer4 = false;
        console.log(answer4);
        alert('That\'s sad that you don\'t like wine ');
    }
}

//answer5
function q5Ask() {
    var activity = askYesOrNoQuestion('Do you like camping?');
    answer5 = true;
    console.log(activity);

    if (activity === 'Y' || activity === 'YES') {
        answer5 = true;
        console.log(answer5);
        alert('That\'s sad that you don\'t like camping ');
    } else {
        answer5 = false;
        console.log(answer5);
        alert('That\'s sad that you don\'t like camping ');
    }
}

//see if Leyla's friend
function q6Ask() {
    if (answer1 && answer2 && answer3 && answer4
        && answer5) {
        console.log('We will be best friends');
        alert('We will be best friends');
    } else if (answer1 || answer2 || answer3 || answer4 || answer5) {
        console.log('Maybe we can be friends');
        alert('Maybe we can be friends');
    } else {
        console.log('I guess we can still try to be friends');
        alert('I guess we can still try to be friends');
    }
}


//Birthday guess
function q7Ask() {
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
        } else if (bDay < 5) {
            alert('It should be a bigger number');
            bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
        } else {
            alert('it should be a smaller number');
            bDay = prompt('My birthday is in June, but guess which day is it? (Please answer with Arabic numerals like 1,2,3...)');
        }

        if (i === 1 && bDay !== 5) {
            alert('Oh no, you used all 4 chances! My birthday is on June 5th!');
        }
    }
}

//multiple correct anwers question
function q8Ask() {
    var countries = ['iceland', 'japan', 'thailand', 'france', 'china', 'the us', 'the uk', 'ireland', 'switzerland'];
    var answer7 = prompt('Which country do you think I have been to? (You will have 6 guesses)').toLowerCase();
    // answer7 = answer7.toUpperCase();
    var guess = 0;
    var answerCorrect = false;
    console.log(answer7);
    while (guess < 6) {
        guess++;
        for (var x = 0; x < countries.length; x++) {
            if (answer7 === countries[x]) {

                answerCorrect = true;


            }
        }
        if (answerCorrect === true) {
            alert('You are right, I have been to ' + answer7);
            break;
        } else {
            answer7 = prompt('Wrong! You will have ' + (6 - guess + 1) + ' more chances.').toLowerCase();
            console.log('else');
        }
    }
}
