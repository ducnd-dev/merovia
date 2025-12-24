import Link from 'next/link';
import { ArrowLeft, Trash2, Mail, FileText } from 'lucide-react';

export const metadata = {
  title: 'Data Deletion Request - Merovia',
  description: 'How to request deletion of your personal data from Merovia',
};

export default function DataDeletionPage() {
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
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">User Data Deletion</h1>
              <p className="text-gray-600 dark:text-gray-400">Request deletion of your personal data</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Right to Data Deletion</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Merovia, we respect your privacy and your right to control your personal data. If you wish to have 
                your personal data deleted from our systems, we provide a straightforward process to request data deletion.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This right applies to all users and is in accordance with applicable data protection regulations, 
                including GDPR, CCPA, and other privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Data Will Be Deleted?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you request data deletion, we will remove the following information from our systems:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account credentials and authentication data</li>
                <li>Communication history and correspondence</li>
                <li>Usage data and analytics associated with your account</li>
                <li>Any other personal data we have collected from you</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Important Note:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Certain data may be retained for legal, accounting, or security purposes as required by law. 
                  This includes transaction records, tax documents, and data necessary for fraud prevention. 
                  We will only retain the minimum data necessary to fulfill these legal obligations.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Request Data Deletion</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Method 1: Email Request
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Send an email to our data protection team with your deletion request:
                </p>
                <div className="bg-white dark:bg-gray-800 rounded p-4 mb-4">
                  <p className="text-gray-900 dark:text-white font-mono">contact@merovia.co</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Please include in your email:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Subject line: "Data Deletion Request"</li>
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>Any additional information to help us identify your account</li>
                  <li>Confirmation that you want all your personal data deleted</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  Method 2: Written Request
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Send a written request to our business address:
                </p>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia - Data Protection Officer</p>
                  <p className="text-gray-700 dark:text-gray-300">30 N Gould St</p>
                  <p className="text-gray-700 dark:text-gray-300">Sheridan, WY 82801</p>
                  <p className="text-gray-700 dark:text-gray-300">United States</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Processing Timeline</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Request Received</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We will acknowledge your request within 48 hours of receipt.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Identity Verification</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      To protect your privacy, we may request additional information to verify your identity. 
                      This typically takes 1-2 business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Deletion</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Once verified, we will process your deletion request within 30 days. You will receive 
                      confirmation once the deletion is complete.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consequences of Data Deletion</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Please be aware that deleting your data will have the following effects:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Your account will be permanently closed and cannot be recovered</li>
                <li>You will lose access to all services and features associated with your account</li>
                <li>Any active subscriptions or services will be terminated</li>
                <li>Historical data, including past communications and transactions, will be permanently deleted</li>
                <li>You will need to create a new account if you wish to use our services in the future</li>
              </ul>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Warning:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Data deletion is permanent and cannot be undone. Please ensure you have downloaded any 
                  information you wish to keep before submitting a deletion request.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Alternative Options</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you're not ready for permanent deletion, consider these alternatives:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Account Deactivation:</strong> Temporarily disable your account without deleting data</li>
                <li><strong>Data Export:</strong> Download a copy of your data before deletion</li>
                <li><strong>Privacy Settings:</strong> Adjust your privacy settings to limit data collection</li>
                <li><strong>Unsubscribe:</strong> Opt out of marketing communications while keeping your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions or Concerns?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about the data deletion process or need assistance, please contact our 
                data protection team:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong className="text-gray-900 dark:text-white">Email:</strong> privacy@merovia.co
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong className="text-gray-900 dark:text-white">Address:</strong> 30 N Gould St, Sheridan, WY 82801, USA
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Response Time:</strong> Within 48 hours
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/privacy"
                  className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Policy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Learn how we collect and use your data
                  </p>
                </Link>
                <Link 
                  href="/gdpr"
                  className="block p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GDPR Compliance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your rights under GDPR
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
