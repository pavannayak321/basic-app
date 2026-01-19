import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ApproverPanel() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    aadhar: "",
    email: "",
    experience: "",
    location: "",
    notes: "",
    agreed: false,
  })

  const handleChange = (key: string, value: any) => {
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = () => {
    if (!form.agreed) {
      alert("Please agree to Terms & Privacy Policy")
      return
    }

    console.log("Approver Profile:", form)
    alert("Approver details saved successfully")
  }

  return (
    <div className="space-y-6">
      {/* Mandatory Information */}
      <div>
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          Mandatory Information
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <Input
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <Input
            placeholder="Aadhar Number *"
            value={form.aadhar}
            onChange={(e) => handleChange("aadhar", e.target.value)}
          />

          <Input
            placeholder="Email Address (Optional)"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-sm font-semibold mb-3">
          Additional Information (Optional)
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <select
            className="border rounded-md px-3 py-2 text-sm"
            value={form.experience}
            onChange={(e) =>
              handleChange("experience", e.target.value)
            }
          >
            <option value="">Select experience</option>
            <option value="1-3">1–3 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </select>

          <Input
            placeholder="Preferred Location"
            value={form.location}
            onChange={(e) =>
              handleChange("location", e.target.value)
            }
          />
        </div>

        <textarea
          className="mt-4 w-full border rounded-md p-3 text-sm"
          rows={4}
          placeholder="Any additional skills, certifications, or notes..."
          value={form.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
        />
      </div>

      {/* Agreement */}
      <div className="flex items-start gap-2 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) =>
            handleChange("agreed", e.target.checked)
          }
        />
        <p>
          I agree to the{" "}
          <span className="text-orange-500 cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-orange-500 cursor-pointer">
            Privacy Policy
          </span>
          . I confirm that all information provided is accurate.
        </p>
      </div>

      {/* Submit */}
      <Button
        className="w-full bg-orange-500 hover:bg-orange-600"
        onClick={handleSubmit}
      >
        Save Details
      </Button>
    </div>
  )
}
