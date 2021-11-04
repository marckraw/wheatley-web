import React, {ReactChildren, useContext} from 'react';

import styles from './button.module.scss'
import {TestContext, TestContextInterface} from "../../contexts/TestContext";

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    children: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
    const {
        backgroundColor,
        children,
        ...rest
    } = props;


    return (
        <button
            type="button"
            className={styles.storybookButton}
            style={{ backgroundColor }}
            {...rest}
        >
            {children}
        </button>
    );
};
