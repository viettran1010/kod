import React from 'react'
import styles from './Cell.module.css'

export const Cell = (props) => {
    const colors = ["green", "red", "cyan", "yellow", "purple"];
    const background = colors[props.backgroundId]
    // console.log(background);
    return (
        <div
            className={styles.cell}
            style={{ backgroundColor: `${background}` }}
            onClick={() => { props.swapColor(props.row, props.col) }}
        >
        </div>
    )
}
