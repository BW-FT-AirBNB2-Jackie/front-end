import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Button, Form, FormGroup, Label } from "reactstrap";



const SignUp = props => {
  const { errors, touched } = props;
  return (
    <>
    <Form  className="login-form">
  <FormGroup>
<Label >Create Username:</Label>
<Field id="username" type="text" name="username" placeholder="Username"/>
{touched.username && errors.username && (<p>{errors.username}</p>)}

<Label >Create Password:</Label>
<Field id="password" type="password" name="password" placeholder="Password"/>
{touched.password && errors.password && (<p>{errors.password}</p>)}
</FormGroup>
<Button type="submit">Sign Up</Button>
</Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "",
      password: values.password || ""
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
      .required("enter and confirm password")
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    let userObj = {
      username: values.username,
      password: values.password
    };
    axios
      .post(
        "https://rvbnb2.herokuapp.com/api/auth/landowners/register",
        userObj
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        return props.history.push("/home");
      })
      .catch(err => {
        return err.response;
      });
  }
})(SignUp);