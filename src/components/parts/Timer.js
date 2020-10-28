import React from 'react'
import { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap'
import styles from './Score.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const Timer = (props) => {
    const { min = 0, sec = 0 } = props;
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);
    // const [preCount, setPreCount] = useState(3)
    // useEffect(() => {
    //     let myPreCountInterval = setInterval(() => {
    //         if (preCount > 0) {
    //             setPreCount(preCount - 1)
    //         }
    //         if (preCount === 0) {
    //             clearInterval(myPreCountInterval)
    //         }
    //     }, 1000)
    //     return () => {
    //         clearInterval(myPreCountInterval)
    //     }
    // })

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {/* {
                <h1 style={{ textAlign: "center" }}>{preCount > 0 ? preCount + `...` : null}</h1>
            } */}
            {
                (minutes === 0 && seconds === 0)
                    ? (<Alert variant="danger" className="mt-2" >
                        <Alert.Heading dismissible className={styles.timer}>Oooopsie...</Alert.Heading>
                        <hr />
                        <h6 style={{ textAlign: "center" }} className={styles.timer}>Time's up!</h6>
                    </Alert>)
                    : <span className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faClock} className="mr-2" style={{ fontSize: "30px" }} />
                        <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    </span>
            }
        </div>
    )
}
