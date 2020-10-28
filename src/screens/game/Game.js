import React, {useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { MainNav } from '../../components/parts/MainNav'
import { Board } from '../../components/parts/Board'
import { ScoreCard } from '../../components/parts/ScoreCard'
import styles from './Game.module.css'
import {AuthUserCtx} from '../../context/auth' 
import axios from 'axios'

export const Game = () => {
    const {authUser} = useContext(AuthUserCtx)
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0)
    const updateScore = (newScore) => {
        setScore(score + newScore)
        console.log(score, "newscore ", newScore)
    }
    useEffect(() => {
        axios.get('http://localhost:4000/game/hightScore/5f98e3525e0ad93deba8c196', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((res) => {
            setHighScore(res.data.highScore)
        })
    },[])
    useEffect(()=>{
        if(score >= highScore)
        {
            setHighScore(score)
        }

    },[])
    return (
        <div>
            <MainNav/>
            <Container className="d-flex justify-content-center align-items-center" style={{ marginTop: "2em" }}>
                <ScoreCard score={score} highScore={highScore} />
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
