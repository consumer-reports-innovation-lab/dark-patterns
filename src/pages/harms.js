import React from "react"
import { Link } from "gatsby"
import CategoryCard from "../components/categories/CategoryCard"
import { useCategories } from '../hooks/useCategories'
import Layout from "../containers/Layout"
import SEO from '../containers/seo'

const CategoriesPage = () => {
  const { categories } = useCategories()
  const pageSEO = {
    title: "Harms"
  }
  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Harms of<br />Dark Patterns</h1>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
              <Link to="/sightings" className="btn btn-primary">
                Sightings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row">
            {categories && categories.map(category => {
              if (category.node.name === "Uncategorized") return
              const { id } = category.node

              return (
                <div key={id} className="col-12 col-md-6 col-xl-4 mb-4">
                  <CategoryCard category={category.node} />
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CategoriesPage
