import type { JSX } from "react/jsx-runtime";
import styles from "./header.region.module.scss";
import Logo from "../components/logo.component";
import SidebarButton from "../components/sidebar-button.component";

function Header():JSX.Element {
    return (
        <header className={styles["header"]}>
            <div className={styles["left"]}>
                <SidebarButton />
                <Logo />
            </div>
            
            <div className={styles["center"]}>
                <form>
                    <div>
                        <div>
                            {/* search */}
                            <img src="" alt="" /> {/** 기본 숨김 */}
                            <input type="text" />
                            <div>
                                <button type="button">
                                    {/* 키보드 표시 */}
                                    <img src="" alt="" />
                                </button>
                                <button type="button"> {/** 기본 숨김 */}
                                    {/* 현재 입력 검색어 삭제 */}
                                    <img src="" alt="" />
                                </button>
                            </div>
                        </div>
                    
                        <button type="submit">
                            {/* 검색 버튼 */}
                            <img src="" alt="" />
                        </button>
                    </div>
                </form>

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