import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function MobileAuth({
  role,
  onSuccess,
}: {
  role: string
  onSuccess: (mobile: string) => void
}) {
  const [mobile, setMobile] = useState("")
  const [captcha, setCaptcha] = useState(false)

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-center capitalize">
        {role} Login
      </h2>

      <Input
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <div className="flex items-center space-x-2">
        <Checkbox checked={captcha} onCheckedChange={() => setCaptcha(!captcha)} />
        <span>I’m not a robot</span>
      </div>

      <Button
        className="w-full"
        disabled={mobile.length !== 10 || !captcha}
        onClick={() => onSuccess(mobile)}
      >
        Send OTP
      </Button>
    </div>
  )
}
