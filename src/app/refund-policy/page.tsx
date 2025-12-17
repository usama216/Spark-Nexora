import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'Spark Nexora Refund & Cancellation Policy - Learn about our refund and cancellation terms for digital services and subscriptions.',
  alternates: {
    canonical: 'https://sparknexora.com/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 my-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Spark Nexora – Refund & Cancellation Policy
          </h1>
    

          <div className="prose prose-lg max-w-none">
            {/* Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Spark Nexora, we strive to deliver high-quality digital services, solutions, and products. This Refund & Cancellation Policy explains the conditions under which refunds, cancellations, or service credits may be issued.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By purchasing or subscribing to any Spark Nexora service, you acknowledge and agree to this policy.
              </p>
            </section>

            {/* General Refund Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. General Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Due to the nature of digital services, SaaS solutions, consulting, and downloadable products, all purchases are non-refundable unless explicitly stated otherwise in writing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Refunds are considered only under specific circumstances outlined below.
              </p>
            </section>

            {/* Eligible Refund Scenarios */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Eligible Refund Scenarios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A refund may be granted at Spark Nexora&apos;s discretion if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The service was not delivered as promised due to a verified technical or operational failure on our end</li>
                <li>A duplicate payment was made by the customer</li>
                <li>A billing error occurred, resulting in an incorrect charge</li>
                <li>The service could not be initiated despite confirmed payment</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All refund requests must be supported with valid proof.
              </p>
            </section>

            {/* Non-Refundable Items */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following are strictly non-refundable:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Digital products once accessed or downloaded</li>
                <li>Subscription fees after the billing cycle has started</li>
                <li>Consulting sessions, strategy calls, or customized services are once delivered or scheduled</li>
                <li>Setup fees, onboarding charges, or implementation costs</li>
                <li>Services are delayed due to client-side issues, lack of communication, or failure to provide required information</li>
              </ul>
            </section>

            {/* Subscription Cancellation Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Subscription Cancellation Policy</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Subscriptions may be canceled at any time</li>
                <li>Cancellation will take effect at the end of the current billing cycle</li>
                <li>No partial or prorated refunds are provided for unused time</li>
                <li>Users will retain access until the subscription period expires</li>
              </ul>
            </section>

            {/* Trial Periods */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Trial Periods (If Applicable)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If Spark Nexora offers a free or paid trial:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Refunds are not issued after the trial converts to a paid plan</li>
                <li>Users are responsible for canceling before the trial ends</li>
              </ul>
            </section>

            {/* Refund Request Process */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Refund Request Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, users must:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Contact Spark Nexora support within 7 days of the transaction</li>
                <li>Provide proof of payment and a clear explanation of the issue</li>
                <li>Use official communication channels only</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Approved refunds will be processed within 7–14 business days, depending on the payment provider.
              </p>
            </section>

            {/* Payment Method Limitations */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Payment Method Limitations</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Refunds are issued to the original payment method only.</li>
                <li>Spark Nexora is not responsible for delays caused by banks, payment processors, or third-party gateways.</li>
              </ul>
            </section>

            {/* Abuse & Policy Enforcement */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Abuse & Policy Enforcement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora reserves the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Deny refund requests that violate this policy</li>
                <li>Suspend or terminate accounts engaging in refund abuse, chargeback fraud, or policy manipulation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Chargebacks initiated without contacting Spark Nexora support may result in immediate service suspension.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spark Nexora may update this Refund & Cancellation Policy at any time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Continued use of services after updates constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For refund or billing-related inquiries:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Spark Nexora Support</strong></p>
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

