import { create } from "zustand";
import type { Theme } from "../types";

interface SettingsStore {
    readonly theme:Theme;
    readonly setTheme:(theme:Theme) => void;
    readonly toggleTheme:() => void;
}

export const useSettingsStore = create<SettingsStore>()((set) => {
    return {
        theme: "light",
        setTheme(theme) {
            set(() => {
                return {
                    theme
                };
            })
        },
        toggleTheme() {
            set((state) => {
                return {
                    theme: state.theme === "light" ? "dark" : "light"
                }
            })
        },
    };
});