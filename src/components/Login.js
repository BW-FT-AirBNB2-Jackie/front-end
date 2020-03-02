import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";


const Login = (props) => {
  return (
<div>
    <Form className="login-form">
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
      </FormGroup>
      <Button>
        <Link to="/profile">
        Log in
        </Link>
      </Button>
    </Form>
</div>
  );
}

export default Login;