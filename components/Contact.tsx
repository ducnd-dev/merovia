'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '30 N Gould St, Sheridan, WY 82801',
    subcontent: 'United States'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 775 618 3683',
    subcontent: 'Mon-Fri 9am-6pm EST'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@merovia.co',
    subcontent: 'We reply within 24 hours'
  }
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {info.subcontent}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">
                Why Choose Merovia?
              </h3>
              <ul className="space-y-3">
                {[
                  'US-based company with local support',
                  'Registered in Wyoming, USA',
                  'Enterprise-grade security',
                  'GDPR & CCPA compliant',
                  'Transparent communication',
                  '24/7 customer support'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
