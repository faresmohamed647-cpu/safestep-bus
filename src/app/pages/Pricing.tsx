import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      period: 'month',
      description: 'Perfect for small schools getting started',
      features: [
        'Up to 5 buses',
        'Up to 150 students',
        'Real-time GPS tracking',
        'Basic notifications',
        'Parent mobile app',
        'Email support',
        '30-day free trial',
      ],
      color: 'blue',
      popular: false,
    },
    {
      name: 'Professional',
      price: '249',
      period: 'month',
      description: 'Best for growing institutions',
      features: [
        'Up to 20 buses',
        'Up to 600 students',
        'Real-time GPS tracking',
        'Advanced notifications',
        'Parent & driver apps',
        'Route optimization',
        'Analytics & reports',
        'Priority support',
        'API access',
      ],
      color: 'purple',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      description: 'For large schools and districts',
      features: [
        'Unlimited buses',
        'Unlimited students',
        'Real-time GPS tracking',
        'Custom notifications',
        'All mobile apps',
        'Advanced route optimization',
        'Custom analytics',
        'Dedicated account manager',
        'Full API access',
        'Custom integrations',
        'On-site training',
        '24/7 phone support',
      ],
      color: 'yellow',
      popular: false,
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
              <span className="text-sm text-blue-300">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Start with a 30-day free trial. No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-2xl p-8 hover:bg-white/10 transition-all ${
                  plan.popular ? 'lg:-mt-4 lg:scale-105 border-2 border-purple-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    {plan.price !== 'Custom' && <span className="text-gray-400 text-2xl">$</span>}
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-400 text-xl mb-2">/{plan.period}</span>}
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-sm text-gray-400">Billed monthly or annually</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-${plan.color}-600/20 flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className={`w-3 h-3 text-${plan.color}-400`} />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-gray-400">See what's included in each plan</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-semibold">Feature</th>
                    <th className="text-center p-6 font-semibold">Starter</th>
                    <th className="text-center p-6 font-semibold">Professional</th>
                    <th className="text-center p-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Number of Buses', starter: '5', pro: '20', enterprise: 'Unlimited' },
                    { feature: 'Number of Students', starter: '150', pro: '600', enterprise: 'Unlimited' },
                    { feature: 'Real-time Tracking', starter: true, pro: true, enterprise: true },
                    { feature: 'Parent App', starter: true, pro: true, enterprise: true },
                    { feature: 'Driver App', starter: false, pro: true, enterprise: true },
                    { feature: 'Route Optimization', starter: false, pro: true, enterprise: true },
                    { feature: 'Analytics Dashboard', starter: false, pro: true, enterprise: true },
                    { feature: 'API Access', starter: false, pro: true, enterprise: true },
                    { feature: 'Custom Integrations', starter: false, pro: false, enterprise: true },
                    { feature: 'Dedicated Support', starter: false, pro: false, enterprise: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="p-6 text-gray-300">{row.feature}</td>
                      <td className="p-6 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-gray-300">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-gray-300">{row.pro}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-gray-300">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No contracts required. You can cancel anytime with no penalties or fees.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and bank transfers for annual plans.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/faq" className="text-blue-400 hover:text-blue-300 transition-colors">
              View all FAQs →
            </a>
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 250+ schools already using BusTracker Pro
            </p>
            <a
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Start Free 30-Day Trial
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
