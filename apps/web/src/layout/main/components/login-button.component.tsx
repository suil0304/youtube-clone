import type { JSX } from "react/jsx-runtime";
import styles from "./login-button.component.module.scss";
import accountCircle from "../../../assets/icons/account_circle.svg";

// 로그인 X
function LoginButton():JSX.Element {
    return (
        <button type="button" className={styles["login-button"]}>
            <img src={accountCircle} alt="YT Account Circle" />
            로그인
        </button>
    );
}

export default LoginButton;