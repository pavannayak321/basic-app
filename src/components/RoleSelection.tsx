import { Button } from "@/components/ui/button"

export default function RoleSelection({
  onSelect,
}: {
  onSelect: (role: "contractor" | "labour" | "agent") => void
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Sign In As</h2>

      <Button className="w-full" variant ="outline" onClick={() => onSelect("contractor")}>
        Contractor
      </Button>

      <Button className="w-full" variant="outline" onClick={() => onSelect("labour")}>
        Labour
      </Button>

      <Button className="w-full" variant="outline" onClick={() => onSelect("agent")}>
        Agent
      </Button>
    </div>
  )
}
