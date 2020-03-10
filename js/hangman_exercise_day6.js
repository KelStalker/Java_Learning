function hangmanGame(word, guesses) {

    this.dead = false;
    this.word = word;
    this.guesses = guesses;
    this.truthIndex = []; //Show or don't show the word to the user.
    this.isWinner = true

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

        var str = "";
        for (var i = 0; i < word.length; i++) {
            if (this.truthIndex[i] == false) {
                str = str + "_ ";
                this.isWinner = false;
            }
            else {
                // console.log(word[i]+" ");
                str = str + word[i]+" ";
            }
        }
        console.log(str+" You have "+guesses+" guesses left");


            if (this.isWinner){
                console.log("CONGRATULATIONS!")
                this.guesses = 0;
            }
    }

    this.userGuess();
}

game = new hangmanGame("truck", 5);


