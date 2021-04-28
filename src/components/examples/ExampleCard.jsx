import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ExampleCard = ({ example: { uri, date, patternAttributes: {affiliatedCompany, summary} } }) => {

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-date">{date}</p>
        <p className="card-title">{affiliatedCompany}</p>
        <p className="card-text">{summary}</p>
        {console.log(summary)}
        <Link to={uri} className="card-link">Explore Dark Pattern</Link>
      </div>
    </div>
  )
}

ExampleCard.propTypes = {
  example: PropTypes.instanceOf(Object)
}


export default ExampleCard
