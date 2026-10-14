import type { JSX } from "react/jsx-runtime";
import styles from "./sidebar-button.component.module.scss";
import Icon from "../../../components/icon.component";

function SidebarButton():JSX.Element {
    return (
        <button className={styles["menu-button"]} type="button">
            <Icon
                className={styles["menu-icon"]}
                iconType="menu"
                aria-hidden
            />
        </button>
    );
}

export default SidebarButton;