import { createBrowserRouter, RouterProvider } from "react-router";
import type { JSX } from "react/jsx-runtime";

function Test():JSX.Element {
    return (
        <>
            Hello, world!
        </>
    );
}

const router = createBrowserRouter([{
    path: "/",
    element: <Test />
}]);

function App():JSX.Element {
    return (
        <RouterProvider router={router} />
    );
}

export default App;