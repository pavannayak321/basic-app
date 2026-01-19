import LeftAuthPanel from "@/components/LeftAuthPanel"
import MainHomeContent from "@/components/MainHomeContent"

export default function Home({
  userRole,
}: {
  userRole: "contractor" | "labour" | "approver" | null
}) {
  // BEFORE LOGIN → show normal home page
  if (!userRole) {
    return <MainHomeContent />
  }

  // AFTER LOGIN → split layout
  return (
    <div className="flex">
      <LeftAuthPanel role={userRole} />
      <div className="flex-1">
        <MainHomeContent />
      </div>
    </div>
  )
}
