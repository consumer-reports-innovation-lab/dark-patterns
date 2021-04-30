import React from "react"
// import PropTypes from 'prop-types'
import { Formik, Field, Form } from "formik"
// import FormikDebug from "../common/utils/FormikDebug"
import {
  // TextInput,
  SwitchInput
} from "../common/fields"
import { useCategories } from '../hooks/useCategories'
import { useExamples } from '../hooks/useExamples'
import Intro from '../components/examples/Intro'
import ExampleCard from "../components/examples/ExampleCard"

const ExamplesPage = () => {
  const { categories } = useCategories()
  const { examples } = useExamples()

  return (
    <>
      <Intro />
      <section>
        <div className="container">
          {/* <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <span>Sort By</span>Most Recent
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 col-md-4">
              <Formik
                enableReinitialize
                initialValues={{}}
                onSubmit={(values) => console.log(values)}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <h2>Harms</h2>
                    <ul className="list-of-harms">
                      {categories && categories.map(category => {
                        const { id, name, description } = category.node
                        if (name === "Uncategorized") return
                        return (
                          <li key={id}>
                            <Field
                              name={id}
                              type="checkbox"
                              component={SwitchInput}
                              // toggle
                              hint={description}
                              onChange={(e, value) =>
                                setFieldValue(id, value.checked)
                              }
                              label={name}
                            />
                          </li>
                        )
                      })}
                    </ul>
                    {/* <FormikDebug /> */}
                  </Form>
                )}
              </Formik>
            </div>

            <div className="col-12 col-md-8">
              <div className="row">
                {examples && examples.map(example => {
                  const { id } = example.node
                  return (
                    <div key={id} className="col-12 col-lg-6 my-4">
                      <ExampleCard example={example.node} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ExamplesPage.propTypes = {

}

ExamplesPage.defaultProps = {

}

export default ExamplesPage
