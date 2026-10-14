import type { JSX } from "react/jsx-runtime";
import styles from "./speech-recognition-button.component.module.scss";
import Icon from "../../../components/icon.component";

// 지금은 기능 구현을 하지 않습니다.
function SpeechRecognitionButton():JSX.Element {
    return (
        <button type="button" className={styles["speech-recognition-button"]}>
            <Icon
                iconType="mic"
            />
        </button>
    );
}

export default SpeechRecognitionButton;