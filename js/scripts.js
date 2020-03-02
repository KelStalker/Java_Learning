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

        if(i%3==1 && i%5==1)
            console.log(i);
        
        else if(i%3===0)
            console.log('Fizz');
        
        else if(i%5==0 && i%3==1){
        console.log('Buzz');
        }
        else if(i%5==0 && i%3==0){
            console.log('FizzBuzz');
        }
    }
    exercise1();



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