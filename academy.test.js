const { takeTurn, checkWinner, resetGame, getBoard } = require('./academy');


const each = require("jest-each").default;

describe("Test taking turns", () => {
    //Arrange
    each([
        [//one turn
            [[1,0]],
            [[null,null,null],["nought",null,null],[null,null,null]]
        ],
        [//two turns
            [[2,0],[2,2]],
            [[null,null,null],[null,null,null],["nought",null,"cross"]]
        ],
        [//turn on top of another
            [[1,1],[1,1]],
            [[null,null,null],[null,"nought",null],[null,null,null]]
        ]
    ]).it("When the input is '%s'", (turns, expected_output) => {
        //Act
        for (let i=0; i<turns.length; i++) {
            takeTurn(turns[i][0], turns[i][1])
        }
        actual_output = getBoard()
        resetGame()
        //Assert
        expect(actual_output).toStrictEqual(expected_output)
    })
})

resetGame()

describe("win_conditions", () =>{
    //Arrange
    each([
        [
            [[0,0],[0,1],[1,1],[0,2],[2,2]], //diagonal win
            "noughts"
        ],
        [
            [[0,0],[1,0],[2,2],[1,1],[2,0],[1,2]], //horizontal win
            "crosses"
        ],
        [
            [[0,2],[1,0],[1,2],[2,1],[2,2]], //vertical win
            "noughts"
        ],
        [
            [[0,0],[1,1],[2,1],[2,2],[0,2],[1,0],[2,0],[0,1],[1,2]], //nobody wins
            "nobody"
        ],
        [
            [[2,0],[1,2]], //keep playing
            null
        ]
    ]).it("When the input is '%s'", (turns, expected_output) => {
        //Act
        for (let i=0; i<turns.length; i++) {
            takeTurn(turns[i][0], turns[i][1])
        }
        let actual_output = checkWinner()
        resetGame()
        //Assert
        expect(actual_output).toBe(expected_output)
    })
})