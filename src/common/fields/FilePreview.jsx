import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import { formatFileSize } from '../utils/helpers'

const FilePreview = ({ file, preview }) => {
  const { name, lastModifiedDate, size } = file
  return (
    <div key={`file_${i}`} className={`card`} style={{ maxWidth: '24rem', margin: '1rem' }}>
      <img src={preview} className="card-img-top" alt="" />
      <div className="card-body">
        <p className="p-3 text-small">
          <strong>filename:</strong> {name}<br />
          <strong>size:</strong> {formatFileSize(size)}<br />
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated <TimeAgo date={lastModifiedDate} /></small>
      </div>
    </div>
  )
}

FilePreview.propTypes = {
  filePreviews: PropTypes.instanceOf(Array)
}

export default FilePreview
