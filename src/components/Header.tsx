import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const tenants = [
    { id: 1, name: "Acme Corp", plan: "Enterprise" },
    { id: 2, name: "TechStart Inc", plan: "Pro" },
    { id: 3, name: "Digital Agency", plan: "Business" },
];

export default function Header() {
    const [selectedTenant, setSelectedTenant] = useState(tenants[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="h-16 bg-white border-b border-slate-200 flex item-center justify-between px-6">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg w-80 focus:outline-none focus-ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="relative p-2 hover-bg-slate-100 rounded-lg transition-colors"
                >
                    <div className="text-right">
                        <div className="text-sm font-medium">
                            {selectedTenant.name}
                        </div>
                        <div className="text-xs text-slate-500">
                            {selectedTenant.plan}
                        </div>
                    </div>
                    <ChevronDown className="size-4 text-slate-400" />
                </button>

                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                        {tenants.map((tenant) => (
                            <button
                                key={tenant.id}
                                onClick={() => {
                                    setSelectedTenant(tenant);
                                    setShowDropdown(false);
                                }}
                            >
                                <div className="text-left">
                                    <div className="text-sm  font-medium">
                                        {tenant.name}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {tenant.plan}
                                    </div>
                                </div>
                                {selectedTenant.id === tenant.id && (
                                    <div className="size-2 bg-blue-500 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}