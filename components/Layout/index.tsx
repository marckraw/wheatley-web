import React from "react";
import styles from './layout.module.scss'
import {Header} from "../Header";
import Link from "next/link";
import {usei18n} from "../../hooks/usei18n";
import { useRouter } from "next/router";
import {ManageMenuActive} from "../../icons/manage-menu--active";

const Layout: React.FC = (props) => {
    const { locale } = useRouter();
    const t = usei18n(locale || 'pl-PL')
    const {children} = props;

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <h1 className="bystro-h3">Bystro</h1>
                    </a>
                </Link>
            </div>
            <Header/>
            <aside className={styles.sidebar}>
                <div className={styles.navigation}>
                    <ul>
                        <li>
                            <Link href="/manage/overview">
                                <a>
                                    <ManageMenuActive /> {t("Manage menu")}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <main className={styles.content}>
                {
                    children
                }
            </main>
        </div>
    )
}

export default Layout