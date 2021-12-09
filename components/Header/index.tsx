import React from 'react'

import styles from './header.module.scss'
import { signOut } from 'next-auth/react'
import { Avatar } from '../../images/avatar'
import Link from 'next/link'
import { Button } from '../Forms/Button'

interface HeaderProps {
    user?: {}
}

export const Header = (props: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.loginPanel}>
                Signed in as no iddea who
                <Link href="/profile">
                    <a>
                        <Avatar />
                    </a>
                </Link>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        </header>
    )
}
