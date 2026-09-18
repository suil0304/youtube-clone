import type { JSX } from "react/jsx-runtime";
import menu from "../../../assets/icons/menu.svg";
import styles from "./sidebar-button.component.module.scss";

function SidebarButton():JSX.Element {
    return (
        <button className={styles["menu-button"]} type="button">
            <div className={styles["menu-img-box"]}>
                <img className={styles["menu-img"]} src={menu} alt="sidebar button" aria-hidden />
            </div>
        </button>
    );
}

export default SidebarButton;