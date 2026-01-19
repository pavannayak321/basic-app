export default function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] px-4 py-12">
      <div className="max-w-4xl mx-auto bg-[#020617]/80 rounded-2xl shadow-xl p-8 text-slate-200">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-teal-500 text-white font-bold">
            BF
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              BuildForce Pricing & Policy
            </h1>
            <p className="text-xs text-slate-400">
              Effective Date: January 18, 2026
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold">Policy Overview</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            BuildForce is committed to a <strong>No Hidden Charges</strong> philosophy.
            All deductions from the daily job cost are clearly defined below to cover
            essential infrastructure, legal protections, and support services required
            to facilitate your work.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold">
            1. Platform & Operational Fees
          </h2>
          <p className="text-sm text-slate-300">
            These fees cover maintenance of the digital ecosystem and professional
            support provided to users.
          </p>

          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
            <li>
              <strong>Technology & Platform Fee (0.2%)</strong> – Deducted from the daily
              job cost to maintain the BuildForce mobile app, cloud infrastructure,
              and real-time job tracking features.
            </li>
            <li>
              <strong>Customer Support & Dispute Handling (1.0%)</strong> – Ensures 24/7
              access to support for job-site issues, payment discrepancies, and disputes.
            </li>
            <li>
              <strong>Compliance, Legal & Admin (1.0%)</strong> – Covers verification,
              tax documentation, and adherence to local labor laws.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold">
            2. Financial & Payment Processing
          </h2>
          <p className="text-sm text-slate-300">
            To ensure secure and rapid transfer of funds to your bank account, the
            following cost is applied:
          </p>

          <ul className="list-disc list-inside text-sm text-slate-300">
            <li>
              <strong>Payment Processing & Transaction Cost (2.3%)</strong> – Covers
              third-party payment gateway fees, encryption, and instant settlement.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold">
            3. Individual Policy & Protection
          </h2>

          <ul className="list-disc list-inside text-sm text-slate-300">
            <li>
              <strong>Policy Enabling Fee (1.5%)</strong> – Applied on an individual or
              hourly basis to activate insurance frameworks, safety protocols, and
              personalized policy management.
            </li>
          </ul>
        </section>

        {/* Fee Summary Table */}
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-4">
            Fee Summary Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700 text-sm">
              <thead className="bg-slate-800 text-slate-200">
                <tr>
                  <th className="border border-slate-700 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-slate-700 px-4 py-2">
                    Percentage
                  </th>
                  <th className="border border-slate-700 px-4 py-2">
                    Applied To
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr>
                  <td className="border border-slate-700 px-4 py-2">
                    Technology & Platform
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    0.2%
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    Daily Job Cost
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">
                    Payment & Transactions
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    2.3%
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    Daily Job Cost
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">
                    Support & Dispute Handling
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    1.0%
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    Daily Job Cost
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">
                    Compliance & Legal
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    1.0%
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    Daily Job Cost
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-2">
                    Individual Policy Enabling
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    1.5%
                  </td>
                  <td className="border border-slate-700 px-4 py-2 text-center">
                    Hourly / Individual Rate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  )
}
