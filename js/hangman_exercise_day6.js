//  First attempt at making hangman


function hangmanGame(word, guesses) {

    this.dead = false;
    this.word = word;
    this.guesses = guesses;
    this.truthIndex = []; //Show or don't show the word to the user.


    // while (this.guesses != 0){ //Iterates x number of guesses, as passed in hangmanGame call


    for (var i = 0; i < word.length; i++) {
        this.truthIndex[i] = false;
    }

    this.userGuess = function (letter) {
        letter = prompt("Make a guess");

        for (var i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                this.truthIndex[i] = true;
            } else {
                this.guesses--;
            }
        }

        var isWinner = true;

        var str = "";
        for (var i = 0; i < word.length; i++) {
            if (this.truthIndex[i] == false) {
                // console.log("_ ");
                str = str + "_ ";
                isWinner = false;
            }
            else {
                // console.log(word[i]+" ");
                str = str + word[i]+" ";
            }
        }
        console.log(str+" You have "+guesses+" guesses left");

        function checkIsWinner(isWinner){
            if (isWinner){
                console.log("CONGRATULATIONS!")
                this.guesses = 0;
            }

        }
        checkIsWinner(isWinner);
    }
    
// do {
    this.userGuess();
// } while (this.guesses != 0); 

}

game = new hangmanGame("truck", 5);


