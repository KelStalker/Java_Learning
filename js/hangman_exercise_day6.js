function hangmanGame(word, guesses) {

    this.dead = false;
    this.word = word;
    this.guesses = guesses;
    this.truthIndex = []; //Show or don't show the word to the user.
    this.isWinner = false

    // while (this.guesses != 0){ //Iterates x number of guesses, as passed in hangmanGame call


    // truthIndex is a bool to indicate if a letter in the word has been found or not
    // set the 'truthIndex' for each letter in the word to false
    for (var i = 0; i < word.length; i++) {
        this.truthIndex[i] = false;
    }


    //Get user Input
    this.userGuess = function (letter) {
        letter = prompt("Mke a guess");

        //Examine each index for letters in word and if the userGuess matches, set truthIndex to true for that letter
        for (var i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                this.truthIndex[i] = true;
            }
        }
     }

    // Build a string of either letters guessed, or underscores as place holders for letters that have not been guessed yet.
    var str = "";
    for (var i = 0; i < word.length; i++) {
        if (this.truthIndex[i] == false) {
            str = str + "_ ";
        else {
            str = str + word[i]+" ";
            }
        }

    
        

        this.isWinner = false;
            if (this.isWinner){
                console.log("CONGRATULATIONS!")
                this.guesses = 0;
            }
    }
    while (this.guesses != 0){
    this.userGuess();
    }
}

    if (found == false){
        guesses = guesses--
    }


    console.log(str+" You have "+this.guesses+" guesses left");
game = new hangmanGame("truck", 5);


