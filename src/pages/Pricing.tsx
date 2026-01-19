export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            BuildForce — Pricing & Policy
          </h1>
          <p className="text-gray-600">
            Transparent pricing for Wageman and Contractors. We prioritize
            security, auditability and fair charges.
          </p>
        </div>

        {/* Overview */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-600">
            BuildForce builds and maintains an application focused on providing
            a secure, auditable environment for Wageman and Contractors. We log
            activities to ensure transparency and timely payments.
          </p>
        </section>

        {/* Wageman Pricing */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Wageman Pricing</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <p className="font-medium">Daily registration / usage charge</p>
              <p className="text-gray-600 text-sm mt-1">
                Charged per order per day when a Wageman is registered.
              </p>
              <p className="font-semibold mt-2">₹2 / order</p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-medium">Payment gateway fee</p>
              <p className="text-gray-600 text-sm mt-1">
                Charged to cover payment gateway costs.
              </p>
              <p className="font-semibold mt-2">
                2% of transaction amount
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Pricing */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Contractor Pricing</h2>

          <p className="text-gray-600 mb-3">
            Contractors do not incur a registration fee.
          </p>

          <div className="border rounded-lg p-4">
            <p className="font-medium">
              Transaction fee (deducted from contractor wallet)
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Used to process payments and credit the Wageman's bank account.
            </p>
            <p className="font-semibold mt-2">
              2% of transaction amount
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact & Support</h2>
          <p className="text-gray-600 mb-2">
            For billing, disputes, or special requests:
          </p>
          <p className="text-sm">
            Phone: <span className="font-medium">+91 96188 72992</span>
          </p>
          <p className="text-sm">
            Email: <span className="font-medium">admin@buildforce.club</span>
          </p>
        </section>

        {/* Terms */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Terms & Final Notes</h2>
          <p className="text-gray-600">
            By using BuildForce services, Wageman and Contractors agree to this
            pricing policy. BuildForce reserves the right to update pricing with
            advance notice.
          </p>
          <p className="text-sm mt-2 font-medium">
            Effective date: October 11, 2025
          </p>
        </section>
      </div>
    </div>
  )
}
