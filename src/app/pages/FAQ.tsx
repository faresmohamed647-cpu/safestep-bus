import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['all', 'General', 'Pricing', 'Technical', 'Security', 'Support'];

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is BusTracker Pro?',
      answer: 'BusTracker Pro is a comprehensive school bus tracking and management system that uses GPS technology to monitor buses in real-time, send notifications to parents, and help schools optimize their transportation operations.',
    },
    {
      category: 'General',
      question: 'How does the GPS tracking work?',
      answer: 'We install a small GPS device in each bus that sends location data to our cloud platform every 10 seconds. This data is then displayed on our web dashboard and mobile apps, allowing real-time tracking of all buses.',
    },
    {
      category: 'General',
      question: 'Who can use BusTracker Pro?',
      answer: 'BusTracker Pro is designed for schools, educational institutions, and school districts of all sizes. We serve K-12 schools, private schools, charter schools, and university campuses.',
    },
    {
      category: 'Pricing',
      question: 'How much does it cost?',
      answer: 'We offer three pricing tiers: Starter ($99/month for up to 5 buses), Professional ($249/month for up to 20 buses), and Enterprise (custom pricing for unlimited buses). All plans include a 30-day free trial.',
    },
    {
      category: 'Pricing',
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 30-day free trial with no credit card required. You get full access to all features during the trial period.',
    },
    {
      category: 'Pricing',
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. There are no long-term contracts. You can cancel your subscription at any time with no penalties or cancellation fees.',
    },
    {
      category: 'Pricing',
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 15% discount for schools that choose annual billing instead of monthly billing.',
    },
    {
      category: 'Technical',
      question: 'What devices are compatible with BusTracker Pro?',
      answer: 'Our system works on all modern web browsers (Chrome, Firefox, Safari, Edge) and we have native mobile apps for iOS and Android devices.',
    },
    {
      category: 'Technical',
      question: 'How is the GPS device installed?',
      answer: 'Installation is simple and takes about 15 minutes per bus. The device plugs into the OBD-II port (standard on all vehicles manufactured after 1996) and requires no wiring. We also offer professional installation services.',
    },
    {
      category: 'Technical',
      question: 'What happens if there\'s no cellular coverage?',
      answer: 'The GPS device stores location data locally when there\'s no signal and automatically uploads it once connection is restored. This ensures no data is lost.',
    },
    {
      category: 'Technical',
      question: 'How accurate is the GPS tracking?',
      answer: 'Our GPS devices provide accuracy within 3-5 meters under normal conditions. Location updates are sent every 10 seconds while the bus is moving.',
    },
    {
      category: 'Security',
      question: 'Is my data secure?',
      answer: 'Yes, we take security very seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are GDPR compliant and conduct regular security audits.',
    },
    {
      category: 'Security',
      question: 'Who can access the tracking information?',
      answer: 'Access is role-based. School administrators have full access, drivers see only their assigned bus, and parents only see information for their own children. All access is password-protected.',
    },
    {
      category: 'Security',
      question: 'Do you share data with third parties?',
      answer: 'No, we never sell or share your data with third parties. Your data is yours, and we only use it to provide our services to you.',
    },
    {
      category: 'Support',
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also have extensive documentation and video tutorials.',
    },
    {
      category: 'Support',
      question: 'Do you provide training?',
      answer: 'Yes, all new customers receive onboarding training via video call. Enterprise customers can also request on-site training sessions.',
    },
    {
      category: 'Support',
      question: 'How quickly do you respond to support requests?',
      answer: 'Starter plan customers receive responses within 24 hours, Professional within 4 hours, and Enterprise customers get priority support with 1-hour response time.',
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Find answers to common questions about BusTracker Pro
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-2">No results found</div>
              <div className="text-sm text-gray-500">Try adjusting your search or filters</div>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
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
              Our support team is here to help you get the answers you need
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
