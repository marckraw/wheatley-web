import {FC} from "react";
import Link from "next/link"
import styles from './tabNavigation.module.scss'
import {useRouter} from "next/router";


interface TabNavigationItemProps {
    href: string,
    name: string
}

interface TabNavigationProps {
    items: TabNavigationItemProps[]
}


export const TabNavigation: FC<TabNavigationProps> = (props) => {
    const {route} = useRouter()
    const {items} = props;

    return (
        <nav className={styles.tabNav}>
            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.href}>
                                <Link href={item.href}>
                                    <a className={route === item.href ? 'active' : ''}>
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}