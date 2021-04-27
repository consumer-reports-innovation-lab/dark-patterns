import React from "react"
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Goals = ({ goals }) => {

  return (
    <div id="goals">
      <div className="row">
        <div className="col-12 col-md-8">
          <h2>Our Goals</h2>
          <ul className="icon-list">
            {goals && goals.map(goal => {
              const {title, description, iconPath} = goal
              const imageData = getImage(iconPath)

              return (
                <li className="align-items-start">
                  <GatsbyImage
                    image={imageData}
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
