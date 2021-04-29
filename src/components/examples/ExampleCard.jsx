import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ExampleCard = ({ example: { uri, date, patternAttributes: {affiliatedCompany, summary} } }) => {

  return (
    <Link to={uri} >
    <div className="card">
      <div className="card-body">
        <p className="card-date">{date}</p>
        <p className="card-title">{affiliatedCompany}</p>
        <p className="card-text">{summary}</p>
        <p className="card-link">Explore Dark Pattern</p>

      </div>
    </div>
    </Link>
  )
}

ExampleCard.propTypes = {
  example: PropTypes.instanceOf(Object)
}


export default ExampleCard
