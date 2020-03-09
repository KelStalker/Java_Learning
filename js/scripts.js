<<<<<<< HEAD
// single line comment
/*
This comment can be:
many lines
*/

var myInteger=7;

//output to the console using the console.log method
console.log(myInteger *4);

// if(myInteger>5){
//     console.log('Number is greater than 5');
// }
if(myInteger<5){
    console.log('Number is less than 5');
}
else if((myInteger === 7) || (myInteger === 34)){
    console.log('Number is either 7 or 34');
}
else{
    console.log('Number is 5');
}


var myString='Hello World'; //A list of characters
myInteger = 4;
var myFloat = 12.768;
var myBoolean = true;
var myArray = [myString, myInteger, myFloat, uhOh, myNull];
var uhOh = undefined; //No value is yet assignned
var myNull = null; //The value/variable does not exist

//Here is a loop
for(i = 0; i < 5; i++){
    console.log ('Value of position '+i+' in myArray is: '+myArray[i]);
}

//A very basic FUNCTION
function myFunction(){
    console.log('My function has just ran');
}
//Need to 'call' the function in order to run it, so:
myFunction();


//Another very basic FUNCTION
function addAFace(){
    var inputValue = prompt('Enter your name: ')
    console.log(':) '+inputValue+' :(');
}
 addAFace();
//-----------------------------------------------------
 //exercise1: Using what you just learned about conditional statements and loops, write a program that uses console.log() to print all the numbers from 1 to 100, with two exceptions.  ** For numbers divisible by 3, print Fizz instead of the number, and for numbers divisible by 5 (and not 3), print Buzz instead.  **When you have that working, modify your program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print Fizz or Buzz for numbers divisible by only one of those).

 function exercise1(){
    for(i = 1; i < 100; i++)

        if(i%3!=0 && i%5!=0)
            console.log(i);

            else if(i%5==0 && i%3==0)
            console.log('FizzBuzz');
        
        else if(i%3==0)
            console.log('Fizz');
        
        else if(i%5==0)
            console.log('Buzz');

    }
    exercise1();PublicKeyCredential



    /* Ternary syntax for if-then.else statement is:
    (condition) ? (logic for TRUE) : (logic for FALSE);
    */


    // Here is a WHILE loop:
    var i = 0;
    while(i < 6){
        console.log('Iteration number ' +i);
        i++;
    }

    // Here is a FOREACH method for any array datatype(s)
    myArray.forEach ( function (arrayItem) {
        console.log( 'Array item is: '+arrayItem );
    } )
=======
// Single line comment.

/*
 This comment can be:
 many lines!
 */

// Camel-casing is common for JavaScript!
var myInteger = 34; 

// We can output to our console via the console.log method.
console.log( myInteger * 3 ); 

// Let's practice an if-chain...
if ( ( myInteger === 7 ) || ( myInteger === 34 )  ) {
    console.log( 'Number is... 7 OR 34!?' );
} else if ( ( myInteger === 6 ) && ( myInteger > 5 ) ) {
    console.log( 'Number is 6!!!' );
} else if ( myInteger > 5 ) {
    console.log( 'Number is greater than 5.' );
} else if ( myInteger < 5 ) {
    console.log( 'Number is less than 5.' );
} else {
    console.log( 'Number is 5!?' );
}

// Datatypes:
var myString = 'Hello world!'; // "List" of characters!
myInteger = 64; // Already declared, so no var!
var myFloat = 12.768; // Decimal number.
var myBoolean = true; // True or false.
var uhOh = undefined; // No value is yet assigned.
var myNull = null; // The value/variable doesn't exist!
var myArray = [myString, myInteger, myFloat, uhOh, myNull]; // Array!

// Let's try a loop! Remember: i++ is the same as:
//                             i = i + 1;
for ( var i = 0; i < 5; i++ ) {
    console.log( 'Value of position '+i+', in myArray, is: '+myArray[i] );
}

// A basic function!
function myFunction () {
    var testerNum = 36; // Careful! We can't use this outside of the function... this is locally scoped!
    console.log( 'My function has run.' );
}

// console.log( 'TesterNum is: '+testerNum ); // What is defined in local scope, will not be available globally...

// We have to call upon it, in order to run it, don't forget!
// myFunction();

/**
 * Let's convert C# exercise 4 to a JavaScript program!
 * @link https://github.com/TECHCareers-by-Manpower/csharp-exercise-4/blob/master/Program.cs 
 */

// Main program.
function smileyFunction()
{
    var input = getInput();
    input = addSmileyToEnd( input );
    input = addSmileyToBeginning( input );
    writeName( input );
}

// Retrieve input.
function getInput()
{
    return prompt( 'Enter your name.' );
}

// Add a "smiley" string to the end.
function addSmileyToEnd( input )
{
    input = input+":)";
    return input;
}

// Add a (sad) "smiley" string to the beginning.
function addSmileyToBeginning( input )
{
    input = ":("+input;
    return input;
}

// Output a value.
function writeName( input ) {
    console.log( input );
}

/* TRUTHY and FALSY
 * true === true
 * 'hello' == true
 * 1 == true
 * -58 == true
 * false === false
 * 0 == false
 * undefined == false
 * null == false
 * NaN == false
 * '' == false
 */

// If statement...
var a = 3;
var b = 5;
if ( a === b ) {
    console.log( 'a is identical to b.' );
} else {
    console.log( 'a and b are not identical.' );
}

// Converting the above to ternary...
/*
 * Syntax is:
 * (condition) ? (logic for TRUE) : (logic for FALSE);
 * Note that it RETURNS the outcome, so it can be used for assignment.
 */
( a === b ) ? console.log( 'a is identical to b.' ) : console.log( 'a and b are not identical.' );

// A while loop takes a condition.
var i = 0;
while ( i < 6 ) {
    console.log( 'While loop: '+i );
    i++; // Make sure the condition will eventually be FALSE, or the loop will go on FOREVER! :(
}

// Foreach!? It is a method of the array datatype!
myArray.forEach( function( arrayItem ) {
    // Woah! We're in a "closure", or, an "anonymous function" now! We didn't declare and name it, so won't be able to call it again... it is useful here to process our array items though!
    console.log( 'Array item is: '+arrayItem );
} );

/*
 * Let's give objects a shot!
 */

 var myObject = {
     name:    'Bob',
     age:     32,
     hobbies: [
        'sports',
        'movies',
        'hiking'
     ],
     sayHi: function() {
        console.log(
            'Hello! My name is '
            +this.name
            +'. I am '
            +this.age
            +' years old, and one of my hobbies is: \r\n' // Newline character!
            +this.hobbies[1]
            +'.' );
     },
     birthday: function() {
        this.age++;
        return this.age;
     }
 }

 myObject.birthday(); // Increment object's "age" property.
 myObject.hobbies[1] = 'programming'; // Update array value in position "1".

 // Let Bob speak!
 // myObject.sayHi();

 /*
  * myObject.age
  * is equivalent to...
  * myObject['age']
  */

console.log( 'Looping through myObject:' );
 // We can loop through properties in an object:
 for ( var prop in myObject ) {
    console.log( myObject[prop] );
 }

// Multi-line text can be included in a 
var multiLineString = `
    This text
        is
many lines!
`;
console.log( multiLineString );
>>>>>>> 65b7e0b96729397e55dcdaad1b71173bddb32da3
