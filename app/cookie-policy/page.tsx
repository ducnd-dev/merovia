import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy - Merovia',
  description: 'Merovia Cookie Policy - How we use cookies and similar technologies',
};

export default function CookiePolicyPage() {
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
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">Last updated: December 21, 2024</p>
            </div>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Merovia ("we," "our," or "us") uses cookies and similar tracking technologies to enhance your experience 
                on our website located at merovia.co ("Website").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies for the following purposes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Essential Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like 
                page navigation, access to secure areas, and session management. The website cannot function properly 
                without these cookies.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Authentication and session management</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and performance</li>
                <li>User preferences (e.g., dark mode)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Analytics Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting 
                information anonymously. This helps us improve our website and services.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Google Analytics - tracks page views, sessions, and user behavior</li>
                <li>Traffic analysis and performance monitoring</li>
                <li>A/B testing and feature optimization</li>
                <li>Error tracking and debugging</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Functional Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party 
                providers whose services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Personalized content and recommendations</li>
                <li>Chat widget functionality</li>
                <li>Video playback and embedded content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.4 Marketing Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to 
                limit how many times you see an ad. These cookies can share that information with other organizations 
                or advertisers.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Targeted advertising and retargeting</li>
                <li>Social media integration</li>
                <li>Email campaign tracking</li>
                <li>Conversion tracking and attribution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                  <thead className="bg-gray-200 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">session_id</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Session management</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">preferences</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">User preferences</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">_ga</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">_gid</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Google Analytics</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">cookie_consent</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">Cookie consent status</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, 
                deliver advertisements, and provide enhanced functionality:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Google Services</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                <li><strong>Google Fonts:</strong> Web font delivery</li>
                <li><strong>Google Tag Manager:</strong> Tag and script management</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Social Media</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Facebook Pixel:</strong> Conversion tracking and remarketing</li>
                <li><strong>LinkedIn Insight Tag:</strong> Analytics and advertising</li>
                <li><strong>Twitter Analytics:</strong> Tweet engagement tracking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Managing Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Browser Settings</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Most web browsers allow you to control cookies through their settings preferences. You can set your 
                browser to refuse cookies or delete certain cookies. Please note that if you choose to block cookies, 
                some features of our website may not function properly.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Opt-Out Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You can opt out of certain cookies using these tools:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">NAI Opt-out</a></li>
                <li><strong>Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">DAA Opt-out</a></li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 Mobile Devices</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For mobile devices, you can manage cookies and advertising preferences through your device settings:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
                <li><strong>Android:</strong> Settings → Google → Ads</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Do Not Track Signals</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not 
                want to have your online activity tracked. Currently, there is no uniform standard for recognizing and 
                implementing DNT signals, so our website does not currently respond to DNT signals. We will follow industry 
                developments and update this policy if standards are established.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookie Consent</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you first visit our website, you will be presented with a cookie consent banner. You can choose to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Accept All:</strong> Allow all cookies including analytics and marketing</li>
                <li><strong>Reject Non-Essential:</strong> Only allow essential cookies required for the site to function</li>
                <li><strong>Customize:</strong> Choose which categories of cookies you want to allow</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our footer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our website is not intended for children under 18 years of age. We do not knowingly collect information 
                from children through cookies or any other means. If you believe we have collected information from a 
                child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date. We encourage you to review this policy 
                periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. More Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For more information about how we collect, use, and protect your personal data, please see our 
                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Privacy Policy</Link>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For information about our services and terms, please see our 
                <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">Terms of Service</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions or concerns about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">Merovia</p>
                <p className="text-gray-700 dark:text-gray-300">30 N Gould St, Sheridan, WY 82801</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300">Email: contact@merovia.co</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: +1 775 618 3683</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy 
                and agree to our use of cookies as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
