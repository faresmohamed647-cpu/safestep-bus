import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Bell, Clock, User, Bus, CheckCircle, Navigation, Phone } from 'lucide-react';

export default function ParentsPortal() {
  const [child] = useState({
    name: 'Emma Wilson',
    grade: 'Grade 5',
    bus: 'Bus 1',
    route: 'Route A',
    driver: 'John Smith',
    driverPhone: '+1 (555) 123-4567',
    status: 'On Bus',
    currentLocation: 'Main Street & 5th Avenue',
    eta: '8 minutes',
    lastStop: 'School Campus',
    nextStop: 'Oak Street',
    pickupTime: '7:30 AM',
    dropoffTime: '3:45 PM',
  });

  const [todayTrips] = useState([
    {
      type: 'Morning Pickup',
      time: '7:32 AM',
      status: 'Completed',
      location: 'Home - 123 Oak Street',
    },
    {
      type: 'School Arrival',
      time: '8:05 AM',
      status: 'Completed',
      location: 'Central School Campus',
    },
    {
      type: 'Afternoon Pickup',
      time: '3:45 PM',
      status: 'Scheduled',
      location: 'Central School Campus',
    },
    {
      type: 'Home Arrival',
      time: '4:18 PM',
      status: 'Scheduled',
      location: 'Home - 123 Oak Street',
    },
  ]);

  const [notifications] = useState([
    {
      title: 'Bus Arriving Soon',
      message: 'Bus 1 will arrive at your stop in 8 minutes',
      time: 'Just now',
      type: 'info',
    },
    {
      title: 'Child Checked In',
      message: 'Emma was checked in at school at 8:05 AM',
      time: '2 hours ago',
      type: 'success',
    },
    {
      title: 'Route Update',
      message: 'Minor delay due to traffic - ETA updated',
      time: 'Yesterday',
      type: 'warning',
    },
  ]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Parents <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portal</span>
              </h1>
              <p className="text-gray-400">Track your child's bus journey in real-time</p>
            </div>
            <button className="px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-lg font-semibold hover:bg-blue-600/30 transition-all flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Child Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                {child.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{child.name}</h3>
                <p className="text-gray-400">{child.grade}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Bus className="w-4 h-4" />
                  <span>Bus</span>
                </div>
                <span className="font-semibold">{child.bus}</span>
              </div>

              <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Navigation className="w-4 h-4" />
                  <span>Route</span>
                </div>
                <span className="font-semibold">{child.route}</span>
              </div>

              <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  <span>Driver</span>
                </div>
                <span className="font-semibold">{child.driver}</span>
              </div>

              <div className="p-3 bg-white/5 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </div>
                <a href={`tel:${child.driverPhone}`} className="font-semibold text-blue-400 hover:text-blue-300">
                  Call
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Pickup Time</span>
                <span className="font-semibold text-green-400">{child.pickupTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Dropoff Time</span>
                <span className="font-semibold text-orange-400">{child.dropoffTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Live Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Live Status</h3>
              <span className="flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live
              </span>
            </div>

            <div className="mb-6 p-4 bg-blue-600/10 border border-blue-500/30 rounded-xl">
              <div className="text-sm text-gray-400 mb-2">Current Status</div>
              <div className="text-2xl font-bold mb-3">{child.status}</div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{child.currentLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold text-blue-400">
                <Clock className="w-5 h-5" />
                <span>ETA: {child.eta}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="text-xs text-gray-400 mb-1">Last Stop</div>
                <div className="font-medium">{child.lastStop}</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="text-xs text-gray-400 mb-1">Next Stop</div>
                <div className="font-medium">{child.nextStop}</div>
              </div>
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Track on Map
            </button>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Recent Notifications</h3>
            <div className="space-y-3">
              {notifications.map((notif, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notif.type === 'success'
                          ? 'bg-green-600/20'
                          : notif.type === 'warning'
                          ? 'bg-yellow-600/20'
                          : 'bg-blue-600/20'
                      }`}
                    >
                      <Bell
                        className={`w-4 h-4 ${
                          notif.type === 'success'
                            ? 'text-green-400'
                            : notif.type === 'warning'
                            ? 'text-yellow-400'
                            : 'text-blue-400'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">{notif.title}</div>
                      <div className="text-xs text-gray-400 mb-2">{notif.message}</div>
                      <div className="text-xs text-gray-500">{notif.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Today's Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6">Today's Schedule</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {todayTrips.map((trip, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border-2 ${
                  trip.status === 'Completed'
                    ? 'bg-green-600/10 border-green-500/30'
                    : 'bg-blue-600/10 border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {trip.status === 'Completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-blue-400" />
                  )}
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      trip.status === 'Completed'
                        ? 'bg-green-600/20 text-green-400'
                        : 'bg-blue-600/20 text-blue-400'
                    }`}
                  >
                    {trip.status}
                  </span>
                </div>
                <div className="font-semibold mb-1">{trip.type}</div>
                <div className="text-2xl font-bold mb-2">{trip.time}</div>
                <div className="text-sm text-gray-400 flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{trip.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
