import React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import parse from "html-react-parser"

const Example = ({ data: { example } }) => {
  const {
    title,
    date,
    patternAttributes: {
      affiliatedCompany,
      description,
      industry,
    }
  } = example

  const categories = false

  return (
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
                  {categories && categories.map(category => {

                    return (
                      <li>
                        <StaticImage
                          src="../common/assets/logos/logo-icon.svg"
                          alt=""
                          className="list-icon"
                        />
                        {category.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12">
                <h4>Tags</h4>
                {tags && tags.map(tag => {

                  return <div className="tag">{tag.name}</div>
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 centered">
            <img src="https://via.placeholder.com/800/000/000" alt="" />
          </div>
        </div>
      </div>
    </section>
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
