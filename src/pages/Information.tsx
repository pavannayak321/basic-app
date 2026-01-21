import { useState } from "react"
import { Folder, FileText } from "lucide-react"

const data = [
  {
    name: "Adda_information",
    files: ["Overview.pdf", "Process.docx"]
  },
  {
    name: "Policy Information",
    files: ["Privacy_Policy.pdf", "Terms_Conditions.pdf"]
  },
  {
    name: "Startup_India_Documentation",
    files: ["DPIIT.pdf", "Incorporation.pdf"]
  }
]

export default function Information() {
  const [openFolder, setOpenFolder] = useState<any>(null)

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Application Documentations
      </h1>

      {!openFolder && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((folder) => (
            <div
              key={folder.name}
              onClick={() => setOpenFolder(folder)}
              className="cursor-pointer border rounded-xl p-6 bg-white shadow hover:shadow-lg transition"
            >
              <Folder className="h-12 w-12 text-yellow-500 mx-auto" />
              <p className="text-center mt-3 font-medium">
                {folder.name}
              </p>
            </div>
          ))}

          <div className="border rounded-xl p-6 bg-white shadow">
            <FileText className="h-12 w-12 text-blue-500 mx-auto" />
            <p className="text-center mt-3 font-medium">
              Construction_Tools.docx
            </p>
          </div>
        </div>
      )}

      {openFolder && (
        <div>
          <button
            onClick={() => setOpenFolder(null)}
            className="text-orange-600 mb-4"
          >
            ← Back
          </button>

          <h2 className="text-xl font-semibold mb-4">
            {openFolder.name}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {openFolder.files.map((file: string) => (
              <div
                key={file}
                className="border rounded-lg p-4 text-center hover:bg-gray-50"
              >
                <FileText className="h-10 w-10 text-blue-500 mx-auto" />
                <p className="mt-2 text-sm">{file}</p>
                <button className="text-xs text-blue-600 mt-1">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
