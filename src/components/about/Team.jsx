import React from "react"
import PropTypes from 'prop-types'
import { useTeam } from '../../hooks/useTeam'

const Team = () => {
  const { team } = useTeam()

  return (
    <div id="team">
          <div className="row mb-4">
            <div className="col-12">
              <h2>Team</h2>
            </div>
          </div>
          <div className="row">
            {team && team.map(member => {
              const { id, title, teamOptions: {jobTitle, organization} } = member

              return (
                <div key={id} className="col-12 col-md-6 my-4">
                  <h3 className="text-dark">{title}</h3>
                  <p>{jobTitle} {organization} </p>
                </div>
              )
            })}
          </div>
        </div>
  )
}

Team.propTypes = {

}

Team.defaultProps = {

}

export default Team
