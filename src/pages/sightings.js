import React, { useState, useEffect } from "react"
// import PropTypes from 'prop-types'
import { useCategories } from '../hooks/useCategories'
import { useExamples } from '../hooks/useExamples'
import Intro from '../components/examples/Intro'
import ExampleCard from "../components/examples/ExampleCard"
import Layout from "../containers/Layout"
import SEO from '../containers/seo'
import Checkbox from '../common/fields/Checkbox'


const ExamplesPage = () => {
  const pageSEO = {
    title: "Dark Pattern Sightings"
  }
  const { categories } = useCategories()
  const { examples } = useExamples()
  const [filteredExamples, setFilteredExamples] = useState([])
  const [activeFilters, setActiveFilters] = useState([])

  useEffect(() => {
    const filtered = examples.filter(example => {
      const categoryIds = example.node.categories.nodes.map(node => node.id)
      return activeFilters.some(r => categoryIds.indexOf(r) >= 0)
    })

    !activeFilters.length ? setFilteredExamples(examples) : setFilteredExamples(filtered)

  }, [examples, activeFilters])

  const updateFilters = ({ name, checked }) => {
    const newFilters = checked ? [...activeFilters, name] : activeFilters.filter(f => f !== name)

    setActiveFilters(newFilters)
  }


  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <Intro />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">

              <h2>Harms</h2>
              <ul className="list-of-harms">
                {categories && categories.map(category => {
                  const { id, name, description } = category.node
                  if (name === "Uncategorized") return
                  return (
                    <li key={id}>
                      <label>
                        <Checkbox
                          name={id}
                          checked={activeFilters.includes(id)}
                          onChange={e => {
                            updateFilters(e.target)
                          }}
                        />
                        <span className="ms-2">{name}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>



            </div>

            <div className="col-12 col-md-8  col-lg-9">
              <div className="row">
                {filteredExamples && filteredExamples.map(example => {
                  const { id } = example.node
                  return (
                    <div key={id} className="col-12 col-lg-6 col-xxl-4 my-4">
                      <ExampleCard example={example.node} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ExamplesPage.propTypes = {

}

ExamplesPage.defaultProps = {

}

export default ExamplesPage
