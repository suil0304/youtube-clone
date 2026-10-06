import type { JSX } from "react/jsx-runtime";
import styles from "./three-dot-button.module.scss";
import moreVert from "../../../assets/icons/more_vert.svg";

// 로그인 X
// 지금은 기능 구현을 하지 않습니다.
function ThreeDotButton():JSX.Element {
    return (
        <button type="button" className={styles["three-dot-button"]}>
            <img src={moreVert} alt="" />
        </button>
    );
}

export default ThreeDotButton;