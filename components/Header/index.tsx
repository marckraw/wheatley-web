import React from 'react';

import styles from "./header.module.scss";
import {signOut, useSession} from "next-auth/react";
import {Avatar} from "../../images/avatar";
import Link from "next/link";
import {Button} from "../Forms/Button";
import {usei18n} from "../../hooks/usei18n";
import {useRouter} from "next/router";

interface HeaderProps {
    user?: {};
}

export const Header = (props: HeaderProps) => {
    const {locale} = useRouter();
    const t = usei18n(locale as string)
    const {data: session, status}: any = useSession()

    return (
        <header className={styles.header}>
            <div className={styles.loginPanel}>
                Signed in as {session.user.name}
                <Link href="/profile">
                    <a>
                        <Avatar />
                    </a>
                </Link>
                <Button onClick={() => signOut()}>{t("Sign out")}</Button>
            </div>
        </header>
    )
};
