import { FC } from 'react'
import styles from './card.module.scss'

interface TabProps {}

interface CardProps {}

interface CardComponent extends FC<CardProps> {
    Tab: FC<TabProps>
}

const Card: CardComponent = (props) => {
    const { children } = props

    return <div className={styles.card}>{children}</div>
}

const CardTab: FC = (props) => {
    const { children } = props

    return <div className={styles.cardTab}>{children}</div>
}

Card.Tab = CardTab

export { Card }
