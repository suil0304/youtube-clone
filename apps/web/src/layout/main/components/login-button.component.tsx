import type { JSX } from "react/jsx-runtime";
import styles from "./login-button.component.module.scss";
import Icon from "../../../components/icon.component";

// 로그인 X
function LoginButton():JSX.Element {
    return (
        <button type="button" className={styles["login-button"]}>
            <Icon
                iconType="account_circle"
                fill="currentColor"
                aria-hidden
            />
            로그인
        </button>
    );
}

export default LoginButton;