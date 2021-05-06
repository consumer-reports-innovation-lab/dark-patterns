import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux'
// import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDropzone } from 'react-dropzone'
import Label from './label'

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
  // const firebase = useFirebase()
  // useFirestoreConnect(metaPath)

  const onDrop = useCallback((acceptedFiles) => {
    console.log("Accepted Files:", acceptedFiles)
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

        {multiple ? (
          <div className="row">
            <div className="col-12 col-md-6">
              <div {...getRootProps({ className: `dropzone ${multiple ? 'isMulti' : ''}` })}>
                <div className={isDragReject ? 'bg-danger p-5' : 'bg-light p-5'}>
                  <p className="text-center py-2 border border-light shadow bg-mid text-white">
                    {!isDragActive && <span>Drag 'n' drop some files here, or click to select files</span>}
                    {isDragActive
                      && (isDragReject ? (
                        <span>Sorry... only certain filetypes are accepted!</span>
                      ) : (
                        <span>Drop the files here ...</span>
                      ))}
                  </p>
                  {isFileTooLarge && <div className="text-danger mt-2">File is too large.</div>}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-group mb-0">
                {value
                  && value.map((file) => (
                    <li className="list-group-item" key={file.name + file.lastModified}>
                      <div className="d-flex align-items-center">
                        <img src={file.downloadURL} alt={file.name} style={{ width: '50px' }} />
                        <span className="ml-3">
                          {file.name}
:
                          {file.lastModified}
                        </span>
                        <button type="button" className="btn btn-danger ml-auto" onClick={() => onFileDelete(file)}>
                          <i className="ri-delete-bin-line" />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            {value ? (
              <div className="d-flex align-items-center">
                <img src={value.downloadURL} alt={value.name} style={{ width: '50px' }} />
                <span className="ml-3">
                  {value.name}
:
                  {value.lastModified}
                </span>
                <button type="button" className="btn btn-danger ml-auto" onClick={() => onFileDelete(value)}>
                  <i className="ri-delete-bin-line" />
                </button>
              </div>
            ) : (
              <div {...getRootProps({ className: `dropzone ${multiple ? 'isMulti' : ''}` })}>
                <div className={isDragReject ? 'bg-danger p-5' : 'bg-light p-5'}>
                  <p className="text-center py-2 border border-light shadow bg-mid text-white">
                    {!isDragActive && <span>Drag 'n' drop or click to select file</span>}
                    {isDragActive
                      && (isDragReject ? (
                        <span>Sorry... only one file please!</span>
                      ) : (
                        <span>Drop the files here ...</span>
                      ))}
                  </p>
                  {isFileTooLarge && <div className="text-danger mt-2">File is too large.</div>}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

// FileUpload.propTypes = {

// }

export default FileUpload
