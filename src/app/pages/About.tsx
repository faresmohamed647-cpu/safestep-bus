import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';

export default function About() {
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
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BusTracker Pro</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We're revolutionizing school transportation with cutting-edge technology that ensures 
              student safety, operational efficiency, and peace of mind for parents and administrators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To provide educational institutions with a reliable, efficient, and user-friendly 
                school bus tracking system that prioritizes student safety while streamlining 
                transportation operations. We believe every child deserves a safe journey to and 
                from school, and every parent deserves peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the global leader in school transportation technology, setting new 
                standards for safety, reliability, and innovation. We envision a future where 
                every school has access to advanced tracking systems that make transportation 
                management seamless and transparent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Safety First',
                description: 'Student safety is our top priority. Every feature is designed with security and protection in mind.',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'We continuously innovate and improve our platform using the latest technology and user feedback.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'We listen to our users and build solutions that truly address their needs and challenges.',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service, from technology to customer support.',
              },
              {
                icon: Target,
                title: 'Reliability',
                description: '99.9% uptime guarantee. Our system is built to be dependable when it matters most.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Clear communication, honest pricing, and open dialogue with all our stakeholders.',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                BusTracker Pro was founded in 2020 by a team of educators, parents, and technology 
                experts who recognized the critical need for better school transportation management. 
                After witnessing the challenges schools face in coordinating bus routes, ensuring 
                student safety, and communicating with parents, we set out to create a comprehensive 
                solution.
              </p>
              <p>
                What started as a simple GPS tracking tool has evolved into a full-featured platform 
                that serves over 250 schools and tracks more than 15,000 students daily. Our growth 
                has been driven by our commitment to listening to our users and continuously improving 
                our service.
              </p>
              <p>
                Today, BusTracker Pro is trusted by educational institutions across the country. Our 
                team of 50+ dedicated professionals works tirelessly to ensure that every school bus 
                journey is safe, efficient, and transparent. We're proud of how far we've come, but 
                we're even more excited about the future of school transportation technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-400">Our impact in the education sector</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2020', label: 'Founded' },
              { value: '250+', label: 'Partner Schools' },
              { value: '15K+', label: 'Students Tracked' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'Team Members' },
              { value: '24/7', label: 'Support' },
              { value: '98%', label: 'Satisfaction' },
              { value: '500+', label: 'Active Buses' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl text-gray-400 mb-8">
              Be part of the future of school transportation
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
