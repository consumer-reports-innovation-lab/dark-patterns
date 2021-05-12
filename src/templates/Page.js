import React from 'react'
import { graphql } from 'gatsby'
import parse from "html-react-parser"
import CTA from '../components/about/CTA'
import Layout from '../containers/Layout'
import SEO from '../containers/seo'

const Page = ({ data: { page } }) => {
  const { title, content } = page

  return (
    <Layout>
      <SEO pageSEO={page.seo} />
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1 className="mb-5">{title}</h1>

              {content && parse(content)}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageSEO
      id
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default Page
