import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const CategoryCard = ({ category, className }) => {
  const {name, description, uri} = category

  return (
    <Link to={uri} draggable="false" >
    <div className={`card ${className}`}>
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p className="card-text">{description}</p>
        <p className="card-link">Explore This Dark Pattern</p>

      </div>
    </div>
    </Link>
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
