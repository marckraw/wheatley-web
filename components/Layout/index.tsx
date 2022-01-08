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
                        <li>&nbsp;</li>
                        <li>
                            <Link href="bear://">
                                <a>Bear</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="discord://">
                                <a>Discord</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="slack://">
                                <a>Slack</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="notes://">
                                <a>Notes</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="ical://">
                                <a>Calendar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="todoist://">
                                <a>Todoist</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="things://">
                                <a>Things</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="webstorm://">
                                <a>Webstorm</a>
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
