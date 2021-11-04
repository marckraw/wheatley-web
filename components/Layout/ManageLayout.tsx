import React from "react";
import {usei18n} from "../../hooks/usei18n";
import { useRouter } from "next/router";
import {TabNavigation} from "../TabNavigation";
import styles from './manageLayout.module.scss';

const navItems = [
    {
        name: 'Overview',
        href: '/manage/overview',
    },
    {
        name: 'Categories',
        href: '/manage/categories',
    },
    {
        name: 'Items',
        href: '/manage/items',
    },
    {
        name: 'Menus',
        href: '/manage/menus',
    },
    {
        name: 'All',
        href: '/manage/all',
    },
]

const Layout: React.FC = (props) => {
    const { locale } = useRouter();
    const t = usei18n(locale || 'pl-PL')
    const {children} = props;

    return (
        <div className={styles.container}>
            <TabNavigation items={navItems} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout