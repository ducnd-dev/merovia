import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'GDPR Compliance - Merovia',
  description: 'Merovia GDPR Compliance - General Data Protection Regulation information',
};

export default function GDPRPage() {
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
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">GDPR Compliance</h1>
              <p className="text-gray-600 dark:text-gray-400">General Data Protection Regulation</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Merovia is committed to protecting the privacy and security of personal data in accordance with the 
                General Data Protection Regulation (GDPR) (EU) 2016/679. This page outlines how we comply with GDPR 
                requirements and explains your rights as a data subject.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                While Merovia is based in the United States (30 N Gould St, Sheridan, WY 82801), we recognize and 
                respect the data protection rights of individuals in the European Union and European Economic Area.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Data Controller</h2>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-4">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia</p>
                <p className="text-gray-700 dark:text-gray-300">30 N Gould St, Sheridan, WY 82801</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300">Email: contact@merovia.co</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 775 618 3683</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Legal Basis for Processing</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We process personal data only when we have a legal basis to do so under GDPR Article 6:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Consent (Article 6(1)(a))</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have given clear consent for us to process your personal data for specific purposes, such as 
                marketing communications or optional features.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Contract Performance (Article 6(1)(b))</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Processing is necessary for the performance of a contract with you or to take steps at your request 
                before entering into a contract.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Legal Obligation (Article 6(1)(c))</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Processing is necessary for compliance with legal obligations, such as tax reporting or law enforcement 
                requests.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.4 Legitimate Interests (Article 6(1)(f))</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Processing is necessary for our legitimate interests, such as fraud prevention, network security, or 
                improving our services, provided your rights do not override these interests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Your Rights Under GDPR</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a data subject under GDPR, you have the following rights:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Right of Access (Article 15)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to obtain confirmation of whether we process your personal data and, if so, to 
                access that data along with information about how it is processed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Right to Rectification (Article 16)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to have inaccurate personal data corrected and incomplete data completed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Right to Erasure (Article 17)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Also known as the "right to be forgotten," you can request deletion of your personal data when:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>The data is no longer necessary for the purposes it was collected</li>
                <li>You withdraw consent and there is no other legal basis for processing</li>
                <li>You object to processing and there are no overriding legitimate grounds</li>
                <li>The data has been unlawfully processed</li>
                <li>Deletion is required for compliance with a legal obligation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.4 Right to Restriction of Processing (Article 18)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to request that we restrict processing of your personal data in certain circumstances, 
                such as when you contest the accuracy of the data.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.5 Right to Data Portability (Article 20)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to receive your personal data in a structured, commonly used, and machine-readable 
                format and to transmit it to another controller.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.6 Right to Object (Article 21)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to object to processing of your personal data based on legitimate interests or for 
                direct marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.7 Rights Related to Automated Decision-Making (Article 22)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right not to be subject to decisions based solely on automated processing, including 
                profiling, which produces legal effects or similarly significantly affects you.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.8 Right to Withdraw Consent</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Where processing is based on consent, you have the right to withdraw that consent at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. How to Exercise Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To exercise any of your GDPR rights, please contact us using the following methods:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Email:</strong> contact@merovia.co with subject line "GDPR Request"</li>
                <li><strong>Phone:</strong> +1 775 618 3683</li>
                <li><strong>Mail:</strong> Merovia, 30 N Gould St, Sheridan, WY 82801, USA</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We will respond to your request within one month, as required by GDPR. In complex cases, we may extend 
                this period by two additional months and will inform you of any such extension.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                To protect your privacy, we may need to verify your identity before processing your request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Processing Activities</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Personal Data We Collect</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Contact information (name, email, phone number, address)</li>
                <li>Account credentials and authentication data</li>
                <li>Payment and billing information</li>
                <li>Usage data and analytics</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Communications and correspondence</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Purposes of Processing</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and payments</li>
                <li>Customer support and communications</li>
                <li>Service improvement and analytics</li>
                <li>Security and fraud prevention</li>
                <li>Marketing (with consent)</li>
                <li>Legal compliance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 Data Recipients</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Service providers (cloud hosting, payment processing, email services)</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Law enforcement and regulatory authorities (when legally required)</li>
                <li>Business partners (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a US-based company, we may transfer personal data from the EU/EEA to the United States. We ensure 
                appropriate safeguards are in place for such transfers, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Binding Corporate Rules (where applicable)</li>
                <li>Other appropriate safeguards as permitted by GDPR</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Account data:</strong> Duration of account + 3 years</li>
                <li><strong>Transaction records:</strong> 7 years (for tax and accounting purposes)</li>
                <li><strong>Marketing data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
                <li><strong>Support communications:</strong> 3 years</li>
                <li><strong>Analytics data:</strong> 26 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Security Measures</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments and audits</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
                <li>PCI DSS compliance for payment data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Data Breach Notification</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, 
                we will:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Notify the relevant supervisory authority within 72 hours of becoming aware of the breach</li>
                <li>Notify affected individuals without undue delay if the breach poses a high risk</li>
                <li>Document all breaches and our response measures</li>
                <li>Take immediate steps to contain and remediate the breach</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Children's Data</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our services are not directed to children under 16 years of age. We do not knowingly collect or process 
                personal data from children. If we become aware that we have collected data from a child without proper 
                parental consent, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Supervisory Authority</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you are located in the EU/EEA and believe we have not handled your personal data in accordance with 
                GDPR, you have the right to lodge a complaint with your local supervisory authority.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                A list of supervisory authorities can be found at: 
                <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-blue-600 dark:text-blue-400 hover:underline ml-1" target="_blank" rel="noopener">
                  https://edpb.europa.eu/about-edpb/board/members_en
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Updates to This Page</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this GDPR compliance information from time to time. Any changes will be posted on this 
                page. We encourage you to review this page periodically for the latest information on our GDPR practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Additional Resources</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For more information about our data practices, please review:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Cookie Policy</Link></li>
                <li><Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For any questions or concerns regarding GDPR compliance or to exercise your rights:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia - Data Protection</p>
                <p className="text-gray-700 dark:text-gray-300">30 N Gould St, Sheridan, WY 82801</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300">Email: contact@merovia.co</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 775 618 3683</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Your privacy matters to us.</strong> We are committed to protecting your personal data and 
                respecting your rights under GDPR.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                If you have any questions or wish to exercise your rights, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
