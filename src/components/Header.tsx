import { useState } from "react"
import { Link } from "react-router-dom"
import SignInDialog from "./SignInDialog"
import ContactDialog from "./ContactDialog"
import SignUpModal from "./SignUpModal"
import { Button } from "@/components/ui/button"

export default function Header({
  onLoginSuccess,
}: {
  onLoginSuccess: (role: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  // NEW
  const [signUpOpen, setSignUpOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string>("")

  const openSignInWithRole = (role: string) => {
    setSelectedRole(role)
    setOpen(true)
  }

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          BuildForce<span className="text-orange-500">Link</span>
        </h1>

        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/services" className="hover:text-black">Services</Link>
          <Link to="/pricing" className="hover:text-black">Pricing</Link>
         

         <Link to="/policy" className="  hover:text-black">Policy</Link>





          {/* SIGN UP → CENTER MODAL */}
          <Button variant="ghost" onClick={() => setSignUpOpen(true)}>
            Sign Up
          </Button>

          {/* CONTACT */}
          <button
            onClick={() => setContactOpen(true)}
            className="hover:text-black"
          >
            Contact Us
          </button>

          {/* SIGN IN */}
          <Button variant="outline" onClick={() => openSignInWithRole("signin")}>
            Sign In
          </Button>
        </nav>
      </div>

      {/* SIGN UP MODAL */}
      <SignUpModal
        open={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSelectRole={(role) => {
          setSignUpOpen(false)
          openSignInWithRole(role)
        }}
      />

      {/* SIGN IN MODAL */}
      <SignInDialog
        open={open}
        role={selectedRole}
        onClose={() => setOpen(false)}
        onLoginSuccess={(role) => {
          onLoginSuccess(role)
          setOpen(false)
        }}
      />

      {/* CONTACT MODAL */}
      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </header>
  )
}
