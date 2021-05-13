import React from "react"
import HEAD from "../common/ui/Head"
import Layout from '../containers/Layout'

const NotFoundPage = () => (
  <>
      <HEAD title="404: Not found" />
      <Layout>
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
      </Layout>
  </>
)

export default NotFoundPage
