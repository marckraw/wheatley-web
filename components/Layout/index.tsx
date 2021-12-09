import React from 'react'
import styles from './layout.module.scss'
import { Header } from '../Header'
import Link from 'next/link'

const Layout: React.FC = (props) => {
    const { children } = props

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <h1 className="bystro-h3">wheatley</h1>
                    </a>
                </Link>
            </div>
            <Header />
            <aside className={styles.sidebar}>
                <div className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <main className={styles.content}>{children}</main>
        </div>
    )
}

export default Layout
