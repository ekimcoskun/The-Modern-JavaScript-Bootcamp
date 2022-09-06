const Hangman = function (word, remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainingGuess
    this.guess = ['e']

    Hangman.prototype.getPuzzle = function () {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guess.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })

        return puzzle
    }
}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 3)
console.log(game2.getPuzzle())