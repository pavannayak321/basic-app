import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignInDialog({
  open,
  role,
  onClose,
  onLoginSuccess,
}: {
  open: boolean
  role: string
  onClose: () => void
  onLoginSuccess: (role: string) => void
}) {
  const [step, setStep] = useState<"mobile" | "otp">("mobile")
  const [mobile, setMobile] = useState("")
  const [captcha, setCaptcha] = useState("")
  const [otp, setOtp] = useState("")

  const DUMMY_CAPTCHA = "1mqQqM"
  const DUMMY_OTP = "123456"

  // Reset dialog state when closed
  useEffect(() => {
    if (!open) {
      setStep("mobile")
      setMobile("")
      setCaptcha("")
      setOtp("")
    }
  }, [open])

  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number")
      return
    }
    if (captcha !== DUMMY_CAPTCHA) {
      alert("Invalid captcha")
      return
    }
    setStep("otp")
  }

  const validateOtp = () => {
    if (otp === DUMMY_OTP) {
      onLoginSuccess(role) // ✅ USE SELECTED ROLE
      onClose()
    } else {
      alert("Invalid OTP")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {/* HEADER */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">
            Sign In as{" "}
            <span className="capitalize text-orange-500">
              {role || "User"}
            </span>
          </h2>
        </div>

        {/* STEP 1: MOBILE + CAPTCHA */}
        {step === "mobile" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">
                Enter Mobile Number
              </label>
              <div className="flex gap-2 mt-1">
                <Input value="+91" disabled className="w-16" />
                <Input
                  placeholder="Mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Enter Captcha
              </label>
              <div className="border rounded text-center py-2 mt-1 font-semibold">
                {DUMMY_CAPTCHA}
              </div>
              <Input
                className="mt-2"
                placeholder="Enter captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-orange-500" onClick={sendOtp}>
                Send OTP →
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: OTP */}
        {step === "otp" && (
          <div className="space-y-4">
            <label className="text-sm font-medium">
              Enter OTP
            </label>

            <Input
              placeholder="Enter OTP (123456)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep("mobile")}
              >
                ← Back
              </Button>
              <Button
                className="bg-orange-500"
                onClick={validateOtp}
              >
                Validate OTP ✓
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
