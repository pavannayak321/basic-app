export default function Refund() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Refund & Cancellation Policy
      </h1>

      <p className="text-gray-700 mb-8 max-w-4xl">
        BuildForceLink provides a transparent and fair refund policy for all
        users. This policy applies to all payments made on the platform,
        including contractor subscriptions, wageman charges, and service fees.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Cancellation of Services
          </h2>
          <p className="text-gray-600">
            Users may cancel their services at any time. If a cancellation is
            made before any contractor or wageman has been assigned to a job,
            the full service amount will be eligible for refund.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Refund Eligibility
          </h2>
          <p className="text-gray-600">
            Refunds are applicable only when a service is not delivered as
            promised or if no successful match between contractor and wageman
            occurs. Once a job is started, platform service fees are
            non-refundable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Payment Gateway Charges
          </h2>
          <p className="text-gray-600">
            Payment gateway charges (2%) and government taxes are non-refundable
            as these are charged by third-party providers and statutory
            authorities.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Refund Processing Time
          </h2>
          <p className="text-gray-600">
            Approved refunds will be processed within 5 to 7 working days and
            credited back to the original payment method used at the time of
            transaction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. How to Request a Refund
          </h2>
          <p className="text-gray-600">
            Users can request a refund by contacting our support team through
            the Contact Us page or by emailing support@buildforcelink.com with
            their transaction details.
          </p>
        </div>
      </div>
    </div>
  )
}
