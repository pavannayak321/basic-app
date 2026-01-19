import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <h2 className="text-lg font-semibold mb-2">
          Contact Us
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Questions? Request a demo or pricing details — we’ll respond within 1 business day.
        </p>

        <div className="space-y-3">
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
          <Input placeholder="Company (optional)" />
          <Textarea placeholder="How can we help?" rows={4} />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600">
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
