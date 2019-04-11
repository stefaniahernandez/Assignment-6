/*eslint-env browser*/

//STEP 1
/*
var name = window.prompt("What's your name?");
window.alert(name.length);
*/
//STEP 2
/*
var name = window.prompt("What's your name?");
var choice = window.prompt("Choose a number between one and five.");
window.alert(name.charAt(choice));
*/
//STEP 3
/*
var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");
window.alert("Your name is: " + firstName.concat(lastName));
*/
//STEP 4
/*
var sentence = "The quick, brown fox jumps over the lazy dog.";
window.alert(sentence.match(/fox/g));
*/
//STEP 5
/*
var sentence = "The quick, brown fox jumps over the lazy dog.";
window.alert(sentence.lastIndexOf("fox"));
*/
//STEP 6
/*
var sentence = "The quick, brown fox jumps over the lazy dog.";
var name = window.prompt("What is your full name?");
window.alert(sentence.replace("the lazy dog", name));
*/
//STEP 7
/*
var sentence = "The quick, brown fox jumps over the lazy dog.";
var word = window.prompt("Type one of the following words: quick, brown, lazy, or the.");
window.alert(sentence.search(word));
*/
//STEP 8
/*
var oldString = "The quick, brown fox jumps over the lazy dog.";
var newString = (oldString.slice(31, 44));
window.alert(newString.toUpperCase());
*/
//STEP 9
/*
var newText = "   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG   ";
window.alert(newText.trim().toLowerCase());
*/
//STEP 10
/*
var oldString = "the quick, brown fox jumps over the lazy dog.";
var newString = (oldString.slice(0, 1));
window.alert(newString.toUpperCase() + oldString.slice(1, 45));
*/