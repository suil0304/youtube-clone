import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./logo.component.module.scss";
import { useSettingsStore } from "../../../stores/settings.store";

interface LogoProps {
    readonly to?:Parameters<typeof Link>[0]["to"];
}

function Logo({ to = "/" }:LogoProps):JSX.Element {
    const {
        logoPath
    } = useLogo();

    return (
        <Link to={to} className={styles["link"]}>
            <div className={styles["logo-box"]}>
                <img className={styles["logo-img"]} src={logoPath} alt="YT Logo" />
                {/* 클론 코딩 -> KR로 고정합니다. */}
                <span className={styles["logo-country"]}>KR</span>
            </div>
        </Link>
    )
}

function useLogo() {
    const theme = useSettingsStore((selector) => selector.theme);
    const logoPath = `/logo-${theme}.png`;

    return {
        logoPath
    };
}

export default Logo;