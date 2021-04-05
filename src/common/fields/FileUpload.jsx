import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux'
// import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDropzone } from 'react-dropzone'
import Label from './label'

// Path within Database for metadata (also used for file Storage path)
const metaPath = 'assets'

const FileUpload = ({
  children,
  hint,
  className,
  // type,
  label,
  // placeholder,
  // required,
  field: { name, value },
  storagePath = 'uploads',
  maxSize = 5242880,
  multiple = false,
  form: { errors, touched, setFieldValue }
}) => {
  // const firebase = useFirebase()
  // useFirestoreConnect(metaPath)

  const onDrop = useCallback(
    (acceptedFiles) => {
      // @TODO: Refactor to use try/catch and add error handling
      // @TODO: Troubleshoot react-redux-firebase uploadFile (single)
      // firebase
      //   .uploadFiles(storagePath, acceptedFiles, metaPath, { progress: true })
      //   .then((results) => {
      //     const newFiles = results.map((result) => {
      //       const file = {
      //         ...result.File,
      //         key: result.key
      //       }
      //       return file
      //     })

      //     multiple
      //       ? setFieldValue(name, value.concat(newFiles))
      //       : setFieldValue(name, newFiles[0])
      //   })
      console.log("DROP FILE")
    },
    [storagePath, multiple, name, value, setFieldValue]
  )

  const {
    getRootProps,
    getInputProps,
    // acceptedFiles,
    isDragActive,
    isDragReject,
    fileRejections
  } = useDropzone({
    accept: 'image/jpg, image/jpeg, image/png',
    multiple,
    minSize: 0,
    maxSize,
    onDrop
  })

  const isFileTooLarge =
    fileRejections.length > 0 && fileRejections[0].size > maxSize

  function onFileDelete(file) {
    console.log("File Delete:", file)
    // firebase
    //   .deleteFile(file.fullPath, `${metaPath}/${file.key}`)
    //   .then((results) => console.log(results))
    // multiple
    //   ? setFieldValue(
    //       name,
    //       value.filter((value) => value.key !== file.key)
    //     )
    //   : setFieldValue(name, null)
  }

  return (
    <>
      <div className={`form-group file-uploader ${className}`}>
        {children ? (
          <div
            {...getRootProps({
              className: 'dropzone'
            })}
          >
            <input {...getInputProps()} />
            {value ? (
              <div className="image-container editable">
                <div className="image">
                  <div
                    className="bg-image aspect-16x9"
                    style={{
                      backgroundImage: `url(${value.downloadUrl})`
                    }}
                  >
                    {value.name}
                  </div>
                </div>
                <div className="middle">
                  <p>Replace Image</p>
                  <button
                    type="button"
                    className="btn btn-danger btn-circle"
                    // onClick={() => onFileDelete(value)}
                    // onKeyPress={handleKeyPress}
                    tabIndex={0}
                  >
                    <i className="fas fa-times icon"></i>
                  </button>
                </div>
              </div>
            ) : (
              <>{children}</>
            )}
          </div>
        ) : (
          <>
            {value && value.downloadUrl ? (
              <>
                <Label label={label} hint={hint} />
                <div className="image-container">
                  <div className="image">
                    <div
                      className="bg-image aspect-16x9"
                      style={{
                        backgroundImage: `url(${value.downloadUrl})`
                      }}
                    >
                      {value.name}
                    </div>
                  </div>
                  <div className="middle">
                    <p>Remove Image</p>
                    <button
                      type="button"
                      className="btn btn-danger btn-circle"
                      onClick={() => onFileDelete(value)}
                      // onKeyPress={handleKeyPress}
                      tabIndex={0}
                    >
                      <i className="fas fa-times icon"></i>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Label label={label} hint={hint} />
                <div
                  {...getRootProps({
                    className: 'dropzone h-200'
                  })}
                >
                  <input {...getInputProps()} />
                  {!isDragActive && (
                    <>
                      <span>
                        Drag 'n' drop your file here, or click to select a file
                      </span>
                      <button
                        type="button"
                        className="btn btn-primary btn-circle"
                      >
                        <i className="fas fa-plus icon"></i>
                      </button>
                    </>
                  )}
                  {isDragActive &&
                    (isDragReject ? (
                      <span>Sorry... only certain filetypes are accepted!</span>
                    ) : (
                      <span>Drop the file here...</span>
                    ))}
                  {isFileTooLarge && <span>File is too large.</span>}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

FileUpload.propTypes = {
  hint: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  // type: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  // placeholder: PropTypes.instanceOf(Object),
  // required: PropTypes.instanceOf(Object),
}

export default FileUpload
