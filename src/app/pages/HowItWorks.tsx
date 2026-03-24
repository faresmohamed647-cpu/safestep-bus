import { motion } from 'motion/react';
import { UserPlus, MapPin, Bell, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Setup',
      description: 'Create your account and add your school information, buses, routes, and drivers in minutes.',
      icon: UserPlus,
      details: [
        'Quick registration process',
        'Import existing data via CSV',
        'Intuitive setup wizard',
        'Guided onboarding',
      ],
    },
    {
      number: '02',
      title: 'Install GPS Devices',
      description: 'Install our GPS tracking devices in your buses. We provide full installation support.',
      icon: MapPin,
      details: [
        'Plug-and-play GPS devices',
        'Professional installation available',
        'Real-time connectivity test',
        'Backup power included',
      ],
    },
    {
      number: '03',
      title: 'Configure & Customize',
      description: 'Set up routes, schedules, geofences, and notification preferences for your specific needs.',
      icon: Bell,
      details: [
        'Drag-and-drop route builder',
        'Custom notification rules',
        'Geofence setup',
        'Schedule automation',
      ],
    },
    {
      number: '04',
      title: 'Go Live & Monitor',
      description: 'Start tracking your buses in real-time. Monitor all operations from your dashboard.',
      icon: CheckCircle,
      details: [
        'Real-time bus tracking',
        'Live notifications',
        'Parent app access',
        '24/7 monitoring',
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              How{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BusTracker Pro
              </span>
              {' '}Works
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Get up and running in 4 simple steps. From setup to live tracking in less than a day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative">
                      <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-lg mb-6">{step.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Implementation Timeline</h2>
            <p className="text-xl text-gray-400">From start to finish</p>
          </motion.div>

          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { day: 'Day 1', task: 'Account Setup & Training' },
                { day: 'Day 2-3', task: 'GPS Installation' },
                { day: 'Day 4-5', task: 'Route Configuration' },
                { day: 'Day 6+', task: 'Live Operation' },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-blue-400 font-semibold mb-2">{phase.day}</div>
                  <div className="text-gray-400 text-sm">{phase.task}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Flow */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">System Flow</h2>
            <p className="text-xl text-gray-400">How the data flows through the system</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'GPS Device',
                description: 'Installed in bus, sends real-time location data every 10 seconds',
                color: 'blue',
              },
              {
                title: 'Cloud Platform',
                description: 'Processes data, applies rules, sends notifications, stores history',
                color: 'purple',
              },
              {
                title: 'User Devices',
                description: 'Parents, drivers, and admins access data via web and mobile apps',
                color: 'green',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center relative"
              >
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br from-${item.color}-600/20 to-${item.color}-600/20 rounded-xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl font-bold">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>

                {i < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Check our FAQ page or contact our team for personalized guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/faq"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View FAQ
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
              >
                Contact Support
              </a>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of schools already using BusTracker Pro
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Start Free Trial
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
