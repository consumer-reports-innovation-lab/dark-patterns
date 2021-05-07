import React, { useCallback, useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import Label from './label'
import FilePreview from './FilePreview'

// Path within Database for metadata (also used for file Storage path)
const metaPath = 'assets'

const FileUpload = ({
  hint,
  className,
  type,
  label,
  placeholder,
  required,
  field: { name, value },
  storagePath = 'uploads',
  maxSize = 5242880,
  multiple = false,
  form: { errors, touched, setFieldValue },
}) => {
  const [filePreviews, setFilePreviews] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      if (multiple) {
        const localFiles = acceptedFiles.map((file) =>
          URL.createObjectURL(file)
        );
        setFieldValue(name, acceptedFiles);
        setFilePreviews(localFiles);
      } else {
        setFieldValue(name, acceptedFiles);
        setFilePreviews([URL.createObjectURL(acceptedFiles[0])]);
      }
    }
  }, [storagePath, multiple, name, value, setFieldValue])

  useEffect(() => {
    // if we have multiple files
    if (value && value instanceof Array) {
      const previews = value.map(imageLocation => {
        console.log("Previews:", imageLocation)
        // Where are these previews going to be stored?
        return imageLocation.path
      })
      setFilePreviews(previews)
    }
    // if we have a single file
    else if (value && !(value instanceof File)) {
      console.log(value)
      const imagePath = []

      setFilePreviews(imagePath)
    }
  }, [value])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    rejectedFiles,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    multiple,
    minSize: 0,
    maxSize,
    onDrop,
  })

  const isFileTooLarge = rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize

  function onFileDelete(file) {
    console.log("Delete File:", file)
    multiple
      ? setFieldValue(name, value.filter((value) => value.key !== file.key),)
      : setFieldValue(name, null)
  }

  return (
    <>
      <div className={className}>
        <Label label={label} hint={hint} />
        <input {...getInputProps()} />
        <div {...getRootProps({ className: `dropzone ${multiple ? 'isMulti' : ''}` })}>
          <div className={isDragReject ? 'bg-danger p-5' : 'bg-light p-5'}>
            <p className="text-center py-2 border border-light shadow bg-mid text-white">
              {!isDragActive && <span>Drag 'n' drop some files here, or click to select files</span>}
              {isDragActive
                && (isDragReject ? (
                  <span>
                    {multiple
                      ? 'Sorry... only certain filetypes are accepted!'
                      : 'Sorry... only one file please!'
                    }
                  </span>
                ) : (
                  <span>Drop here ...</span>
                ))}
            </p>
            {isFileTooLarge && <div className="text-danger mt-2">File is too large.</div>}
          </div>
        </div>
        {value && (
          <div className="card-group">
            <FilePreview files={value} />
          </div>
        )}
      </div>
    </>
  )
}

// FileUpload.propTypes = {

// }

export default FileUpload
