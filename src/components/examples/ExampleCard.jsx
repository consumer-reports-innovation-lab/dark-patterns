import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// const ExampleCard = ({ example: { uri, date, patternAttributes: {affiliatedCompany, summary} }, }) => {
const ExampleCard = ({ example }) => {
const {
  uri,
  title,
  date,
  categories,
  patternAttributes: {
    affiliatedCompany,
    summary,
    industry,
  },
  featuredImage: {
    node: {
      localFile
    }
  }
}= example


  return (
    <Link to={uri.replace('example', 'sightings')} >
    <div className="card">
      <div className="card-body">
        <div className="card-image">
          <GatsbyImage image={getImage(localFile)} alt={title} />
        </div>
        <p className="card-date">{date}</p>
        <p className="card-company">{affiliatedCompany}</p>
        <p className="card-title">{title}</p>
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
