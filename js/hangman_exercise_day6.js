//  First attempt at making hangman


function game() {

}



function hangmanGame(word, guesses) {

    this.dead = false;
    this.word = word;
    this.guesses = guesses;
    this.truthIndex = []; //Show or don't show the word to the user.
    //Eg: "truck".
    //Eg: [ false, false, false, false, false];
    //Eg: ______
    //
    //Eg2: "truck"
    // [true, false, false, false, false]
    // t_____
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
                // console.log("_ ");
                str = str + "_ ";
            }
            else {
                // console.log(word[i]+" ");
                str = str + word[i]+" ";
            }
        }
        console.log(str);

    }

    this.userGuess();
}

game = new hangmanGame("truck", 5);


