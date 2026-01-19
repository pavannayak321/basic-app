import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { User, Users, CheckCircle } from "lucide-react"

export default function SignUpDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          Sign Up
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <p className="px-3 py-2 text-sm font-medium text-muted-foreground">
          JOIN AS
        </p>

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <User className="h-4 w-4 text-green-600" />
          Contractor
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <Users className="h-4 w-4 text-green-600" />
          Labour
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <CheckCircle className="h-4 w-4 text-green-600" />
          Approver
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
