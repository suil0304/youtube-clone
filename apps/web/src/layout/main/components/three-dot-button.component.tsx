import type { JSX } from "react/jsx-runtime";
import styles from "./three-dot-button.component.module.scss";
import Icon from "../../../components/icon.component";

// 로그인 X
// 지금은 기능 구현을 하지 않습니다.
function ThreeDotButton():JSX.Element {
    return (
        <button type="button" className={styles["three-dot-button"]}>
            <Icon
                iconType="more_vert"
            />
        </button>
    );
}

export default ThreeDotButton;