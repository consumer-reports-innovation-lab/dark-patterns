import React, { useCallback, useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import { createMediaFromFile } from '../wp/wpActions'
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

  const onDrop = useCallback(acceptedFiles => {
    setFieldValue(name, acceptedFiles)
  }, [storagePath, multiple, name, value, setFieldValue])

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
        <div className="card-group">
          {value && value.map(file => {
            return <FilePreview key={file.path} file={file} preview={URL.createObjectURL(file)} />
          })}
        </div>
      </div>
    </>
  )
}

// FileUpload.propTypes = {

// }

export default FileUpload
