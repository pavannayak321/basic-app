import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import AvailableConnections from "./AvailableConnections"

export default function MainHomeContent() {
  const [radius, setRadius] = useState(10)

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-2">
          BuildForce<span className="text-orange-500">Link</span>
        </h1>

        <p className="text-gray-600 mb-10">
          Find contractors and labour near you
        </p>

        <div className="flex justify-center gap-6 mb-14">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 px-6 py-6 text-base"
          >
            👷 I’m a Contractor looking for Labor
          </Button>

          <Button
            variant="outline"
            className="px-6 py-6 text-base"
          >
            👥 I’m Labor looking for Contractors
          </Button>
        </div>

        <hr />
      </section>

      {/* SEARCH SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Find connections in your area
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Search radius:{" "}
          <span className="text-orange-500 font-semibold">
            {radius} km
          </span>
        </p>

        <div className="max-w-md mx-auto mb-10">
          <Slider
            defaultValue={[radius]}
            min={1}
            max={50}
            step={1}
            onValueChange={(val) => setRadius(val[0])}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>1 km</span>
            <span>50 km</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            className="px-6 py-6 text-base"
          >
            📍 Detect My Location
          </Button>

          <Button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-6 text-base"
          >
            🔍 Find Contractor Connections
          </Button>
        </div>
      </section>

      {/* AVAILABLE CONNECTIONS */}
      
 <section className="max-w-5xl mx-auto px-6 py-20 text-center">
  <h2 className="text-2xl font-semibold mb-2">
    Available Connections
  </h2>
  <p className="text-gray-600 mb-6">
    Click on any card to flip and view profile details
  </p>

  <AvailableConnections />
</section>

      {/* FOOTER */}
      <footer className="bg-[#0b1524] text-gray-300 px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">
              BuildForce<span className="text-orange-500">Link</span>
            </h3>
            <p className="text-sm leading-relaxed">
              BuildForceLink is a direct connection platform for
              contractors and labor providers. We're building
              India's largest construction workforce network.
            </p>
            <p className="text-sm mt-4">
              Launching soon in major cities across the country.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>For Contractors</li>
              <li>For Labor Providers</li>
              <li>Safety Guidelines</li>
              <li>Community Standards</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>📧 support@buildforcelink.com</li>
              <li>📍 Hyderabad, India</li>
              <li>🕒 Coming Soon – Your City</li>
              <li>📦 Scatter at your place – Soon</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-12">
          © 2023 BuildForceLink. All rights reserved. | For the Construction Community
        </div>
      </footer>
    </main>
  )
}
