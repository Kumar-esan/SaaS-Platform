import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Bar, BarChart } from "recharts";

const userGrowthData = [
  { month: "Jan", users: 1200, newUsers: 145 },
  { month: "Feb", users: 1345, newUsers: 178 },
  { month: "Mar", users: 1523, newUsers: 203 },
  { month: "Apr", users: 1726, newUsers: 189 },
  { month: "May", users: 1915, newUsers: 234 },
  { month: "Jun", users: 2149, newUsers: 267 }
];

const planDistribution = [
  { name: "Free", value: 400, color: "#94a3b8" },
  { name: "Basic", value: 300, color: "#3b82f6" },
  { name: "Pro", value: 200, color: "#8b5cf6" },
  { name: "Enterprise", value: 100, color: "#f59e0b" }
];

const engagementData = [
  { feature: "Dashboard", usage: 89 },
  { feature: "Reports", usage: 72 },
  { feature: "API", usage: 65 },
  { feature: "Integrations", usage: 54 },
  { feature: "Analytics", usage: 48 }
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">Analytics</h1>
        <p className="text-slate-600 mt-1">Deep insights into your platform performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounnded-xl border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Total Users</div>
          <div className="text-3xl font-semibold text-slate-900">2,149</div>
          <div className="text-sm text-green-600 mt-2">+267 this month</div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Avg. Session Duration</div>
          <div className="text-3xl font-semibold text-slate-900">12m 34s</div>
          <div className="text-sm text-green-600 mt-2">+8% vs last month</div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="text-sm text-slate-600 mb-2">Active Features</div>
          <div className="text-3xl font-semibold text-slate-900">23/28</div>
          <div className="text-sm text-slate-600 mt-2">82% adoption rate</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData} >
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                name="Total Users" />
              <Line
                type="monotone"
                dataKey="newUsers"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="New Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Plan Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={planDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name = '', percent }: { name?: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                dataKey="value"
              >
                {planDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Feature Engagement</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementData} layout="vertical">
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
            <XAxis type="number" stroke="#64748b" />
            <YAxis dataKey="feature" type="category" stroke="#64748b" />
            <Tooltip />
            <Legend />
            <Bar dataKey="usage" fill="#3b82f6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Analytics;