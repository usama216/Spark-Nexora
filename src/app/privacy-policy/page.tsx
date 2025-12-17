import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Spark Nexora Privacy Policy - Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://sparknexora.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 my-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Spark Nexora – Comprehensive Policy Framework
          </h1>
         

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora is committed to operating with integrity, transparency, security, and accountability across all its services, platforms, and internal operations. This policy document establishes the core principles, rules, and guidelines governing our interactions with users, clients, partners, and employees.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These policies apply to all Spark Nexora digital platforms, products, services, employees, contractors, and third-party partners unless otherwise stated.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Privacy Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Data We Collect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account credentials and authentication data</li>
                <li>Payment and transaction-related metadata (processed securely via third-party providers)</li>
                <li>Usage data (IP address, browser type, device data, pages visited)</li>
                <li>Communication records (emails, chat messages, support requests)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 How We Use Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Collected data is used to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide, operate, and improve our services</li>
                <li>Process transactions and subscriptions</li>
                <li>Communicate updates, security alerts, and support messages</li>
                <li>Prevent fraud, abuse, and unauthorized access</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Data Sharing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora does not sell personal data. Data may be shared only with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Trusted service providers (payment processors, analytics tools, hosting services)</li>
                <li>Legal authorities, when required by law</li>
                <li>Business successors in the event of a merger or acquisition</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Data Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain personal data only as long as necessary for operational, legal, or contractual purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.5 User Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users may request:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Access to their personal data</li>
                <li>Correction or deletion of data</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability (where applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Requests can be made via official Spark Nexora communication channels.
              </p>
            </section>

            {/* Security Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Security Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Data Protection Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora implements industry-standard safeguards, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication and access controls</li>
                <li>Regular security audits and monitoring</li>
                <li>Limited internal access based on role necessity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Payment Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments are processed via PCI-DSS-compliant third-party providers. Spark Nexora does not store full card details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Incident Response</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In case of a data breach or security incident:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>An immediate investigation will be conducted</li>
                <li>Affected users will be notified where legally required</li>
                <li>Corrective measures will be implemented promptly</li>
              </ul>
            </section>

            {/* Acceptable Use Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Engage in illegal, fraudulent, or harmful activities</li>
                <li>Attempt unauthorized access to systems or data</li>
                <li>Distribute malware, spam, or malicious content</li>
                <li>Infringe intellectual property rights</li>
                <li>Abuse or harass other users or staff</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Violation may result in account suspension or termination without notice.
              </p>
            </section>

            {/* Intellectual Property Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, branding, software, and materials provided by Spark Nexora are protected by intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Copy, reproduce, or resell content without permission</li>
                <li>Reverse engineer or exploit proprietary systems</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Any feedback or suggestions submitted may be used by Spark Nexora without obligation or compensation.
              </p>
            </section>

            {/* Terms of Service */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Terms of Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Service Availability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora strives for high availability but does not guarantee uninterrupted service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Account Responsibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Maintaining account confidentiality</li>
                <li>All activities are conducted under their account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora reserves the right to suspend or terminate access for policy violations, security risks, or legal requirements.
              </p>
            </section>

            {/* Refund & Cancellation Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Refund & Cancellation Policy</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Digital products and services are generally non-refundable once accessed or delivered</li>
                <li>Subscription cancellations take effect at the end of the current billing cycle</li>
                <li>Refund exceptions may be granted at Spark Nexora's discretion</li>
              </ul>
            </section>

            {/* Compliance & Legal */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Compliance & Legal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora operates in alignment with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>GDPR (EU/UK)</li>
                <li>CCPA (California, USA)</li>
                <li>Applicable international data protection and consumer laws</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Users are responsible for compliance with local laws when accessing our services.
              </p>
            </section>

            {/* Employee Conduct Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Employee Conduct Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All Spark Nexora employees and contractors must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Act ethically and professionally</li>
                <li>Protect confidential information</li>
                <li>Avoid conflicts of interest</li>
                <li>Comply with security and privacy obligations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Misconduct may result in disciplinary action or termination.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora reserves the right to update these policies periodically. Continued use of services constitutes acceptance of revised policies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Material changes will be communicated through official channels.
              </p>
            </section>

            {/* Contact Information */}
            <section className="">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For policy-related questions or requests:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Spark Nexora</strong></p>
                <p className="text-gray-700 mb-2">Official Support Channel</p>
                <p className="text-gray-700">
                  Email: <a href="mailto:sparknexorainfo@gmail.com" className="text-primary-500 hover:underline">sparknexorainfo@gmail.com</a>
                </p>
              </div>
            </section>

        
          </div>
        </div>
      </div>
    </div>
  );
}

