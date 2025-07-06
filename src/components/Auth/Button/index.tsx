import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

const AuthButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {

    return <button {...props} className={styles.formButton}>
        {props.children}
    </button>
}

export default AuthButton;