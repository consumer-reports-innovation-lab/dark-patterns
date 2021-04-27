import React from "react"
import PropTypes from 'prop-types'

const Team = ({ team }) => {
  return (
    <div id="team">
          <div className="row mb-4">
            <div className="col-12">
              <h2>Team</h2>
            </div>
          </div>
          <div className="row">
            {team && team.map(member => {
              return (
                <div key={member.slug} className="col-12 col-md-6 my-4">
                  <h3 className="text-dark">{member.name}</h3>
                  <p>{member.org} {member.title}</p>
                </div>
              )
            })}
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
