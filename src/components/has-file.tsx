import { X } from 'lucide-react'

interface HasFileProps {
  file: File | null
  removeFile: () => void
}

export function HasFile({ file, removeFile }: HasFileProps) {
  return (
    <div
      className={`w-[320px] lg:w-[500px] h-full p-5 rounded-lg border-dashed border-2 border-grey-200 hover:border-grey-100 hover:bg-grey-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400`}
    >
      <div className="w-full p-4 flex items-center justify-between gap-3 rounded-md shadow-md bg-grey-400 mb-10">
        <span className="text-md text-white-200 text-start overflow-hidden whitespace-nowrap text-ellipsis">
          {file?.name}
        </span>

        <button type="button" onClick={removeFile}>
          <X className="text-grey-100 hover:text-red-500 transition-colors" size={20} />
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-mint-200 hover:bg-mint-100 text-white-100 py-2 px-8 rounded-md transition-colors"
        >
          Convert
        </button>
      </div>
    </div>
  )
}
