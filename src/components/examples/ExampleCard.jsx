import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
const ExampleCard = ({ example: { date, title, summary, url } }) => {

  return (
    <div className="card card-dark">
      <div className="card-body">
        <p className="card-date">{date}</p>
        <p className="card-title">{title}</p>
        <p className="card-text">{summary}</p>
        <Link to={url} className="card-link">Explore Dark Pattern</Link>
      </div>
    </div>
  )
}

ExampleCard.propTypes = {
  example: PropTypes.instanceOf(Object)
}

ExampleCard.defaultProps = {
  example: {
    date: '',
    title: 'needs title...',
    summary: 'needs summary...',
    url: '',
  }
}

export default ExampleCard
