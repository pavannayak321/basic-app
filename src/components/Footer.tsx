export default function Footer() {
  return (
    <footer className="bg-[#0b1324] text-gray-300 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">
            BuildForce<span className="text-orange-500">Link</span>
          </h4>
          <p className="text-sm">
            BuildForceLink is a direct connection platform for contractors and
            labor providers across India.
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>For Contractors</li>
            <li>For Labor Providers</li>
            <li>Safety Guidelines</li>
            <li>Community Standards</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Contact Us</h5>
          <p className="text-sm">admin@buildforcelink.com</p>
          <p className="text-sm">Hyderabad, India</p>
        </div>
      </div>

      <p className="text-center text-xs mt-10 text-gray-500">
        © 2023 BuildForceLink. All rights reserved.
      </p>
    </footer>
  )
}
