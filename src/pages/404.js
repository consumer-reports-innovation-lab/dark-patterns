import React from "react"
import Layout from "../containers/Layout"
import SEO from "../containers/seo"

const NotFoundPage = () => {
  const pageSEO = {
    title: '404 Page Not Found'
  }
  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <section className="pt-5 fullheight">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>PAGE NOT FOUND</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default NotFoundPage
