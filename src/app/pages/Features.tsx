import { motion } from 'motion/react';
import { MapPin, Bell, Shield, Users, BarChart3, Clock, Smartphone, FileText, Lock, Zap, Globe, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Real-Time GPS Tracking',
      description: 'Track all buses with pinpoint accuracy using advanced GPS technology.',
      features: [
        'Live location updates every 10 seconds',
        'Historical route playback',
        'Multiple bus monitoring',
        'Geofence alerts',
      ],
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated alerts keep everyone informed at the right time.',
      features: [
        'Pick-up and drop-off notifications',
        'Delay and route change alerts',
        'Emergency notifications',
        'Custom alert preferences',
      ],
    },
    {
      icon: Shield,
      title: 'Advanced Safety Features',
      description: 'Comprehensive safety tools to protect students during transit.',
      features: [
        'Speed limit monitoring',
        'SOS emergency button',
        'Driver behavior tracking',
        'Attendance verification',
      ],
    },
    {
      icon: Users,
      title: 'Parent Portal',
      description: 'Mobile-friendly portal for parents to stay connected.',
      features: [
        'Real-time bus location',
        'ETA calculations',
        'Student boarding confirmation',
        'Direct messaging with drivers',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights to optimize your transportation operations.',
      features: [
        'Fuel consumption analysis',
        'Route optimization suggestions',
        'Driver performance reports',
        'Attendance statistics',
      ],
    },
    {
      icon: Clock,
      title: 'Route Management',
      description: 'Efficient tools to plan and manage all your bus routes.',
      features: [
        'Drag-and-drop route builder',
        'Multi-stop optimization',
        'Schedule management',
        'Route duplication',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native apps for iOS and Android with full functionality.',
      features: [
        'Parents mobile app',
        'Drivers mobile app',
        'Admin mobile dashboard',
        'Offline mode support',
      ],
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Centralized system for all transportation-related documents.',
      features: [
        'Driver license tracking',
        'Vehicle insurance records',
        'Maintenance schedules',
        'Student permissions',
      ],
    },
    {
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security to protect sensitive data.',
      features: [
        'End-to-end encryption',
        'Role-based access control',
        'GDPR compliant',
        'Regular security audits',
      ],
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Save time with intelligent automation features.',
      features: [
        'Auto-attendance marking',
        'Scheduled reports',
        'Smart route suggestions',
        'Maintenance reminders',
      ],
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in multiple languages for diverse communities.',
      features: [
        '15+ languages supported',
        'RTL text support',
        'Localized date/time formats',
        'Regional customization',
      ],
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need it.',
      features: [
        'Live chat support',
        'Phone support',
        'Email ticketing system',
        'Comprehensive documentation',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Powerful Features</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need,{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                All In One Place
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover the comprehensive features that make BusTracker Pro the leading 
              school bus tracking solution trusted by hundreds of institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Our Features Stand Out</h2>
            <p className="text-xl text-gray-400">Built with real-world needs in mind</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Easy to Use',
                description: 'Intuitive interface designed for users of all technical levels. Get started in minutes, not days.',
                stats: '< 5 min setup',
              },
              {
                title: 'Highly Reliable',
                description: '99.9% uptime guarantee with redundant systems and automatic failover protection.',
                stats: '99.9% uptime',
              },
              {
                title: 'Scalable Solution',
                description: 'Grows with your needs. From 1 bus to 1000+, our platform handles it all effortlessly.',
                stats: '1-1000+ buses',
              },
            ].map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {highlight.stats}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Connect with your existing systems and tools. Our API and integrations 
              make it easy to sync data across platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Student Information Systems', 'Payment Gateways', 'SMS Providers', 'Email Services', 'Accounting Software', 'Custom APIs'].map((integration, i) => (
                <div
                  key={i}
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-medium"
                >
                  {integration}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Start your free 30-day trial today. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
              >
                Start Free Trial
              </a>
              <a
                href="/tracking"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
