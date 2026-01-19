import ConnectionCard from "./ConnectionCard"
import { connections } from "@/data/connections"

export default function Connections() {
  return (
    <section className="py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-2">
        Available Connections
      </h3>
      <p className="text-center text-gray-500 mb-10">
        Click on any card to flip and view profile details
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {connections.map((c) => (
          <ConnectionCard key={c.id} data={c} />
        ))}
      </div>
    </section>
  )
}
