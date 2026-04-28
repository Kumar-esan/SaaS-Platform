import { Activity, ArrowDownRight, ArrowUpRight, DollarSign, TrendingUp, User } from "lucide-react";

const metrics = [
    {
        label: "Total Revenue",
        value: "$45,231",
        change: "+20.1%",
        trend: "up",
        icon: DollarSign,
        color: "bg-green-500",
    },
    {
        label: "Active Users",
        value: "3,345",
        change: "+12.5%",
        trend: "up",
        icon: User,
        color: "bg-blue-500",
    },
    {
        label: "Conversion Rate",
        value: "3.24%",
        change: "-2.4%",
        trend: "down",
        icon: TrendingUp,
        color: "bg-purple-500",
    },
    {
        label: "Uptime",
        value: "99.9%",
        change: "+0.1%",
        trend: "up",
        icon: Activity,
        color: "bg-orange-500",
    }
];

export default function Dashboard() {
    return (
    <div className="space-y-6">
        <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1" > Welcome back! Here's what's happening with you platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
                <div key={metric.label} className="bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounder-lg ${metric.color} bg-opacity-10`}>
                            <metric.icon className={`size-6 ${metric.color.replace('bg-','text-')}`}/>
                        </div>
                        <div className={`flex items-center gap-1 text-sm ${
                            metric.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}>
                            {metric.trend === "up" ? (
                                <ArrowUpRight className="size-4"/>
                            ) : (
                                <ArrowDownRight className="size-4"/>
                            )}
                            <span>{metric.change}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        
    </div>
    )
}