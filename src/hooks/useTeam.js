import { useStaticQuery, graphql } from "gatsby"

export const useTeam = () => {
  const data = useStaticQuery(graphql`
      query TeamMembers {
        allWpTeamMember(sort: {order: DESC, fields: date}) {
          edges {
            node {
              id
              title
              date
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
  const team = data.allWpTeamMember.edges.map(item => item.node)

  return { team }
}
