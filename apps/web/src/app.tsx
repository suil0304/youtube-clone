import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import type { JSX } from "react/jsx-runtime";
import type { Theme } from "./types";
import "./app.scss";
import MainLayout from "./layout/main/main.layout";
import { useSettingsStore } from "./stores/settings.store";

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />
}]);

function App():JSX.Element {
    useApp();

    return (
        <RouterProvider router={router} />
    );
}

function useApp() {
    const [theme, _] = useState<Theme>(() => {
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return darkMode ? "dark" : "light";
    });
    const setTheme = useSettingsStore((selector) => selector.setTheme);

    useEffect(() => {
        setTheme(theme);
        document.documentElement.dataset["theme"] = theme;
    }, [theme]);
}

export default App;