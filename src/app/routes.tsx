import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Customers from "./components/Customers";
import Settings from "./components/Settings";
import Billing from "./components/Billing";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Dashboard },
            { path: "analytics", Component: Analytics },
            { path: "customers", Component: Customers },
            { path: "billing", Component: Billing },
            { path: "settings", Component: Settings }
        ]
    }    
]);

