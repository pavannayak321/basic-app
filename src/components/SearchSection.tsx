import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function SearchSection() {
  return (
    <section className="text-center py-14 border-t">
      <h3 className="text-2xl font-semibold mb-2">
        Find connections in your area
      </h3>
      <p className="mb-8">
        Search radius: <span className="text-orange-500 font-semibold">10</span>{" "}
        km
      </p>

      <div className="max-w-xl mx-auto">
        <Slider defaultValue={[10]} max={50} step={1} />
        <div className="flex justify-between text-sm mt-2">
          <span>1 km</span>
          <span>50 km</span>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <Button variant="outline">📍 Detect My Location</Button>
        <Button className="bg-orange-500 hover:bg-orange-600">
          🔍 Find Labor Connections
        </Button>
      </div>
    </section>
  )
}
