import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"



const SignUp = ({}) => {
return (
<div>
<Form>
<label htmlFor = "firstname">
<Field type="text" name="firstname" placeholder="First Name" />
</label>
<label htmlFor = "lastname">
<Field type="text" name="lastname" placeholder="Last Name" />
</label>
<label htmlFor = "email">
<Field type="text" name="email" placeholder="email" />
</label>

<label htmlFor = "password">
  <Field type="password" name="password" placeholder="password" />
  </label>
  <button type="submit">Submit</button>


</Form>
 
</div>
)
}

const SignUpForm = withFormik({
  // props from <AnimalForm /> in app are in props param
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
   
    };
  },


  // passed through props (magically) to Form component in Formik
  // fires when button type=submit is fired
  // values = state of form, formikBag is second param
  // in FormikBag: setStatus (sends API response to AnimalForm) & resetForm (clears form when called)
  handleSubmit(values, { setStatus, resetForm }) {

  }
})(SignUp);
export default SignUpForm;

