import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, element: <Dashboard /> },
            { }
        ]
    }    
]);

