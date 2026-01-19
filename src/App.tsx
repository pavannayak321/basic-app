import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "@/components/Header"
import Home from "@/components/Home"
import Services from "@/pages/Services"
import Pricing from "@/pages/Pricing"
import Policy from "@/pages/policy"

type UserRole = "contractor" | "labour" | "approver" | null

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null)

  // IMPORTANT: role must be string because Header sends string
  const handleLoginSuccess = (role: string) => {
    if (role === "contractor" || role === "labour" || role === "approver") {
      setUserRole(role)
    }
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header onLoginSuccess={handleLoginSuccess} />

        <Routes>
          <Route
            path="/"
            element={<Home userRole={userRole} />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/policy"
            element={<Policy />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
