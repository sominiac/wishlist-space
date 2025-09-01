import {CardItem} from "../CardItem";
import BirthdayImage from "@assets/images/birthday.jpg"
import FamilyImage from "@assets/images/family.jpg"
import GadgetsImage from "@assets/images/gadgets.jpg"
import NewHomeImage from "@assets/images/newhome.jpg"
import TipsImage from "@assets/images/tips.jpg"
import GardenImage from "@assets/images/garden.jpg"
import type {IExampleWish} from "../../../../interfaces/wishes.ts";
import styles from "./styles/examples.module.scss"

export const Examples = () => {
    const items: IExampleWish[] = [
        {
            title: "Комната желаний на день рождения",
            description: "Персонализированный список желаний для идеального празднования дня рождения.",
            imageSource: BirthdayImage,
        },
        {
            title: "Праздничные подарки для семьи",
            description: "Совместный список для координации подарков на предстоящие праздники.",
            imageSource: FamilyImage,
        },
        {
            title: "Список желаний для нового дома",
            description: "Помогите обустроить новый дом, добавив нужные вещи.",
            imageSource: NewHomeImage,
        },
        {
            title: "Мечты о путешествиях",
            description: "Составьте список желаемых мест и вещей для незабываемого приключения.",
            imageSource: TipsImage,
        },
        {
            title: "Технологические гаджеты",
            description: "Будьте в курсе последних технологий с вашим личным списком желаний.",
            imageSource: GadgetsImage,
        },
        {
            title: "Садовые принадлежности",
            description: "Подарите радость садоводства с этим специальным списком.",
            imageSource: GardenImage,
        }];

    return <section className={styles.examples}>
        <h2 className={styles.examples__title}>Посмотрите, как это работает!</h2>
        <div className={styles.examples__cards}>
            {items.map(item => (
                <CardItem {...item}/>
            ))}
        </div>
    </section>
}