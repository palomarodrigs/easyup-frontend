import { useState } from 'react'
import { Copy } from 'lucide-react'

interface CopyToClipboardProps {
  transcription: string
}

export function CopyToClipboard({ transcription }: CopyToClipboardProps) {
  const [isCopying, setIsCopying] = useState<boolean>(false)
  const [copy, setCopy] = useState<string>('Copy')

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(transcription)
    setCopy('Copied')
    setTimeout(() => {
      setCopy('Copy')
    }, 2000)
  }

  return (
    <button
      onClick={handleCopyToClipboard}
      onMouseEnter={() => setIsCopying(true)}
      onMouseLeave={() => setIsCopying(false)}
      className="relative p-2 bg-grey-400 hover:bg-grey-200/30 text-white-100 rounded-md duration-200 focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400"
    >
      {isCopying && (
        <span className="absolute top-[-15px] left-[40px] transform -translate-x-1/2 bg-grey-200 text-xs text-white-100 p-1 rounded-md">
          {copy}
        </span>
      )}

      <Copy size={15} />
    </button>
  )
}
