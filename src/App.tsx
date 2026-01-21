import { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Information from "@/pages/Information"


import Header from "@/components/Header"
import Home from "@/components/Home"
import Services from "@/pages/Services"
import Pricing from "@/pages/Pricing"
import Policy from "@/pages/Policy"
import About from "@/pages/About"
import Refund from "@/pages/Refund"



type UserRole = "contractor" | "labour" | "approver" | null

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null)

  const handleLoginSuccess = (role: string) => {
    if (role === "contractor" || role === "labour" || role === "approver") {
      setUserRole(role)
    }
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Header onLoginSuccess={handleLoginSuccess} />

        <Routes>
          <Route path="/" element={<Home userRole={userRole} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/information" element={<Information />} />
          <Route path="/about" element={<About />} />
          <Route path="/refund" element={<Refund />} />



        </Routes>
      </div>
    </HashRouter>
  )
}
