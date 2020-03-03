import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup";


const SignUp = ({errors, touched}) => {
return (
<div>
<Form>
<label htmlFor = "firstname">
<Field type="text" name="firstname" placeholder="First Name" />
{touched.firstname && errors.firstname && (
    <p>{errors.firstname}</p>)}
</label>
<label htmlFor = "lastname">
<Field type="text" name="lastname" placeholder="Last Name" />
{touched.lastname && errors.lastname && (
    <p>{errors.lastname}</p>)}
</label>
<label htmlFor = "email">
<Field type="text" name="email" placeholder="email" />
{touched.email && errors.email && (
    <p>{errors.email}</p>
)}
</label>

<label htmlFor = "password">
  <Field type="password" name="password" placeholder="password" />
  {touched.password && errors.password && (
    <p>{errors.password}</p>
)}
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
      email:props.email || "",
      password:props.password  || "",
      lastname:props.lastname || "",
      firstname:props.firstname  || ""
      
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    firstname: Yup.string().required("Must put in your first name"),
    lastname: Yup.string().required("Must put in your last name"),
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
   
  
 
    
   }),


  // passed through props (magically) to Form component in Formik
  // fires when button type=submit is fired
  // values = state of form, formikBag is second param
  // in FormikBag: setStatus (sends API response to AnimalForm) & resetForm (clears form when called)
  handleSubmit(values, { setStatus, resetForm }) {

  }
})(SignUp);
export default SignUpForm;

