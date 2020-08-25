// Make your changes to store and update game state in this file
const board = [[null, null, null], [null, null, null], [null, null, null]]
let player_turn = true //true for nought false for cross

//this is a comment to test pushing to githu

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (checkWinner() === null) {

        if (board[row][column] === null) {
            let string
            if (player_turn) {
                string = "nought"
                player_turn = false
            } else {
                string = "cross"
                player_turn = true
            }
            board[row][column] = string
            //console.log("takeTurn was called with row: " + row + ", column:" + column);
            //console.log(board)
        } else {
            //console.log("Space already filled")
        }
    }

}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    let winner = null
    let nobody_counter = 0
    for (i = 0; i < 3; i++) {
        // check rows
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            winner = board[i][0]
            if (winner !== null) {
                break
            }
        }
        // check columns
        else if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            winner = board[0][i]
            if (winner !== null) {
                break
            }
        }
        // check full board
        for (j = 0; j < 3; j++) {
            if (board[i][j] !== null) {
                nobody_counter += 1
            }
        }
    }
    if (nobody_counter === 9) {
        winner = "nobody"
    }
    //check diagonal
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[0][0]
    }
    if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
        winner = board[2][0]
    }
    //console.log("checkWinner was called");

    if (winner === "nought") {
        winner = "noughts"
    } else if (winner === "cross") {
        winner = "crosses"
    }
    return winner;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            board[i][j] = null
        }
    }
    player_turn = true
    //console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    //console.log("getBoard was called");
    return board
}

module = module || {};
module.exports = {
    takeTurn: takeTurn,
    checkWinner: checkWinner,
    resetGame: resetGame,
    getBoard: getBoard,
}