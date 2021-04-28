import React from "react"
import PropTypes from 'prop-types'

const Goals = ({ goals }) => {

  return (
    <div id="our-values">
      <div className="row">
        <div className="col-12">
          <h2>Our Values</h2>
          <ul className="icon-list">
            {goals && goals.map(goal => {
              const {slug, title, description} = goal

              return (
                <li key={slug} className="align-items-start my-5">
                  <div>
                    <h3 className="font-secondary text-capitalize text-bold">{title}</h3>
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
