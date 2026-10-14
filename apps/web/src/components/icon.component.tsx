import type { JSX } from "react/jsx-runtime";
import AccountCircle from "../assets/icons/account_circle.svg?react";
import Box from "../assets/icons/box.svg?react";
import Close from "../assets/icons/close.svg?react";
import History from "../assets/icons/history.svg?react";
import Home from "../assets/icons/home.svg?react";
import Keyboard from "../assets/icons/keyboard.svg?react";
import Menu from "../assets/icons/menu.svg?react";
import Mic from "../assets/icons/mic.svg?react";
import MoreVert from "../assets/icons/more_vert.svg?react";
import Notifications from "../assets/icons/notifications.svg?react";
import Search from "../assets/icons/search.svg?react";
import SwipeVertical from "../assets/icons/swipe_vertical.svg?react";

const iconMap = {
    "account_circle": AccountCircle,
    "box": Box,
    "close": Close,
    "history": History,
    "home": Home,
    "keyboard": Keyboard,
    "menu": Menu,
    "mic": Mic,
    "more_vert": MoreVert,
    "notifications": Notifications,
    "search": Search,
    "swipe_vertical": SwipeVertical
} as const;

type IconType = keyof typeof iconMap;

type IconProps = Parameters<typeof AccountCircle>[0] & {
    iconType:IconType;
};

function Icon({ iconType, width=24, height=24, ...props }:IconProps):JSX.Element {
    const _Icon = iconMap[iconType];

    return (
        <_Icon width={width} height={height} {...props} />
    );
}

export default Icon;