'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Code2, Cloud } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Comprehensive online store development with inventory management, customer experiences, and modern design.',
    features: ['Shopping Cart Systems', 'Inventory Management', 'Mobile-First Design', 'Analytics & Reporting']
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we deliver quality code.',
    features: ['Custom Web Apps', 'API Development', 'Database Design', 'Third-Party Integration']
  },
  {
    icon: Cloud,
    title: 'SaaS Products',
    description: 'Scalable cloud-based software solutions with subscription models and enterprise-grade security.',
    features: ['Cloud Infrastructure', 'User Management', 'Multi-Tenant Architecture', 'Auto-Scaling']
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
