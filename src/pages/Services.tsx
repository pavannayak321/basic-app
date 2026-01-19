export default function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Services & Features</h1>
        <p className="text-gray-600 mb-10">
          BuildForce provides end-to-end capabilities to manage a distributed workforce.
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Attendance Automation",
              desc:
                "Mobile check-ins, geofencing, QR-scans and biometric integration to make attendance accurate and tamper-proof.",
            },
            {
              title: "Salary & Payment Automation",
              desc:
                "Define pay rules, overtime, allowances, and process bulk disbursals through integrated payment gateways.",
            },
            {
              title: "Contractor Management",
              desc:
                "Onboard contractors with digital agreements, store documents, schedule work and rate performance.",
            },
            {
              title: "Shift Scheduling",
              desc:
                "Create dynamic shift rosters, assign teams, and notify users via SMS/Push notifications.",
            },
            {
              title: "Project Tracking",
              desc:
                "Allocate labor to projects and get daily progress and cost analytics.",
            },
            {
              title: "Reports & Analytics",
              desc:
                "Exportable attendance registers, payroll reports, statutory compliance packs and KPI dashboards.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
