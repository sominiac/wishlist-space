import LogoImage from '@assets/images/logo.png'
import styles from "./styles/logo.module.scss"

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logo__image} src={LogoImage} alt="logo"/>
            <span className={styles.logo__text}>wishlist</span>
        </div>
    )
}