import React from "react"
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageGroup } from "semantic-ui-react"

const featuredExamples = [
  {
    slug: "smart-devices",
    name: "Smart Devices",
    description: "Enter description",
    imageSrc: "/img/placeholder-example.png",
    link: "/"
  }
]

const FeaturedExamples = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Examples in Everyday Life</h2>
          </div>
          <div className="col-12">
            <div
              id="patternExamples"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {featuredExamples && featuredExamples.map((example, index) => {
                  const { slug, name } = example
                  return (
                    <button
                      key={`${slug}-button`}
                      type="button"
                      data-bs-target="#patternExamples"
                      data-bs-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                      aria-current={index === 0 ? 'true' : ''}
                      aria-label={name}
                    >
                      {name}
                    </button>
                  )
                })}
              </div>

              <div className="carousel-inner">
                {featuredExamples && featuredExamples.map((example, index) => {
                  const { slug, name, description, imageSrc, link } = example
                  return (
                    <div key={`${slug}-item`} className="carousel-item">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <img
                            src="/img/placeholder-example.png"
                            alt="placeholder"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-12 col-md-6 text-center">
                          <h3>{name}</h3>
                          <p>{description}</p>
                          <Link to={link} className="btn btn-primary">Examples</Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedExamples
