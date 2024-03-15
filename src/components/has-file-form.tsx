import { X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { api } from '../lib/axios'

interface HasFileProps {
  imageFile: File | null
  removeFile: () => void
  onImageUploaded: (transcription: string) => void
}

export function HasFileForm({ imageFile, removeFile, onImageUploaded }: HasFileProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleUploadImage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!imageFile) {
      return
    }

    setIsLoading(true)

    const data = new FormData()
    data.append('file', imageFile)

    const response = await api.post('/upload', data)
    const imageId = response.data.image.id

    const generateTranscription = await api.post(`/upload/${imageId}/transcription`)
    const transcription = generateTranscription.data.transcription
    onImageUploaded(transcription)
  }

  return (
    <form onSubmit={handleUploadImage}>
      <div
        className={`w-[320px] lg:w-[500px] h-full p-5 rounded-lg border-dashed border-2 border-grey-200 hover:border-grey-100 hover:bg-grey-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400`}
      >
        <div className="w-full p-4 flex items-center justify-between gap-3 rounded-md shadow-md bg-grey-400 mb-10">
          <span className="text-md text-white-200 text-start overflow-hidden whitespace-nowrap text-ellipsis">
            {imageFile?.name}
          </span>

          <button
            disabled={isLoading}
            type="button"
            onClick={removeFile}
            className="text-grey-100 enabled:hover:text-red-500 transition-colors disabled:cursor-not-allowed"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-mint-200 hover:bg-mint-100 text-white-100 py-2 px-8 rounded-md cursor-pointer transition-colors disabled:cursor-not-allowed disabled:bg-mint-200/60"
          >
            {isLoading ? 'Converting...' : 'Convert'}
          </button>
        </div>
      </div>
    </form>
  )
}
