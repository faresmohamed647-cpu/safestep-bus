import { motion } from 'motion/react';
import { Bus, Users, MapPin, TrendingUp, AlertCircle, CheckCircle, Clock, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalBuses: 12,
    activeBuses: 10,
    totalStudents: 450,
    onTimeRate: 98,
  });

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-gray-400">Overview of your school transportation system</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Total Buses',
              value: stats.totalBuses,
              change: '+2 this month',
              icon: Bus,
              color: 'blue',
              trend: 'up',
            },
            {
              label: 'Active Now',
              value: stats.activeBuses,
              change: 'Live tracking',
              icon: Activity,
              color: 'green',
              trend: 'neutral',
            },
            {
              label: 'Total Students',
              value: stats.totalStudents,
              change: '+15 this week',
              icon: Users,
              color: 'purple',
              trend: 'up',
            },
            {
              label: 'On-Time Rate',
              value: `${stats.onTimeRate}%`,
              change: '+3% vs last month',
              icon: CheckCircle,
              color: 'yellow',
              trend: 'up',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-${stat.color}-600/20 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                {stat.trend === 'up' && (
                  <span className="text-xs text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                {
                  type: 'success',
                  title: 'Bus 7 completed route',
                  description: 'Route B completed successfully',
                  time: '2 min ago',
                },
                {
                  type: 'info',
                  title: 'New student added',
                  description: 'Emma Wilson assigned to Bus 3',
                  time: '15 min ago',
                },
                {
                  type: 'warning',
                  title: 'Minor delay on Route C',
                  description: 'Traffic congestion - ETA +5 minutes',
                  time: '23 min ago',
                },
                {
                  type: 'success',
                  title: 'Maintenance completed',
                  description: 'Bus 5 ready for operation',
                  time: '1 hour ago',
                },
                {
                  type: 'info',
                  title: 'Driver check-in',
                  description: 'John Smith started shift',
                  time: '2 hours ago',
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'success'
                        ? 'bg-green-600/20'
                        : activity.type === 'warning'
                        ? 'bg-yellow-600/20'
                        : 'bg-blue-600/20'
                    }`}
                  >
                    {activity.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : activity.type === 'warning' ? (
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Activity className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{activity.title}</div>
                    <div className="text-sm text-gray-400">{activity.description}</div>
                  </div>
                  <div className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { label: 'Add New Bus', icon: Bus, color: 'blue', link: '/dashboard' },
                { label: 'Add Student', icon: Users, color: 'purple', link: '/students' },
                { label: 'View Routes', icon: MapPin, color: 'green', link: '/tracking' },
                { label: 'Generate Report', icon: Activity, color: 'yellow', link: '/dashboard' },
              ].map((action, i) => (
                <a
                  key={i}
                  href={action.link}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className={`w-10 h-10 bg-${action.color}-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon className={`w-5 h-5 text-${action.color}-400`} />
                  </div>
                  <span className="font-medium">{action.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-sm font-semibold mb-3">System Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">GPS Connection</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Server Status</span>
                  <span className="flex items-center gap-2 text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Update</span>
                  <span className="text-gray-400">2 seconds ago</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Routes Overview */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Active Routes Today</h2>
            <div className="space-y-3">
              {[
                { route: 'Route A', bus: 'Bus 1', students: 28, status: 'On Time', progress: 75 },
                { route: 'Route B', bus: 'Bus 2', students: 32, status: 'On Time', progress: 60 },
                { route: 'Route C', bus: 'Bus 3', students: 25, status: 'Delayed', progress: 45 },
                { route: 'Route D', bus: 'Bus 4', students: 30, status: 'On Time', progress: 90 },
              ].map((route, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold">{route.route}</div>
                      <div className="text-sm text-gray-400">
                        {route.bus} • {route.students} students
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        route.status === 'On Time'
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-yellow-600/20 text-yellow-400'
                      }`}
                    >
                      {route.status}
                    </span>
                  </div>
                  <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${route.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{route.progress}% Complete</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Alerts & Notifications</h2>
            <div className="space-y-3">
              {[
                {
                  type: 'warning',
                  title: 'Maintenance Due',
                  description: 'Bus 8 requires service in 3 days',
                  time: 'Today',
                },
                {
                  type: 'info',
                  title: 'New Route Request',
                  description: 'Parent requested pickup point change',
                  time: 'Today',
                },
                {
                  type: 'success',
                  title: 'Report Generated',
                  description: 'Monthly performance report is ready',
                  time: 'Yesterday',
                },
              ].map((alert, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      alert.type === 'warning'
                        ? 'bg-yellow-600/20'
                        : alert.type === 'success'
                        ? 'bg-green-600/20'
                        : 'bg-blue-600/20'
                    }`}
                  >
                    <AlertCircle
                      className={`w-4 h-4 ${
                        alert.type === 'warning'
                          ? 'text-yellow-400'
                          : alert.type === 'success'
                          ? 'text-green-400'
                          : 'text-blue-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-1">{alert.title}</div>
                    <div className="text-xs text-gray-400 mb-2">{alert.description}</div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
