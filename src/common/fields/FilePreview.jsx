import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
// import { formatFileSize } from '../utils/helpers'

const FilePreview = ({ file, preview, handleDelete  }) => {
  const { name, lastModifiedDate, size } = file
  return (
    <div className={`card mt-5`} style={{ maxWidth: '24rem', margin: '1rem' }}>
      <button
        className="btn-close"
        onClick={() => handleDelete()}
      />
      <img src={preview} className="card-img-top" alt="" />
      <div className="card-footer">
         <p className="py-3 ">
          {name}<br />
          <small className="text-muted pt-4">Last updated <TimeAgo date={lastModifiedDate} /></small>
        </p>
      </div>
    </div>
  )
}

FilePreview.propTypes = {
  filePreviews: PropTypes.instanceOf(Array)
}

export default FilePreview
