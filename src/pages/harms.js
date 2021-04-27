import React from "react"
import { Link } from "gatsby"
import CategoryCard from "../components/categories/CategoryCard"

const CategoriesPage = () => {
  const categories = [
    {
      slug: "bias-discrimination",
      name: "Bias & Discrimination",
      description: "A person who contributes user data to a product or service experiences unfair impacts based on demographic identifiers such as age, race, and gender.",
      url: "/category/bias-discrimination"
    }
  ]
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Harms of Dark Patterns</h1>
              <p>
                Pellentesque at bibendum mauris, in porta nisi. Duis ornare ac
                metus et porttitor. Cras non commodo massa, et pretium turpis.
                Nam sit amet rhoncus nisi. Vivamus at imperdiet arcu.
              </p>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
              <Link to="/shame" className="btn btn-primary">
                Wall of Shame
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {categories && categories.map(category => {

              return (
                <div key={category.slug} className="col-12 col-md-6 col-lg-4">
                  <CategoryCard category={category} />
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default CategoriesPage
