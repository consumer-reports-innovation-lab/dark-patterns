import React from 'react'
import GravityFormForm from 'gatsby-gravityforms-component'

// Would recommend moving this into a separate /src/hooks/gravityforms.js file
// and import where needed
import { graphql } from 'gatsby'


function handleError({values, error, reset}) {
  //handle error
  alert("error");
  console.log("VALUES:",values)
  console.log("ERROR:",error)
}


function handleSuccess({values, reset, confirmations}) {
    //handle success
    console.log("VALUES:",values)
    console.log("RESET:",reset)
    console.log("CONFIRMATIONS:",confirmations)
}

export default function exampleFormPrivate( {data} ) {
    console.log("allGfForm",data.allGfForm)

    //const form_title = data.allGfForm.edges[0].node.title;
    
    return (
        <>
        <div style={{margin:'auto',maxWidth:'800px',padding:'20px'}}>
          <h1>Submit this form to create a new post.</h1>
          <GravityFormForm
              id={1}
              formData={data.allGfForm}
              // presetValues={{ input_1: 'This value coded in gatsby' }}
              lambda='https://crdi.ocupop.com/gatsby/gatsby_form_submit.php?queryvar=lambda' // this should be an environment variable
              successCallback={handleSuccess}
              errorCallback={handleError}
          />
        </div>
        </>
    )
}


export const query = graphql`
  query {
    allGfForm {
      edges {
        node {
          ...GravityFormComponent
        }
      }
    }
  }
`

