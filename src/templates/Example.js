import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from "html-react-parser"
import ZoomImage from 'react-medium-image-zoom'
import CTA from '../components/about/CTA'
import RelatedExamples from '../components/examples/RelatedExamples'

const Example = ({ data: { example } }) => {
  const {
    title,
    date,
    patternAttributes: {
      affiliatedCompany,
      description,
      industry,
    },
    featuredImage: {
      node: {
        localFile
      }
    },
    tags,
    categories
  } = example


  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <Link to="/sightings" className="back-btn">View All</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row  mt-5">
                <div className="col-4">
                  <h4>Company</h4>
                  <p className="text-small">{affiliatedCompany}</p>
                </div>
                <div className="col-4">
                  <h4>Date</h4>
                  <p className="text-small">{date}</p>
                </div>
                <div className="col-4">
                  <h4>Industry</h4>
                  <p className="text-small">{industry}</p>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Description</h4>
                  {parse(description)}
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Harm Type(s)</h4>
                  <ul className="icon-list">
                    {categories && categories.nodes.map(category => {
                      const { id, name } = category
                      return (
                        <li key={id}>{name}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-12">
                  <h4>Tags</h4>
                  {tags && tags.nodes.map(tag => {
                    const { id, name } = tag
                    return <div key={id} className="tag">{name}</div>
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 centered">
              <ZoomImage overlayBgColorEnd={`rgba(0,0,0,0.7)`}>
                <GatsbyImage image={getImage(localFile)} alt={title} />
              </ZoomImage>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <RelatedExamples example={example} heading={`More Sightings`} />

    </>
  )
}

export const pageQuery = graphql`
  query ExampleQuery($id: String!) {
    example: wpExample(id: { eq: $id }) {
      ...ExampleDetails
    }
  }
`
export default Example
