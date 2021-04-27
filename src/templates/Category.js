import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CTA from '../components/about/CTA'

const Category = ({ data: { category } }) => {
  const { name, description, examples, categoryFeaturedImage } = category
  const imageData = categoryFeaturedImage?.featuredImage?.localFile

  return (
    <>
      <section className="pt-5">
        <div className="container mt-n5">
          <div className="row mb-4">
            <div className="col-12">
              <Link to="/harms" className="back-btn">View All Harms</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <h1>{name}</h1>
              <p>{description}</p>
              <Link to="/report" className="btn btn-primary">Report a Pattern</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          {imageData ? (
            <div className="row">
              <div className="col-12 col-lg-6">
                <GatsbyImage
                  image={imageData}
                  alt={`${name} Example`}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="p-5 border-left">
                  {description}
                </div>
              </div>
            </div>
          ) : (
            <div>Need Image Data...</div>
          )}

        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Sightings</h2>
            </div>
          </div>
          {examples && examples.length > 0 ? (
            <div className="row">
              {examples.map(example => {
                return (
                  <div className="col-12 col-md-4 my-4">
                    <ExampleCard example={example} className="card-light" />
                  </div>
                )
              })
              }
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-warning">
                  <h4 className="text-dark">There are no sightings associated with this category.</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {examples && examples.length > 0 ? (
        <section>
          <div className="container">
            <div className="row">
              {examples.map(example => {
                return (
                  <div className="col-12 col-md-4 my-4">
                    <ExampleCard example={example} className="card-light" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12">

              </div>
            </div>
          </div>
        </section>
      )}

    </>
  )
}

export const pageQuery = graphql`
  query CategoryQuery($id: String!) {
    # selecting the current page by id
    category: wpCategory(id: { eq: $id }) {
      id
      name
      description
      categoryFeaturedImage {
        featuredImageDescription
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
      examples: children {
        ... on WpDarkPattern {
          ...ExampleDetails
        }
      }
    }
  }
`

export default Category
