import { FC, MouseEventHandler } from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    small?: true
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, onClick, small } = props
    const className = classNames(styles.btn, small && styles.smallBtn)

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

interface SubmitButtonProps {
    small?: true
    value: string
}

export const SubmitButton: FC<SubmitButtonProps> = (props) => {
    const { value, small } = props
    const className = classNames(styles.btn, small && styles.smallBtn)

    return <input type="submit" className={className} value={value} />
}
