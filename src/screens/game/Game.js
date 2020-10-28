import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { MainNav } from '../../components/parts/MainNav'
import { Board } from '../../components/parts/Board'
import { ScoreCard } from '../../components/parts/ScoreCard'
import styles from './Game.module.css'

export const Game = () => {
    const [score, setScore] = useState(0);
    const updateScore = (newScore) => {
        setScore(score + newScore)
        console.log(score, "newscore ", newScore)
    }
    return (
        <div>
            <MainNav />
            <Container className="d-flex justify-content-center align-items-center" style={{ marginTop: "2em" }}>
                <ScoreCard score={score} />
                <Board updateScore={updateScore} className={styles.board} />
            </Container>

        </div>
    )
}




// let colors = [0,1,2,3,4];
// let fillCell = (rowIndex,colIndex,board,row)=> {
//     let color1 = -1, color2 = -2;
//     if (rowIndex >= 2) { // check two cells above
//         if (board[rowIndex-1][colIndex]===board[rowIndex-2][colIndex])
//             color1 = board[rowIndex-1][colIndex];
//     }
//     console.log(board[rowIndex])
//     if (colIndex >= 2) { // check two cells on the left
//         if (row[colIndex-1]===row[colIndex-2])
//             color2 = row[colIndex-1];
//     }
//     let filtered = colors.filter(item=>(item!==color1&&item!==color2) )
//     return filtered[Math.floor(Math.random()*filtered.length)]
// }
// let board = []
// for (let i = 0; i < 10; i++) {
//     let row = [];
//     for (let j = 0; j < 10; j++) {
//         row.push(fillCell(i,j,board,row));        
//     }
//     board.push(row)
// }
// // console.log(board)
