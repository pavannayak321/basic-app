import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OtpVerify({
  mobile,
  onVerified,
}: {
  mobile: string
  onVerified: () => void
}) {
  const [otp, setOtp] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-center font-semibold">
        OTP sent to {mobile}
      </h2>

      <Input
        placeholder="Enter OTP (123456)"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <Button
        className="w-full"
        disabled={otp !== "123456"}
        onClick={onVerified}
      >
        Verify OTP
      </Button>
    </div>
  )
}
