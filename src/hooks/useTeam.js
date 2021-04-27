import { useStaticQuery, graphql } from "gatsby"

export const useTeam = () => {
  const data = useStaticQuery(graphql`
      query TeamMembers {
        allWpTeamMember(sort: {order: DESC, fields: title}) {
          edges {
            node {
              id
              title
              teamOptions {
                jobTitle
                organization
              }
            }
          }
        }
      }
    `
  )
  const team = data.allWpTeamMember.edges

  return { team }
}
