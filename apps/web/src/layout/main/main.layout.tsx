import { Outlet } from "react-router";
import type { JSX } from "react/jsx-runtime";
import Header from "./regions/header.region";
import Sidebar from "./regions/sidebar.region";

function MainLayout():JSX.Element {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default MainLayout;