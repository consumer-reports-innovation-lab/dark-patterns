import React from "react"
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"

const Goals = ({ goals }) => {

  return (
    <div id="goals">
      <div className="row">
        <div className="col-12 col-md-8">
          <h2>Our Goals</h2>
          <ul className="icon-list">
            {goals && goals.map(goal => {
              const {slug, title, description, iconPath} = goal

              return (
                <li key={slug} className="align-items-start">
                  <StaticImage
                    src={iconPath}
                    alt={title}
                    className="list-icon mt-2"
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

Goals.propTypes = {
  goals: PropTypes.instanceOf(Array)
}

Goals.defaultProps = {
  goals: []
}

export default Goals
