import type { JSX } from "react/jsx-runtime";
import styles from "./header.region.module.scss";
import Logo from "../components/logo.component";
import SidebarButton from "../components/sidebar-button.component";
import SearchBar from "../components/search-bar.component";
import SpeechRecognitionButton from "../components/speech-recognition-button.component";
import ThreeDotButton from "../components/three-dot-button.component";
import LoginButton from "../components/login-button.component";

function Header():JSX.Element {
    return (
        <header className={styles["header"]}>
            <div className={styles["left"]}>
                <SidebarButton />
                <Logo />
            </div>
            
            <div className={styles["center"]}>
                <SearchBar />
                <SpeechRecognitionButton />
            </div>

            <div className={styles["right"]}>
                <ThreeDotButton />
                <LoginButton />
            </div>
        </header>
    );
}

export default Header;