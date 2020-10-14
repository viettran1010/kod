import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import styles from './Score.module.css'
import { Timer } from './Timer'

export const ScoreCard = (props) => {
    const [countdown, setCountdown] = useState(false)
    const [preCount, setPreCount] = useState(3)
    return (
        <div>
            <Card className={styles.mainCard}>
                <div className={styles.scoreImg}>
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
                </div>
                <Card.Body>
                    <Card.Text className="d-flex align-items-center justify-content-center">
                        <Button
                            variant="dark"
                            className={styles.timer}
                            onClick={() => { setCountdown(!countdown) }}
                        >
                            {!countdown ? "Start game!" : "Restart !"}
                        </Button>
                    </Card.Text>
                    
                    {
                        countdown ?
                            <Timer min={0} sec={2} className="d-flex align-items-center justify-content-center" />
                            : null
                    }
                    <Card.Title className={styles.scoreTitle}>Current score :</Card.Title>
                    <Card.Text className={styles.scoreText}>
                        <span className={styles.scoreCurrent} >{props.score}</span>
                    </Card.Text>
                    <Card.Title className={styles.scoreTitle}>High score : </Card.Title>
                    <Card.Text className={styles.scoreText}>
                        <FontAwesomeIcon icon={faTrophy} className={styles.scoreIconHigh} />
                        <span className={styles.scoreHigh}>1102</span>
                    </Card.Text>
                    <hr className={styles.hrLine} />
                    <Card.Text className={styles.showLB}>Show Leaderboard</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}