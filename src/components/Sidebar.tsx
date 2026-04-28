import { BarChart3, Building2, CreditCard, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard", end: true },
    { to: "/analytics", icon: BarChart3, label: "Analytics" },
    { to: "/customers", icon: Users, label: "Customers" },
    { to: "/billing", icon: CreditCard, label: "Billing" },
    { to: "/settings", icon: Settings, label: "Settings" },
]

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col">
            <div className="p-6 flex item-center gap-3">
                <Building2 className="size-8" />
            </div>
            <div className="font-semibold">Saas Platform</div>
            <div className="text-xs text-slate-400">Multi-tenant</div>

            <nav className="flex-1 px-3 py-4">
                {navItems.map(({ to, icon: Icon, label, end }: { to: string; icon: React.ComponentType<{ className?: string }>; label: string; end?: boolean }) => (
                    <NavLink key={to} to={to} end={end}
                    className={({ isActive }) => ( `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                        isActive
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`)}
                    >
                        <Icon className={"size-5"} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
                © 2026 Saas Platform.
            </div>
        </aside>
    )
}