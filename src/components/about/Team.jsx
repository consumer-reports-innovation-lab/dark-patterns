import React from "react"
import PropTypes from 'prop-types'

const Team = ({ team }) => {
  return (
    <div id="team">
      <div className="row">
        <div className="col-12 col-md-8 ">
          <div className="row">
            <div className="col-12">
              <h2>Team</h2>
            </div>
          </div>
          <div className="row">
            {team && team.map(member => {
              return (
                <div key={member.slug} className="col-12 col-md-6">
                  <h4>{member.name}</h4>
                  <p>{member.title} - {member.org}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Team.propTypes = {
  team: PropTypes.instanceOf(Array)
}

Team.defaultProps = {
  team: []
}

export default Team
