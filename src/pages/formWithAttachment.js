import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby'
import axios from "axios"



/*
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
*/

const FormWithAttachment = ( {data: {gfForm}} ) => {  
    
  //console.log("gfForm",gfForm)

  //const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(gfForm);
  const [values, setValues] = useState({});
  const [status, setStatus] = useState(null);
  const [validationMessage, setValidationMessage] = useState(null);
  
  useEffect(() => {
    const upcomingPageData = gfForm;
    setCurrentPageData(upcomingPageData);
    setValues(currentValues => {
        const newValues = upcomingPageData.formFields.reduce((obj, field) => {            
            obj['input_'+field.id] = field.defaultValue;
            return obj;
        }, {});
        return Object.assign({}, newValues, currentValues);
    });

  }, [gfForm]);


  const fieldChanged = (fieldId, value) => {
    setValidationMessage(null)
    setValues(currentValues => {
        currentValues[fieldId] = value;
        return currentValues;
    });


    setCurrentPageData(currentPageData => {
        return Object.assign({}, currentPageData);
    });
    console.log(values)
  };
    


  const handleSubmit = e => {
    setStatus('sending');
    setValidationMessage(null)
    e.preventDefault();

    if(!handleValidation()) return false;

    const submitURL = 'http://ocupop.paulstroot.com/gatsby/gatsby_form_submit.php?queryvar=formWithAttachment';
    const baseURL = 'TBD';
    console.log("VALUES",values)
    let formData = {
      baseURL: baseURL,
      formID: 1,
      payload: values
    }
    axios({
      method: "POST",
      url: submitURL,
      data: formData,
      header: {
        "Content-Type": "multipart/form-data", // ; boundary=${form._boundary}
      },
    })
    .then(function (response) {
      setStatus('success');
      console.log(response);
    })
    .catch(function (error) {
      setStatus('error');
      console.log(error);
    });

    // todo - send data somewhere
  };

  const handleValidation = e => {
    // this is a bit messy. Need to improve on this.
    if(values["input_1"] == '' || values["input_2"] == '' || values["input_3"] == ''){
      setValidationMessage("please make sure you entered in a value for all fields.")
      setStatus(null);
      return false;
    }
    return true;
  }

  const renderField = (field) => {
    switch(field.type) {
      case 'text':
        return inputText(field)
        break;
      case 'textarea':
        return textarea(field)
        break;
      case 'fileupload':
        return fileupload(field)
        break;
      default:
        return  <small>Not configured for field type <b>{field.type}</b> yet</small>
    }
  }


    
    const inputText = (field) => {
      return (
        <div className="ginput_container ginput_container_text">
          <input onChange={e => fieldChanged('input_' + field.id, e.target.value)} aria-required={field.isRequired} className="gravityform__field__input gravityform__field__input__text large" id={'input_'+field.id}  name={'input_'+field.id} placeholder={field.placeholder} type="text" value={values['input_' + field.id]} />
        </div>     
      )
    }

    const textarea = (field) => {
      return (
        <div className="ginput_container ginput_container_textarea">
          <textarea onChange={e => fieldChanged('input_' + field.id, e.target.value)} aria-required={field.isRequired} className="gravityform__field__input gravityform__field__input__textarea large textarea" id={'input_'+field.id} name={'input_'+field.id} placeholder={field.placeholder} type="textarea" value={values['input_' + field.id]} />
        </div>     
      )
    }

    const fileupload = (field) => {
      return (
        <div className="ginput_container ginput_container_fileupload">
          <input type="hidden" name="MAX_FILE_SIZE" value="33554432" />
          <input onChange={e => fieldChanged('input_' + field.id, e.target.value)} name="input_{field.id}" id="input_1_{field.id}" type="file" className="medium" aria-describedby="validation_message_1_{field.id} live_validation_message_1_{field.id} extensions_message_1_{field.id}" />
          { field.allowedExtensions && 
            <span id="extensions_message_1_{field.id}" className="screen-reader-text">Accepted file types: {field.allowedExtensions}.</span>
          }
          <div className="validation_message" id="live_validation_message_1_{field.id}"></div>
        </div>
      )
    }

    return (
        <>
        <div style={{margin:'auto',maxWidth:'800px',padding:'20px'}}>
          <h1>Form with attachment</h1>
          <h3>{gfForm.title}</h3>
          <p>{gfForm.description}</p>
          <div className="gform_wrapper" id="gform_wrapper_{gfForm.formId}" className={gfForm.cssClass} >
            <form className="gravityform gravityform--id-{gfForm.formId}" id="gravityform--id-{gfForm.formId}" onSubmit={handleSubmit}>
              <div className="gform_body">
                <ul className="gform_fields" id="gform_fields_{gfForm.formId}">
                 
                
                  {gfForm.formFields.map((field, index) => (
                   
                      <li key={index} className="gfield gravityform__field gravityform__field__text gravityform__field--large field_description_below gfield_visibility_visible" id="field_1_3">
                        <label className="gravityform__label gfield_label" htmlFor="input_{field.id}">{field.label}</label>
                        { renderField(field) }   
                      </li>
                    
                    
                  ))}
                </ul>
              </div>
              <div className="gform_footer top_label">
                { validationMessage &&
                  <p style={{color:'red',fontSize:'12px'}}>{validationMessage}</p>
                }
                { status ? 
                  <b style={{color:'red'}}>{status}</b>
                : 
                  <button className="gravityform__button gform_button button" id="gform_submit_button_{gfForm.formId}" type="submit">Submit</button>
                }
              </div>

            </form>
          </div>
        </div>
        </>
    )
}
export default FormWithAttachment



export const query = graphql`
  query {
    gfForm(formId: {eq: 1}) {
      formId
      title
      description
      apiURL
      cssClass
      formFields {
        label
        inputType
        inputName
        isRequired
        placeholder
        type
        choices
        cssClass
        defaultValue
        id
        maxLength
        allowedExtensions
        maxFileSize
        maxFiles
      }
    }
  }
`

