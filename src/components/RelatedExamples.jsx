import React from "react"
import { Link } from "gatsby"
import ExampleCard from './examples/ExampleCard'

const RelatedExamples = ({ example }) => {
  // Related Example Logic
  const nodes = post.tags.nodes.length > 0
    ? post.tags.nodes
    : post.categories.nodes

  const relatedExamples = nodes.map(node => {
    const { posts: { nodes } } = node
    const qualifiedPosts = nodes.filter(rp => rp.id !== post.id)
    return qualifiedPosts
  }).reduce((a, b) => [...a, ...b]).slice(0, 3)

  return (
    <div className="row">
      {relatedExamples.length > 0 ? (
        <div className="row">
          {relatedExamples.map(example => {

            return (
              <div className="col-12 col-md-4 my-4">
                <ExampleCard example={example} className="card-light" />
              </div>
            )
          })}
        </div>
      ) : (
        <div className="row text-center">
          <div className="col-12">
            <h1 className="text-dark">Sound Familiar?</h1>
            <Link to="/report" className="btn btn-primary">Report a Pattern</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedExamples;
