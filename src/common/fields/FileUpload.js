import React, { useCallback, useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
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
        <div className="form-group">
          <input className="form-control"  {...getInputProps()} />
          <div  {...getRootProps({ className: `dropzone ${multiple ? 'isMulti' : ''}` })}>
            <div className={isDragReject ? 'file-upload bg-danger p-5' : 'file-upload p-5'}>
              <div className="upload-icon"></div>
              <p className="text-center py-2">
                {!isDragActive && <span>Drag & Drop your file here<br />Or browse files on your device</span>}
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
          <p className="form-hint">{hint}</p>
        </div>
        <div className="card-group">
          {value && value.map(file => {
            return <FilePreview key={file.path} file={file} preview={URL.createObjectURL(file)} handleDelete={onFileDelete} />
          })}
        </div>
      </div>
    </>
  )
}

// FileUpload.propTypes = {

// }

export default FileUpload
