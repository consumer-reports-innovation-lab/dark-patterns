import React from "react"
import { Link } from "gatsby"
import CategoryCard from "../components/categories/CategoryCard"
import { useCategories } from '../hooks/useCategories'

const CategoriesPage = () => {
  const { categories } = useCategories()
  console.log(categories)
  // const categories = [
  //   {
  //     slug: "bias-discrimination",
  //     name: "Bias & Discrimination",
  //     description: "A person who contributes user data to a product or service experiences unfair impacts based on demographic identifiers such as age, race, and gender.",
  //     url: "/category/bias-discrimination"
  //   }
  // ]
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Harms of<br />Dark Patterns</h1>
              <Link to="/report" className="btn btn-primary">
                Report a Pattern
              </Link>
              <Link to="/sightings" className="btn btn-primary">
                Wall of Shame
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
    </>
  )
}

export default CategoriesPage
