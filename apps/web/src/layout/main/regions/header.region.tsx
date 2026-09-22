import type { JSX } from "react/jsx-runtime";
import styles from "./header.region.module.scss";
import Logo from "../components/logo.component";
import SidebarButton from "../components/sidebar-button.component";
import SearchBar from "../components/search-bar.component";

function Header():JSX.Element {
    return (
        <header className={styles["header"]}>
            <div className={styles["left"]}>
                <SidebarButton />
                <Logo />
            </div>
            
            <div className={styles["center"]}>
                <SearchBar />

                {/* 음성 인식 */}
                <button type="button">
                    <img src="" alt="" />
                </button>
            </div>

            <div className={styles["right"]}>
                <button type="button">
                    {/* 점 3개 버튼 */}
                </button>

                <button type="button">
                    {/* 로그인 */}
                    <img src="" alt="" />
                    로그인
                </button>
            </div>
        </header>
    );
}

export default Header;