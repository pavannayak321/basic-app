import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold mb-10">BuildForceLink</h2>

      <div className="flex justify-center gap-6">
        <Button
          variant="outline"
          className="px-8 py-6 border-orange-500 text-orange-600"
        >
          👷 I'm a Contractor looking for Labor
        </Button>

        <Button variant="outline" className="px-8 py-6">
          👥 I'm Labor looking for Contractors
        </Button>
      </div>
    </section>
  )
}
