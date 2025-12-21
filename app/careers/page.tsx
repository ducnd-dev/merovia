'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, Briefcase, MapPin, DollarSign, Clock, Users, Code, TrendingUp, Heart, Zap, Award, UserCheck, Calculator, Lightbulb } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Developer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    description: 'We are seeking an experienced software developer to build scalable web applications and SaaS products.',
    requirements: [
      '3+ years of experience in software development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving and communication skills',
      'Experience with agile development methodologies',
    ],
    responsibilities: [
      'Design and develop high-quality software solutions',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews and technical discussions',
      'Mentor junior developers',
    ],
    icon: Code,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$50,000 - $80,000 + Commission',
    description: 'Join our sales team to help businesses transform their digital presence through our technology solutions.',
    requirements: [
      '2+ years of B2B sales experience',
      'Proven track record of meeting/exceeding quotas',
      'Experience selling software or technology solutions',
      'Excellent communication and negotiation skills',
      'Self-motivated and results-driven',
    ],
    responsibilities: [
      'Generate and qualify new business opportunities',
      'Build and maintain client relationships',
      'Present product demonstrations',
      'Negotiate contracts and close deals',
      'Achieve monthly and quarterly sales targets',
    ],
    icon: TrendingUp,
    color: 'green',
  },
  {
    id: 3,
    title: 'Team Leader / Project Manager',
    department: 'Management',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$90,000 - $130,000',
    description: 'Lead our talented team to deliver exceptional technology solutions and drive business growth.',
    requirements: [
      '5+ years of experience in project management or team leadership',
      'Strong understanding of software development lifecycle',
      'Experience with agile/scrum methodologies',
      'Excellent leadership and communication skills',
      'PMP or Scrum Master certification (preferred)',
    ],
    responsibilities: [
      'Lead and mentor development teams',
      'Manage project timelines and deliverables',
      'Coordinate between stakeholders and technical teams',
      'Ensure quality standards and best practices',
      'Drive continuous improvement initiatives',
    ],
    icon: Users,
    color: 'purple',
  },
  {
    id: 4,
    title: 'HR Manager',
    department: 'Human Resources',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$60,000 - $90,000',
    description: 'Join us as an HR Manager to build and nurture our growing team culture and talent strategy.',
    requirements: [
      '3+ years of experience in human resources management',
      'Knowledge of US employment laws and regulations',
      'Experience with HR software and tools',
      'Strong interpersonal and communication skills',
      'SHRM-CP or PHR certification (preferred)',
    ],
    responsibilities: [
      'Manage recruitment and onboarding processes',
      'Develop and implement HR policies and procedures',
      'Handle employee relations and conflict resolution',
      'Oversee performance management and reviews',
      'Ensure compliance with labor laws and regulations',
    ],
    icon: UserCheck,
    color: 'pink',
  },
  {
    id: 5,
    title: 'Accountant',
    department: 'Finance',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$55,000 - $80,000',
    description: 'We are looking for a detail-oriented accountant to manage our financial operations and reporting.',
    requirements: [
      '2+ years of accounting experience',
      'Bachelor\'s degree in Accounting or Finance',
      'Proficiency in QuickBooks and Excel',
      'Knowledge of US GAAP and tax regulations',
      'CPA certification (preferred)',
    ],
    responsibilities: [
      'Manage accounts payable and receivable',
      'Prepare financial statements and reports',
      'Handle monthly, quarterly, and annual closings',
      'Assist with tax preparation and compliance',
      'Maintain accurate financial records',
    ],
    icon: Calculator,
    color: 'orange',
  },
  {
    id: 6,
    title: 'Chief Technology Officer (CTO)',
    department: 'Executive Leadership',
    location: 'Remote (US)',
    type: 'Full-time',
    salary: '$150,000 - $200,000',
    description: 'Join our leadership team as CTO to drive our technology vision and strategy for the next phase of growth.',
    requirements: [
      '10+ years of experience in software development and technology leadership',
      'Proven track record of building and scaling technology teams',
      'Deep expertise in modern web technologies and cloud architecture',
      'Strong understanding of e-commerce and SaaS platforms',
      'Excellent strategic thinking and communication skills',
      'Experience with startup or high-growth environments',
    ],
    responsibilities: [
      'Define and execute the company\'s technology strategy',
      'Lead and mentor engineering teams',
      'Drive technical innovation and best practices',
      'Oversee system architecture and infrastructure',
      'Collaborate with executive team on product roadmap',
      'Ensure security, scalability, and performance of all systems',
      'Manage technology budget and vendor relationships',
    ],
    icon: Lightbulb,
    color: 'indigo',
  },
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision coverage' },
  { icon: Zap, title: 'Remote Work', description: 'Work from anywhere in the US' },
  { icon: Clock, title: 'Flexible Hours', description: 'Work-life balance is our priority' },
  { icon: Award, title: 'Career Growth', description: 'Professional development and training' },
  { icon: Briefcase, title: 'Paid Time Off', description: 'Generous vacation and sick leave' },
];

export default function CareersPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [jobsRef, jobsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Build the future of technology with Merovia. We're looking for passionate, talented individuals 
              to join our growing team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Fast Growing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Work at Merovia?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer more than just a job – we offer a career and a community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={jobsRef} className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find your perfect role and start your journey with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={jobsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Job Header */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 bg-${job.color}-100 dark:bg-${job.color}-900/30 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <job.icon className={`w-7 h-7 text-${job.color}-600 dark:text-${job.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex lg:flex-col justify-end gap-3">
                    <a
                      href={`mailto:contact@merovia.co?subject=Application for ${job.title}`}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-center whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <a
            href="mailto:contact@merovia.co?subject=General Application"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </main>
  );
}
