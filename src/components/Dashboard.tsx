import { Activity, ArrowDownRight, ArrowUpRight, DollarSign, TrendingUp, User } from "lucide-react";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart } from "recharts";

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

const revenueData = [
    { month: "Jan", revenue: 4000, users: 240 },
    { month: "Feb", revenue: 3000, users: 198 },
    { month: "Mar", revenue: 5000, users: 320 },
    { month: "Apr", revenue: 4500, users: 298 },
    { month: "May", revenue: 6000, users: 408 },
    { month: "Jun", revenue: 5500, users: 382 },
];

const activityData = [
    { day: "Mon", events: 120 },
    { day: "Tue", events: 150 },
    { day: "Wed", events: 180 },
    { day: "Thu", events: 140 },
    { day: "Fri", events: 200 },
    { day: "Sat", events: 90 },
    { day: "Sun", events: 70 },
];

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-slate-600 mt-1" > Welcome back! Here's what's happening with you platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounder-lg ${metric.color} bg-opacity-10`}>
                                <metric.icon className={`size-6 ${metric.color.replace('bg-', 'text-')}`} />
                            </div>
                            <div className={`flex items-center gap-1 text-sm ${metric.trend === "up" ? "text-green-600" : "text-red-600"
                                }`}>
                                {metric.trend === "up" ? (
                                    <ArrowUpRight className="size-4" />
                                ) : (
                                    <ArrowDownRight className="size-4" />
                                )}
                                <span>{metric.change}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Revenue & Users</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="month" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#3b82f6"
                                fill="#3b82f6"
                                fillOpacity={0.2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Weekly Activity</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="day" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip />
                        <Bar dataKey="events" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                </div>
                <div className="divide-y divide-slate-200">
                    {[
                        { user: "John Smith", action: "upgraded to pro plan", time: "2 minutes ago" },
                        { user: "Sarah Johnson", action: "created new workspace", time: "15 minutes ago" },
                        { user: "Mike Wilson", action: "invited 5 team members", time: "1 hour ago" },
                        { user: "Emily Davis", action: "completed onboarding", time: "2 hours ago" },
                        { user: "Alex Brown", action: "exported monthly report", time: "3 hours ago" },
                    ].map((activity, index) => (
                        <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                                        {activity.user.split(" ").map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <span className="font-medium text-slate-900">{activity.user}</span>
                                    <span className="font-medium text-slate-600">{activity.user}</span>
                                </div>
                                <div className="text-xs text-slate-500 mt-1">{activity.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}