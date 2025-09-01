import WelcomeImage from "@assets/images/welcome.png";
import {Button} from "../../../../components/Button";
import {EButtonTheme} from "../../../../components/Button/types";
import styles from './styles/greetings.module.scss'

export const Greetings = () => {
    return <section className={styles.greetingsSection}>
        <div className={styles.info}>
            <h1 className={styles.greetingsSection__title}>Ваше пространство для желаний и подарков</h1>
            <p className={styles.greetingsSection__description}>Wishlist Space упрощает создание и управление списками
                желаний для любых случаев. Делитесь ими с друзьями и легко отмечайте выбранные подарки.</p>
            <div className={styles.info__buttons}>
                <Button text="Создать пространство"/>
                <Button text="Войти" theme={EButtonTheme.SECONDARY}/>
            </div>
        </div>
        <div className={styles.greetingsSection__imageWrapper}>
            <img className={styles.greetingsSection__image} src={WelcomeImage} alt="welcome image"></img>
        </div>
    </section>
}