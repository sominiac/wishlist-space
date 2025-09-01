import {Button} from "../../../../components/Button";
import type {IExampleWish} from "../../../../interfaces/wishes.ts";
import styles from "./styles/cardItem.module.scss";

export const CardItem = ({imageSource, title, description}: IExampleWish) => {
    return <div className={styles.cardItem}>
        <img className={styles.cardItem__image} src={imageSource} alt="Изображение категории пространства"/>
        <div className={styles.info}>
            <span className={styles.info__title}>{title}</span>
            <p className={styles.info__description}>{description}</p>
        </div>
        <Button computedButtonStyle={styles.cardItem__button} text="Посмотреть пример"/>
    </div>
}