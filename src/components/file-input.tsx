import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { GeneratedTranscription } from './generated-transcription'
import { HasFileForm } from './has-file-form'
import { Input } from './input'

export function FileInput() {
  const [file, setFile] = useState<File | null>(null)
  const [transcription, setTranscription] = useState<string>('')

  const removeFile = useCallback(() => {
    setFile(null)
  }, [file])

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0])
  }, [])

  const onRestart = useCallback(() => {
    setFile(null)
    setTranscription('')
  }, [file, setFile, setTranscription])

  const dropzone = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
  })

  if (transcription) {
    return (
      <GeneratedTranscription
        imageFile={file}
        transcription={transcription}
        onRestart={onRestart}
      />
    )
  }

  if (file)
    return (
      <HasFileForm
        imageFile={file}
        removeFile={removeFile}
        onImageUploaded={setTranscription}
      />
    )

  return <Input dropzone={dropzone} />
}
