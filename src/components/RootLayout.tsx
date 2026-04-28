import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout() {
    return (
    <div className="size-full flex bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto p-6">
                <Outlet />
            </main>
        </div>
    </div>
    )
}