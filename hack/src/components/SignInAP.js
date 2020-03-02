import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup";


const SignIn = ({values, errors, touched, status}) => {
return (
<div>
<Form>


<label htmlFor = "email">
<Field type="text" name="email" placeholder="email" />
{touched.email && errors.email && (
    <p>{errors.email}</p>
)}
</label>

<label htmlFor = "password">
  <Field type="password" name="password" placeholder="password" />
 
  </label>
  <button type="submit">Submit</button>


</Form>
 
</div>
)
}

const SignInForm = withFormik({
  // props from <AnimalForm /> in app are in props param
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
        email:props.email || ""
   
    };
  },

  validationSchema: Yup.object().shape({
   email: Yup.string().required()
    // passing a string in required makes a custom inline error msg
   
  }),

  // passed through props (magically) to Form component in Formik
  // fires when button type=submit is fired
  // values = state of form, formikBag is second param
  // in FormikBag: setStatus (sends API response to AnimalForm) & resetForm (clears form when called)
  handleSubmit(values, { setStatus, resetForm }) {

  }
})(SignIn);
export default SignInForm;

