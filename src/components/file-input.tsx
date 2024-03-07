import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { HasFile } from './has-file'
import { Input } from './input'

export function FileInput() {
  const [file, setFile] = useState<File | null>(null)

  const removeFile = useCallback(() => {
    setFile(null)
  }, [file])

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0])
  }, [])

  const dropzone = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
  })

  if (file) return <HasFile file={file} removeFile={removeFile} />

  return <Input dropzone={dropzone} />
}
