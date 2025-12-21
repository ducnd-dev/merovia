import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Merovia',
  description: 'Merovia Privacy Policy - How we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: December 21, 2025</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Merovia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our company is registered in the United States at 30 N Gould St, Sheridan, WY 82801. We comply with applicable 
                US data protection laws and regulations, including but not limited to CCPA (California Consumer Privacy Act) and 
                other state privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company name and business information</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Account credentials and preferences</li>
                <li>Communications you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and payments</li>
                <li>Sending administrative information and updates</li>
                <li>Responding to customer support requests</li>
                <li>Analyzing and improving our services</li>
                <li>Marketing and promotional communications (with consent)</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We may share your information with:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Service Providers</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Stripe for payment processing</li>
                <li>Cloud hosting providers</li>
                <li>Email service providers</li>
                <li>Analytics platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may disclose your information when required by law, court order, or government regulation, or when necessary 
                to protect our rights, property, or safety.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Business Transfers</h3>
              <p className="text-gray-700 dark:text-gray-300">
                In connection with any merger, sale, or transfer of our business, your information may be transferred to the 
                acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>PCI DSS compliance for payment processing</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                <li><strong>Object:</strong> Object to processing of your information</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                To exercise these rights, please contact us at contact@merovia.co
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings 
                through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required by law. When information is no longer needed, 
                we securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, please contact us 
                immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. International Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy 
                Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia</p>
                <p className="text-gray-700 dark:text-gray-300">30 N Gould St, Sheridan, WY 82801</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300">Email: contact@merovia.co</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 775 618 3683</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
