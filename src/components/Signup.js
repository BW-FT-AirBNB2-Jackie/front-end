import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { registerUser } from '../actions/index'

const SignUp = props => {
  const { errors, touched } = props;
  return (
    <>
    <Form  className="login-form">
  <FormGroup>
<Label >Username:</Label>
</FormGroup>
<Field id="username" type="text" name="username" placeholder="Username"/>
{touched.username && errors.username && (<p>{errors.username}</p>)}

<FormGroup>
<Label >Password:</Label>
</FormGroup>
<Field id="password" type="password" name="password" placeholder="Password"/>
{touched.password && errors.password && (<p>{errors.password}</p>)}

<FormGroup>
<Label >Email:</Label>
</FormGroup>
<Field id="email" type="email" name="email" placeholder="Email"/>
{touched.email && errors.email && (<p>{errors.password}</p>)}
<FormGroup>
<Button type="submit">Sign Up</Button>
</FormGroup>
</Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "",
      password: values.password || "",
      email: values.email || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .min(5, "username must have at least 5 characters")
      .required(),
    password: yup
      .string()
      .min(8, "password must be at least 8 characters")
      .required("enter and confirm password"),
      email: yup
      .string()
      .required()

  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    let userObj = {
      username: values.username,
      password: values.password,
      email: values.email
    };
    console.log(userObj)
    registerUser(userObj)
  }
})(SignUp);