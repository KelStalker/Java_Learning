var myNumber = 54.6;
console.log ( myNumber + 6);


myNumber = parseFloat(myNumber);
console.log ( myNumber + 6);
myNumber


myNumber = Number(myNumber)
console.log (myNumber + 6);


var mathOperation = 'add':
switch(mathOperation){

    case "subtact": 
        console.log ( 5 - 5 );
        break;
    case "add":
        console.log ( 5 + 5 );
        break;
    case "divide":
        console.log ( 5 / 5);
        break;
    case "multiply":
        console.log ( 5 * 5);
        break;
    // defaut:
    //     console.log( 'No operator provided.')
}

var myParagraph = document.getElementById( 'my-paragraph');
console.log( myParagraph);

myParagraph.textContent = "Hello world!";
myParagraph.textContent += ' Also, he how are ya\'ll?'

var newParagraph = document.createElement( 'p' );
newParagraph,textContent = 'This paragraph was created in JavaScript!';
document.body.appendChild (newParagraph);


    