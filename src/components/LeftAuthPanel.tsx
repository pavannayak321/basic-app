import ContractorPanel from "@/components/panels/ContractorPanel"
import LabourPanel from "@/components/panels/LabourPanel"
import ApproverPanel from "@/components/panels/ApproverPanel"

export default function LeftAuthPanel({ role }: { role: string }) {
  console.log("ROLE RECEIVED:", role)

  const renderPanel = () => {
    if (role === "contractor") return <ContractorPanel />
    if (role === "labour") return <LabourPanel />
    if (role === "approver" || role === "approval")
      return <ApproverPanel />
    return null
  }

  return (
    <div className="w-[30%] min-h-screen border-r bg-gray-50 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6 capitalize">
        {role} Panel
      </h2>

      {renderPanel()}
    </div>
  )
}
