function hangmanGame(word, guesses) {

    this.dead = false;
    this.word = word;
    this.guesses = guesses;
    this.truthIndex = []; //Show or don't show the word to the user.
    this.isWinner = false


    
    // while (this.guesses != 0){ //Iterates x number of guesses, as passed in hangmanGame call


    // truthIndex is a bool to indicate if a letter in the word has been found or not - set the 'truthIndex' for each letter in the word to false
    for (var i = 0; i < word.length; i++) {
        this.truthIndex[i] = false;
    }




function oneTurn(){
// the 'oneTurn' function is one iteration of the logic to collect the letter a user guesses and compare it to each letter in the hidden word.  It then outputs a string that displays the word with underscores occupying unguessed chars, or the chars themselves if the letter is found.

var found = false;
//'found' is set to false at the beginning of each turn until a letter in the word is found and triggers it to be true

    //Get user Input
    this.userGuess = function (letter) {
        letter = prompt("Make a guess");

        //Examine each index for letters in word and if the userGuess matches, set truthIndex to true for that letter.
        for (var i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                this.truthIndex[i] = true;
                found = true;
            }
                else guesses = guesses--;
            }
        }

    
    // Build a string of either letters guessed, or underscores as place holders for letters yet to be revealed
    var str = "";
    for (var i = 0; i < word.length; i++) {
            if (this.truthIndex[i] == false) {
                str = str + "_ ";
            else {
                str = str + word[i]+" ";
                }
            }
        }

    //at the end of the turn, last thing to do is check if there was a letter found or not, and if not, subtract one from the number of turns remaining
        if (found == false){
            guesses = guesses--
        }
    }  // END of oneTurn function




    console.log(str+" You have "+this.guesses+" guesses left");
    
        

        this.isWinner = false;
            if (this.isWinner){
                console.log("CONGRATULATIONS!")
                this.guesses = 0;
            }
    }
}


    }


    
game = new hangmanGame("yellow", 5);


