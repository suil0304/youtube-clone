import type { JSX } from "react/jsx-runtime";
import styles from "./sidebar-item.component.module.scss";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import Icon from "../../../components/icon.component";

type CorrectLink = `/${string}`;

interface SidebarItemProps {
    readonly href:CorrectLink;
    readonly iconType:Parameters<typeof Icon>[0]["iconType"];
    readonly text:string;
}
function SidebarItem(props:SidebarItemProps):JSX.Element {
    const {
        active
    } = useSidebarItem(props.href);

    return (
        <Link
            to={props.href}
            className={styles["a-wrapper"]}
        >
            <div className={styles["sidebar-item"]} data-active={active ? true : undefined}>
                <Icon
                    iconType={props.iconType}
                />
                {props.text}
            </div>
        </Link>
    );
}

function useSidebarItem(itemHref:CorrectLink) {
    const location = useLocation();

    const [active, setActive] = useState<boolean>(_isActive(location.pathname, itemHref));

    

    return {
        active
    };
}

function _isActive(curPath:string, itemHref:CorrectLink):boolean {
    return curPath == itemHref;
}

export default SidebarItem;