import {Logo} from "../Logo";
import {Navigation} from "../Navigation";
import type {INavigationItem} from "../Navigation/interfaces";
import styles from "./styles/header.module.scss"

export const Header = () => {
    const items: INavigationItem[] = [
        {
            id: "1",
            text: "Создать пространство",
            onClick: () => {
            }
        },
        {
            id: "2",
            text: "Войти",
            onClick: () => {
            }
        }
    ]

    return (
        <header className={styles.header}>
            <Logo/>
            <Navigation items={items}/>
        </header>
    )
}