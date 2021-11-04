import React, {useContext} from 'react'
import classNames from "classnames";

import styles from './styles.module.scss'
import {TestContext} from "../../contexts/TestContext";


export interface SimpleButtonProps {
    children: string;
    primary: boolean;
    onClick: () => void
}

const SimpleButton = (props: SimpleButtonProps) => {
    const {children, primary, onClick} = props
    const data = useContext(TestContext)
    const classes = classNames(primary ? styles.primary : styles.secondary)

    return (
        <button
            className={classes}
            onClick={onClick}
            style={{backgroundColor: data?.color}}
        >
            {children}
        </button>
    )
}

export { SimpleButton }