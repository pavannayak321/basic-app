import { useState } from "react"

type Props = {
  name: string
  role: string
  location: string
  experience: string
  skills: string[]
}

export default function FlipCard({
  name,
  role,
  location,
  experience,
  skills,
}: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-64 h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 bg-white border rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-xs mt-2">{location}</p>
          <p className="text-xs text-orange-500 mt-1">
            Click to view details
          </p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-orange-500 text-white rounded-lg shadow-md p-4 rotate-y-180 backface-hidden">
          <h3 className="font-semibold mb-1">{name}</h3>
          <p className="text-sm mb-2">{experience}</p>
          <ul className="text-xs list-disc pl-4 space-y-1">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
