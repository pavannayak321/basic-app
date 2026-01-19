import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { User, Users, CheckCircle } from "lucide-react"

export default function SignUpModal({
  open,
  onClose,
  onSelectRole,
}: {
  open: boolean
  onClose: () => void
  onSelectRole: (role: "contractor" | "labour" | "approver") => void
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Join BuildForceLink
          </DialogTitle>
          <p className="text-center text-sm text-slate-500">
            Choose how you want to join the platform
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 mt-6">
          <button
            onClick={() => onSelectRole("contractor")}
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-orange-50 transition"
          >
            <User className="text-orange-500" />
            <div>
              <p className="font-semibold">Contractor</p>
              <p className="text-sm text-slate-500">
                Hire labour and manage projects
              </p>
            </div>
          </button>

          <button
            onClick={() => onSelectRole("labour")}
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-orange-50 transition"
          >
            <Users className="text-orange-500" />
            <div>
              <p className="font-semibold">Labour</p>
              <p className="text-sm text-slate-500">
                Find daily work opportunities
              </p>
            </div>
          </button>

          <button
            onClick={() => onSelectRole("approver")}
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-orange-50 transition"
          >
            <CheckCircle className="text-orange-500" />
            <div>
              <p className="font-semibold">Approver</p>
              <p className="text-sm text-slate-500">
                Verify and approve job activities
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
