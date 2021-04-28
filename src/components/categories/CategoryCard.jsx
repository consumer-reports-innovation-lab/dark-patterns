import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const CategoryCard = ({ category, className }) => {
  const {name, description, uri} = category

  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p className="card-text">{description}</p>
        <Link to={uri} className="card-link">Explore This Dark Pattern</Link>
      </div>
    </div>
  )
}

CategoryCard.propTypes = {
  category: {
    name: PropTypes.string,
    description: PropTypes.string,
  },
  className: PropTypes.string
}
CategoryCard.defaultProps = {
  category: {
    name: '',
    description: '',
  },
  className: '',
}

export default CategoryCard
