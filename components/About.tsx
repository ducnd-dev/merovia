'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const metrics = [
  { icon: Shield, label: 'Secure & Compliant', value: 'PCI DSS Certified' },
  { icon: Award, label: 'Industry Recognition', value: 'Top Rated 2025' },
  { icon: Users, label: 'Expert Team', value: '50+ Professionals' },
  { icon: TrendingUp, label: 'Growth Partner', value: '300% ROI Average' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Merovia
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Merovia is a leading technology solutions provider based in the United States, 
              specializing in e-commerce platforms, custom software development, and SaaS products.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              With a team of experienced engineers and designers, we help businesses transform 
              their digital presence and achieve measurable growth through innovative technology solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our commitment to security, compliance, and excellence has made us a trusted partner 
              for businesses of all sizes, from startups to enterprise organizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 font-medium">
                US Based Company
              </div>
              <div className="px-6 py-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 font-medium">
                Wyoming Registered
              </div>
              <div className="px-6 py-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 font-medium">
                Fully Compliant
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
