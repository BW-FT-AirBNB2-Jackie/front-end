import { Button, Form, FormGroup, Label } from "reactstrap";
import React, { useState, useEffect } from "react";
import { Field, withFormik } from "formik";
import * as Yup from 'yup';
import { loginUser } from '../actions/index'


const Login = ({ values, errors, touched, status }) => {

  const [login, setLogin] = useState([]);

  useEffect(() => {
    console.log("status has changed", status);
    status && setLogin(login => [...login, status])
  }, [status]);

  return (
<div>
    <Form  className="login-form">
      <FormGroup>
        <Label >Username:</Label>
        <Field id="username" type="text" name="username" placeholder="Username"/>
        {touched.username && errors.username && (<p>{errors.username}</p>)}
        
        <Label >Password:</Label>
        <Field id="password" type="password" name="password" placeholder="Password"/>
        {touched.password && errors.password && (<p>{errors.password}</p>)}
        <br/>
        <Label className="label">Email:</Label>
        <Field id="email" type="email" name="email" placeholder="Email"/>
        {touched.email && errors.email && (<p>{errors.email}</p>)}

      </FormGroup>
      <Button type="submit">Log in</Button>
    </Form>
    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        {login.map(login => (
            <ul key ={login.id}>
                <li>Username: {login.username}</li>
                <li>Password: {login.password}</li>
                <li>Email: {login.email}</li> 
            </ul>
        ))}
</div>
  )
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, email, password }){
      return {
          username: username || "",
          password: password || "",
          email: email || ""

      };
  },
  validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
      email: Yup.string().required()
  }),
  handleSubmit: (values) => {
    let userObj = {
      username: values.username,
      password: values.password,
      email: values.email
    };
    console.log(userObj)
    loginUser(userObj)
  }
})(Login);

export default FormikLogin;

