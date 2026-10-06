import type { JSX } from "react/jsx-runtime";
import styles from "./speech-recognition-button.module.scss";
import mic from "../../../assets/icons/mic.svg";

// 지금은 기능 구현을 하지 않습니다.
function SpeechRecognitionButton():JSX.Element {
    return (
        <button type="button" className={styles["speech-recognition-button"]}>
            <img src={mic} alt="" />
        </button>
    );
}

export default SpeechRecognitionButton;