import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import {
  TextInput,
  TextArea,
  SwitchInput,
  SelectInput,
  RadioInput,
} from '../../common/fields'

import FormikDebug from '../../common/utils/FormikDebug'

const mockSelectData = [
  { value: 'select1', label: 'Select One' },
  { value: 'select2', label: 'Select Two' },
  { value: 'select3', label: 'Select Three' },
]

const ValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})

const FormSandbox = () => {
  const initialValues = {
    description: '',
    switch: true,
    featuredProduct: {},
    richDescription: '',
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Sandbox: Forms</h1>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={ValidationSchema}
              // onSubmit={(values, { resetForm }) => {
              //   dispatch(testForm({ firestore }, values))
              //   resetForm()
              // }}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    {/* Example of Text Field */}
                    <Field
                      name="text"
                      type="text"
                      component={TextInput}
                      placeholder="Placeholder text"
                      hint="Enter some text"
                      label="Description"
                    />
                    {/* Example of Text Area */}
                    <Field
                      name="description"
                      type="text"
                      component={TextArea}
                      placeholder="Enter a description!"
                      hint="Enter some text!"
                      label="Description"
                    />
                    {/* Example of Switch Input */}
                    <Field
                      name="switch"
                      type="checkbox"
                      component={SwitchInput}
                      label="Switch"
                      onChange={() => setFieldValue('switch', !values.switch)}
                    />

                    <div className="form-check form-check-inline">
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-1"
                        value="radio-opt-1"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-2"
                        value="radio-opt-2"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                    </div>

                    {/* Example of Select Input */}
                    <Field
                      name="featuredProduct"
                      type="text"
                      component={SelectInput}
                      options={mockSelectData}
                      onChange={value => setFieldValue('featuredProduct', value)}
                      label="Select Featured Product"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <FormikDebug />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormSandbox
