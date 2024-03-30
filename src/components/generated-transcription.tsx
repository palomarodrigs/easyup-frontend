import { useEffect, useState } from 'react'
import { CopyToClipboard } from './copy-to-clipboard'
import { Divider } from './divider'
import ReactMarkdown from 'react-markdown'

interface TranscriptionDisplayProps {
  imageFile: File | null
  transcription: string
  onRestart: () => void
}

export function GeneratedTranscription({
  imageFile,
  transcription,
  onRestart,
}: TranscriptionDisplayProps) {
  const [completion, setCompletion] = useState<string>('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setCompletion(transcription.substring(0, i))
      i++
      if (i > transcription.length) {
        clearInterval(interval)
      }
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [transcription])

  return (
    <main className="w-[320px] lg:w-[500px] h-full p-5 rounded-lg bg-grey-500">
      <section className="flex flex-col gap-3 mb-5">
        <article className="flex items-center justify-between">
          <span className="text-md text-grey-100 overflow-hidden whitespace-nowrap text-ellipsis">
            {imageFile?.name}
          </span>

          <CopyToClipboard transcription={transcription} />
        </article>

        <Divider />

        <div className="max-h-[150px] overflow-auto text-justify text-white-200 pr-2">
          <ReactMarkdown>{completion}</ReactMarkdown>
        </div>
      </section>

      <div className="flex justify-end">
        <button
          onClick={() => onRestart()}
          className="p-2 bg-grey-400 hover:bg-grey-200/30 text-white-100 rounded-md duration-200 focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400"
        >
          Start over
        </button>
      </div>
    </main>
  )
}
