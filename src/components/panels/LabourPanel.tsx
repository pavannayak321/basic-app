import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const WORK_TYPES = [
  { key: "helpers", label: "Helpers", level: "VERY HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "painting", label: "Painting", level: "VERY HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "plastering", label: "Plastering", level: "HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "flooring", label: "Flooring", level: "MEDIUM-HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "electrical", label: "Electrical (finishing)", level: "HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "plumbing", label: "Plumbing (finishing)", level: "MEDIUM-HIGH", status: "Ideal for Daily Hiring", color: "green" },
  { key: "carpentry", label: "Carpentry (modules)", level: "MEDIUM", status: "Partial Daily Hiring", color: "yellow" },
  { key: "rcc", label: "RCC Structural", level: "LOW", status: "Not for Daily Hiring", color: "red" },
]

export default function LabourPanel () {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    aadhar: "",
    email: "",
  })

  const [selectedWork, setSelectedWork] = useState<string[]>([])

  const toggleWork = (key: string) => {
    setSelectedWork((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    )
  }

  const badgeColor = (color: string) => {
    if (color === "green") return "bg-green-100 text-green-700"
    if (color === "yellow") return "bg-yellow-100 text-yellow-700"
    return "bg-red-100 text-red-700"
  }

  const handleSubmit = () => {
    console.log("Approver Profile:", form)
    console.log("Selected Work Types:", selectedWork)
    alert("Approver profile saved successfully")
  }

  return (
    <div className="space-y-6">
      {/* Mandatory Information */}
      <div>
        <h3 className="text-sm font-semibold mb-3">
          Mandatory Information
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <Input
            placeholder="Aadhar Number *"
            value={form.aadhar}
            onChange={(e) => setForm({ ...form, aadhar: e.target.value })}
          />

          <Input
            placeholder="Email Address (Optional)"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      {/* Work Type Selection */}
      <div>
        <h3 className="text-sm font-semibold mb-1">
          Select Your Work Type
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Choose your specialization (select all that apply)
        </p>

        <div className="grid grid-cols-2 gap-4">
          {WORK_TYPES.map((work) => (
            <div
              key={work.key}
              onClick={() => toggleWork(work.key)}
              className={`border rounded-lg p-3 cursor-pointer transition ${
                selectedWork.includes(work.key)
                  ? "border-orange-500 bg-orange-50"
                  : "hover:bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">
                  {work.label}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded ${badgeColor(
                    work.color
                  )}`}
                >
                  {work.level}
                </span>
              </div>

              <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                <CheckCircle className="h-3 w-3" />
                {work.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <Button
        className="w-full bg-orange-500 hover:bg-orange-600"
        onClick={handleSubmit}
      >
        Save Profile
      </Button>
    </div>
  )
}
