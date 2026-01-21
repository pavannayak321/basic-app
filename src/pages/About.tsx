export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        About BuildForce<span className="text-orange-500">Link</span>
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
        BuildForceLink is a digital platform designed to connect construction
        contractors, labourers, and service providers in one seamless network.
        Our goal is to simplify the hiring process in the construction industry
        by making it fast, transparent, and location-based.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To empower contractors and workers by providing a reliable digital
            platform that helps them find the right people at the right time.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-3">What We Do</h3>
          <p className="text-gray-600">
            We enable contractors to discover skilled labourers nearby and help
            workers find verified projects. Our system supports location-based
            search, profiles, and secure connections.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-3">Why BuildForceLink</h3>
          <p className="text-gray-600">
            We reduce delays, improve trust, and create efficiency in the
            construction workforce by bringing everything into one smart
            platform.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 max-w-3xl">
          We envision BuildForceLink becoming India’s most trusted construction
          workforce platform, enabling millions of workers and contractors to
          collaborate with confidence, speed, and transparency.
        </p>
      </div>
    </div>
  )
}
