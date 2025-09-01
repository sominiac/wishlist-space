import React from 'react';
import clsx from "clsx";
import {EButtonTheme} from "./types";
import styles from './styles/button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    theme?: EButtonTheme;
    computedButtonStyle?: string;
}

export const Button = (props: IButtonProps) => {
    const {text, theme, computedButtonStyle} = props;
    const buttonStyles = theme === EButtonTheme.SECONDARY ? styles.buttonSecondary : styles.buttonPrimary;

    return <button className={clsx(styles.button, buttonStyles, computedButtonStyle)} {...props}>{text}</button>
}