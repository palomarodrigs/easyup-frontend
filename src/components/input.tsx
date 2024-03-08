import { DropzoneState } from 'react-dropzone'
import { ImageUp, Info } from 'lucide-react'

interface InputProps {
  dropzone: DropzoneState
}

export function Input({ dropzone }: InputProps) {
  const { getRootProps, getInputProps, isDragActive } = dropzone
  return (
    <div
      {...getRootProps()}
      className={`w-[320px] lg:w-[500px] h-full rounded-lg border-dashed border-2 hover:border-mint-100 hover:bg-grey-500 duration-200 focus:outline-none focus:ring-2 focus:ring-mint-200 focus:ring-offset-2 focus:ring-offset-grey-400 ${
        isDragActive ? 'bg-grey-500 border-mint-100' : 'border-grey-200'
      }`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center p-[50px] lg:py-[100px] lg:px-[80px] w-full h-full">
          <ImageUp
            className={`w-10 h-10 mb-2 duration-200 ${
              isDragActive ? 'text-mint-200' : 'text-grey-100'
            }`}
          />

          {isDragActive ? (
            <>
              <p className="font-semibold text-mint-200 ">Drop to add</p>
            </>
          ) : (
            <>
              <p className="text-grey-100">
                <span className="font-semibold text-mint-200 hover:text-mint-100 duration-200">
                  Click to send
                </span>{' '}
                or drag it here
              </p>
            </>
          )}

          <p className="flex items-center gap-1 text-xs text-grey-200">
            <Info size={15} className="text-grey-200" />
            Supported formats: JPG, PNG
          </p>
        </div>
      </label>

      <input
        {...getInputProps()}
        className="sr-only"
        aria-description="Input upload file"
      />
    </div>
  )
}
