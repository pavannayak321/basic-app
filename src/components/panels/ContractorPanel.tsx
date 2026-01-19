import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContractorPanel() {
  return (
    <div className="space-y-6">
      {/* Mandatory Information */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          Mandatory Information
        </h3>

        <div className="grid grid-cols-1 gap-3">
          <Input placeholder="Full Name *" />
          <Input placeholder="Phone Number *" />
          <Input placeholder="Aadhar Number *" />
          <Input placeholder="Email Address (Optional)" />
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          Additional Information (Optional)
        </h3>

        <div className="grid grid-cols-1 gap-3">
          {/* Experience */}
          <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Select experience</option>
            <option>0–1 years</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5–10 years</option>
            <option>10+ years</option>
          </select>

          {/* Location */}
          <Input placeholder="Preferred Location (City or area)" />

          {/* Skills */}
          <textarea
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows={3}
            placeholder="Additional skills, certifications, or notes..."
          />
        </div>
      </div>

      {/* Agreement */}
      <div className="flex items-start gap-2 text-xs">
        <input type="checkbox" />
        <p>
          I agree to the{" "}
          <span className="text-orange-500">Terms of Service</span> and{" "}
          <span className="text-orange-500">Privacy Policy</span>.
        </p>
      </div>

      {/* Submit Button */}
      <Button className="w-full bg-orange-500 hover:bg-orange-600">
        Create Contractor Account
      </Button>
    </div>
  )
}
