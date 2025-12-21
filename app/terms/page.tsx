import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Merovia',
  description: 'Merovia Terms of Service - Legal terms and conditions for using our services',
};

export default function TermsPage() {
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
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: December 21, 2025</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing or using Merovia's services ("Services"), you agree to be bound by these Terms of Service 
                ("Terms"). If you disagree with any part of these Terms, you may not access our Services.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Merovia is a technology solutions company registered in the United States at 30 N Gould St, Sheridan, WY 82801. 
                These Terms constitute a legally binding agreement between you and Merovia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Merovia provides the following services:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>E-commerce Solutions:</strong> Development and maintenance of online stores, payment integration, and inventory management systems</li>
                <li><strong>Software Development:</strong> Custom software applications, web development, API integration, and database solutions</li>
                <li><strong>SaaS Products:</strong> Cloud-based software platforms with subscription models and enterprise features</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Account Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Account Requirements</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To use certain Services, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Account Eligibility</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You must be at least 18 years old and capable of forming a binding contract to create an account. By creating 
                an account, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Pricing and Billing</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>All prices are in US Dollars (USD) unless otherwise specified</li>
                <li>Payments are processed securely through Stripe</li>
                <li>Subscription fees are billed in advance on a recurring basis</li>
                <li>Custom project pricing is provided in written quotes</li>
                <li>All fees are non-refundable except as required by law or explicitly stated</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Payment Methods</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We accept major credit cards, debit cards, and ACH transfers through our payment processor. You authorize us 
                to charge your payment method for all fees incurred.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Late Payments</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Overdue payments may result in service suspension. We reserve the right to charge late fees and interest on 
                overdue amounts at the maximum rate permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All content, features, and functionality of our Services, including but not limited to software, text, graphics, 
                logos, and trademarks, are owned by Merovia and protected by copyright, trademark, and other intellectual 
                property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Custom Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For custom development projects:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Upon full payment, you receive ownership of custom code developed specifically for you</li>
                <li>We retain rights to any pre-existing code, frameworks, or libraries</li>
                <li>We may showcase your project in our portfolio unless otherwise agreed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 License Grant</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We grant you a limited, non-exclusive, non-transferable license to use our Services in accordance with these 
                Terms during your active subscription period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. User Obligations and Prohibited Conduct</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Use our Services for any illegal purpose or in violation of any laws</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Use our Services to send spam or unsolicited communications</li>
                <li>Engage in fraudulent activities or money laundering</li>
                <li>Violate any applicable payment card industry standards</li>
                <li>Interfere with or disrupt our Services or servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Service Level and Availability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                While we strive for 99.9% uptime for SaaS products, we do not guarantee uninterrupted access. We may perform 
                maintenance, updates, and upgrades that may temporarily affect service availability. We will provide advance 
                notice of scheduled maintenance when possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data and Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to our 
                collection, use, and disclosure of your information as described in the Privacy Policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You retain ownership of your data. We implement industry-standard security measures to protect your data, 
                but cannot guarantee absolute security. You are responsible for maintaining backups of your critical data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.1 Limited Warranty</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We warrant that our Services will perform substantially in accordance with our documentation. This warranty 
                is valid for 90 days from the date of service delivery or subscription start.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.2 Disclaimer</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY 
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEROVIA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO MEROVIA 
                IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Indemnification</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You agree to indemnify and hold harmless Merovia, its officers, directors, employees, and agents from any 
                claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of our 
                Services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Term and Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.1 Term</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These Terms remain in effect while you use our Services. Subscription services continue until canceled by 
                either party.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.2 Termination by You</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You may cancel your subscription at any time through your account settings. Cancellation takes effect at the 
                end of your current billing period. No refunds are provided for partial periods.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.3 Termination by Us</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may suspend or terminate your access immediately if you breach these Terms, engage in fraudulent activity, 
                or for any reason with 30 days' notice.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">12.4 Effect of Termination</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Upon termination, your right to use our Services ceases immediately. We will provide you with access to export 
                your data for 30 days after termination, after which your data may be permanently deleted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">13.1 Governing Law</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of 
                law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">13.2 Dispute Resolution</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Any disputes arising from these Terms shall be resolved through:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Good faith negotiations between the parties</li>
                <li>Mediation, if negotiations fail</li>
                <li>Binding arbitration in Sheridan, Wyoming, under AAA rules</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">13.3 Class Action Waiver</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a 
                class, consolidated, or representative action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes via email 
                or through our Services. Your continued use of our Services after such notice constitutes acceptance of the 
                updated Terms. If you do not agree to the updated Terms, you must discontinue use of our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15.1 Entire Agreement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Merovia.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15.2 Severability</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15.3 Waiver</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">15.4 Assignment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                You may not assign or transfer these Terms without our prior written consent. We may assign our rights and 
                obligations without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">16. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For questions about these Terms or our Services, please contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia</p>
                <p className="text-gray-700 dark:text-gray-300">30 N Gould St, Sheridan, WY 82801</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300">Email: contact@merovia.co</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 775 618 3683</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                By using Merovia's services, you acknowledge that you have read, understood, and agree to be bound by these 
                Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
