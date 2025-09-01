import type {INavigationItem} from "./interfaces";
import styles from "./styles/navigation.module.scss";

interface INavigationProps {
    items: INavigationItem[]
}

export const Navigation = ({items}: INavigationProps) => {
    return <nav className={styles.navigation}>
        <ol className={styles.list}>
            {items.map(item => (
                <li className={styles.list__item} key={item.id}>{item.text}</li>
            ))}
        </ol>
    </nav>
}