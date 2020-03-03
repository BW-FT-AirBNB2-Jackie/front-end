import React, { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios';

const CreateListing = ({ status }) => {
    const [addListing, setAddListing] = useState([]);
  
    useEffect(() => {
      if (status) {
        setAddListing([...addListing, status]);
      }
    }, [addListing, status]);

    const handleSubmit = e => {

    }



    return (
        <Container className="create">
      <Form>
      <FormGroup>
          <h1>Create a listing for your land:</h1>
        <Label for='address'>Address</Label>
        <Input type='text' minLength='3' maxLength='20' required={true} placeholder="Address"/>
      </FormGroup>
      <FormGroup>
        <Label for='zipcode'>Zip Code</Label>
        <Input type='zipcode' minLength='4' required={true} placeholder="Zip Code"  />
      </FormGroup>
      <FormGroup>
        <Label for='price'>Price Per Night</Label>
        <Input type='price' minLength='4' required={true} placeholder="Price Per Night"  />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Describe your land" />
      </FormGroup>
      <FormGroup>
      <Label for="date">Start Date</Label>
        <Input type="date" name="date" id="date" placeholder="Insert Date" />
      </FormGroup>
      <FormGroup>
      <Label for="date">End Date</Label>
        <Input type="date" name="date" id="date" placeholder="Insert Date" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Container>

    );
  }


export default CreateListing
