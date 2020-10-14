import React, { Component, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { Cell } from "../pieces/Cell"

// await execute();
let colors = [0, 1, 2, 3, 4];

let fillCell = (rowIndex, colIndex, board, row) => {
    let color1 = -1, color2 = -2;
    if (rowIndex >= 2) { // check two cells above
        if (board[rowIndex - 1][colIndex] === board[rowIndex - 2][colIndex])
            color1 = board[rowIndex - 1][colIndex];
    }
    if (colIndex >= 2) { // check two cells on the left
        if (row[colIndex - 1] === row[colIndex - 2])
            color2 = row[colIndex - 1];
    }
    let filtered = colors.filter(item => (item !== color1 && item !== color2))
    return filtered[Math.floor(Math.random() * filtered.length)]
}
let board = []
for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(fillCell(i, j, board, row));
    }
    board.push(row)
}

export const Board = (props) => {

    // console.log(board)
    const myBoard = []
    for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 10; j++) {
            row.push(fillCell(i, j, myBoard, row));
        }
        myBoard.push(row)
    }
    let [board, setBoard] = useState(myBoard)

    const getMatches = (board) => {
        let matches = []
        let match = [];
        for (let i = 0; i < board.length; i++) {
            let curr = -1;
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== curr) {
                    curr = board[i][j]
                    if (match.length >= 3) {
                        matches.push(match)
                    }
                    match = []
                    match.push({ i, j });
                }
                else {
                    match.push({ i, j })
                    if (i == board.length - 1 && match.length >= 3)
                        matches.push(match)
                }
            }
            match = [];
        }
        for (let i = 0; i < board.length; i++) {
            let curr = -1;
            for (let j = 0; j < board[i].length; j++) {
                if (board[j][i] !== curr) {
                    curr = board[j][i]
                    if (match.length >= 3) {
                        matches.push(match)
                    }
                    match = []
                    match.push({ "i": j, "j": i });
                }
                else {
                    match.push({ "i": j, "j": i })
                    if (j == board.length - 1 && match.length >= 3)
                        matches.push(match)
                }
            }
            match = [];
        }
        // console.log(matches)
        return matches;
    }

    let refreshCells = (board, matches) => {
        // let temp = JSON.parse(JSON.stringify(board))
        // for (let i = 0; i < board.length; i++) {
        //     let row= [];
        //     for (let j = 0; j < board[i].length; j++) {
        //         row.push(board[i][j])
        //     }
        // }
        let temp = JSON.parse(JSON.stringify(board))
        for (let i = 0; i < matches.length; i++) {
            for (let j = 0; j < matches[i].length; j++) {
                temp[matches[i][j]["i"]][matches[i][j]["j"]] = Math.floor(Math.random() * 6);
            }
        }
        return temp;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let cascadeBoard = (board) => {
        console.log(JSON.stringify(board))
        while (true) {
            // await sleep(500);
            let matches = getMatches(board);
            // console.log(matches)
           
            console.log(matches, matches.length *50)
            if (matches.length === 0)
                break;
            board = refreshCells(board, matches)
            props.updateScore(matches.length * 50)
            setBoard(board)
            // board1 = refreshCells(board1, matches)
            // console.log(JSON.stringify(board1))
            // console.log("-------------------------------------------")
        }
    }

    const [clickedCells, setClickedCells] = useState([])
    const swapColor = async (r, c) => {
        const temp = [...clickedCells]
        temp.push({ r, c })
        setClickedCells(temp)
        if (temp.length == 1) {
            return
        }
        if (temp.length == 2) {
            let isValidMove = true;
            if (temp[0]["r"] === temp[1]["r"] && temp[0]["c"] === temp[1]["c"]) {
                isValidMove = false
            }
            else if (temp[0]["r"] === temp[1]["r"]) {
                if (Math.abs(temp[0]["c"] - temp[1]["c"]) == 1) {
                    let tempColor = board[temp[0]["r"]][temp[0]["c"]]
                    let tempBoard = JSON.parse(JSON.stringify(board))
                    tempBoard[temp[0]["r"]][temp[0]["c"]] = tempBoard[temp[1]["r"]][temp[1]["c"]]
                    tempBoard[temp[1]["r"]][temp[1]["c"]] = tempColor
                    setBoard(tempBoard)
                    console.log(clickedCells)
                    setClickedCells([])
                    cascadeBoard(tempBoard);
                }
            }
            else if (temp[0]["c"] === temp[1]["c"]) {
                if (Math.abs(temp[0]["r"] - temp[1]["r"]) <= 1) {
                    let tempColor = board[temp[0]["r"]][temp[0]["c"]]
                    let tempBoard = JSON.parse(JSON.stringify(board))
                    tempBoard[temp[0]["r"]][temp[0]["c"]] = tempBoard[temp[1]["r"]][temp[1]["c"]]
                    tempBoard[temp[1]["r"]][temp[1]["c"]] = tempColor
                    setBoard(tempBoard)
                    setClickedCells([])
                    cascadeBoard(tempBoard);
                }
            }
            else {
                isValidMove = false;
                setClickedCells([])
            }

            if (!isValidMove) { //reset array
                setClickedCells([])
            }
        }
    }
    return (<div><Container >
        {
            board.map((_row, indexRow) => <Row>
                {_row.map((_col, indexCol) =>
                    <Cell row={indexRow} col={indexCol} backgroundId={board[indexRow][indexCol]} swapColor={swapColor}>
                    </Cell>)}
            </Row>)

        }
    </Container ></div>)
}
