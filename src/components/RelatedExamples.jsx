import React from "react"
import { Link } from "gatsby"
import ExampleCard from './examples/ExampleCard'

const RelatedExamples = ({ example, heading }) => {
  const nodes = example.categories.nodes.length > 0
    ? example.categories.nodes
    : example.tags.nodes

  const relatedExamples = nodes.map(node => {
    const { contentNodes: { nodes } } = node
    const qualifiedPosts = nodes.filter(rp => rp.id !== example.id)
    return qualifiedPosts
  }).reduce((a, b) => [...a, ...b]).slice(0, 3)

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{heading}</h2>
          </div>
        </div>
        <div className="row">
          {relatedExamples.length > 0 && (
            <div className="row">
              {relatedExamples.map(example => {

                return (
                  <div className="col-12 col-md-4 my-4">
                    <ExampleCard example={example} className="card-light" />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RelatedExamples;
