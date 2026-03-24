import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Bus, Shield, MapPin, Bell, Users, TrendingUp, ChevronRight, Star, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [stats, setStats] = useState({
    buses: 0,
    students: 0,
    schools: 0,
    satisfaction: 0,
  });

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { buses: 500, students: 15000, schools: 250, satisfaction: 98 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        buses: Math.floor(targets.buses * progress),
        students: Math.floor(targets.students * progress),
        schools: Math.floor(targets.schools * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-300">Real-Time Tracking System</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Safe School Transport
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Track your school buses in real-time, ensure student safety, and keep parents informed 
                with our advanced GPS tracking and management platform.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center gap-2 group"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/tracking"
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  View Demo
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-[#0a0a0f] flex items-center justify-center text-xs font-semibold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">Trusted by 250+ schools worldwide</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative glass rounded-2xl p-8 border border-white/10">
                {/* Mock Dashboard Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Live Bus Tracking</h3>
                    <span className="flex items-center gap-2 text-sm text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      12 Active
                    </span>
                  </div>
                  
                  {/* Mock Map */}
                  <div className="h-64 bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.05) 21px),
                                       repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.05) 21px)`
                    }} />
                    
                    {/* Animated Bus Icons */}
                    {[
                      { top: '20%', left: '30%', delay: 0 },
                      { top: '60%', left: '60%', delay: 0.5 },
                      { top: '40%', left: '80%', delay: 1 },
                    ].map((pos, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: pos.delay, duration: 0.3 }}
                        className="absolute w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                        style={{ top: pos.top, left: pos.left }}
                      >
                        <Bus className="w-4 h-4 text-white" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'On Time', value: '98%', color: 'green' },
                      { label: 'Active', value: '12', color: 'blue' },
                      { label: 'Students', value: '450', color: 'purple' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                        <div className={`text-xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Active Buses', value: stats.buses, suffix: '+', icon: Bus },
              { label: 'Students Tracked', value: stats.students.toLocaleString(), suffix: '+', icon: Users },
              { label: 'Partner Schools', value: stats.schools, suffix: '+', icon: MapPin },
              { label: 'Satisfaction Rate', value: stats.satisfaction, suffix: '%', icon: Star },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BusTracker Pro</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive features designed for modern school transportation management
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Real-Time GPS Tracking',
                description: 'Monitor all your buses in real-time with precise GPS coordinates and route visualization.',
              },
              {
                icon: Bell,
                title: 'Instant Notifications',
                description: 'Get instant alerts for pickups, drop-offs, delays, and emergencies via SMS and push notifications.',
              },
              {
                icon: Shield,
                title: 'Enhanced Safety',
                description: 'Ensure student safety with geofencing, speed monitoring, and emergency alert systems.',
              },
              {
                icon: Users,
                title: 'Parent Portal',
                description: 'Parents can track their children\'s bus location and receive real-time updates on their phones.',
              },
              {
                icon: TrendingUp,
                title: 'Analytics & Reports',
                description: 'Generate comprehensive reports on routes, attendance, delays, and operational efficiency.',
              },
              {
                icon: Bus,
                title: 'Fleet Management',
                description: 'Manage drivers, buses, routes, and schedules all from one powerful dashboard.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all group"
            >
              Explore All Features
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your School Transportation?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join 250+ schools already using BusTracker Pro
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                >
                  Start Free 30-Day Trial
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
