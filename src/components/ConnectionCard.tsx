import { Button } from "@/components/ui/button"


type ConnectionData = {
  name: string
  role: string
  image?: string
  skills: string[]
  distance: string
}

export default function ConnectionCard({ data }: { data: ConnectionData }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition w-[330px] overflow-hidden">
      
      {/* Image */}
      <img
        src={data.image || "/images/default-user.jpg"}
        alt={data.name}
        className="h-44 w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/images/default-user.jpg"
        }}
      />

      {/* Content */}
      <div className="p-6 text-center">
        <h4 className="font-semibold text-lg">{data.name}</h4>
        <p className="text-gray-500 text-sm mb-4">{data.role}</p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {data.skills?.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Distance */}
        <p className="text-sm mb-4">📍 {data.distance}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-green-500 hover:bg-green-600">
            🤝 Hire
          </Button>
          <Button variant="outline" className="flex-1">
            👁 View Details
          </Button>
        </div>
      </div>
    </div>
  )
}
