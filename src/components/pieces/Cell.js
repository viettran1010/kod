import React from 'react'
import styles from './Cell.module.css'

export const Cell = (props) => {
    const colors = ["green", "red", "cyan", "yellow", "purple"];
    const background = colors[props.backgroundId]
    return (
        <div
            className={styles.cell}
            style={{ backgroundColor: `${background}`,
            transition: "all .1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease"}}
            onClick={() => { props.swapColor(props.row, props.col) }}>
        </div>
    )
}
