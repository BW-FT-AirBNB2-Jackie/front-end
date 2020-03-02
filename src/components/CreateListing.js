import React from 'react';
import { Button, Form, FormGroup, FormText, Label, Input } from "reactstrap";


const CreateListing = (props) => {
    console.log(props);
    return (
        <div>
        <Form className="login-form">
            <FormGroup>
                <Label>Location</Label>
                <Input type="text" name="location" placeholder="Location"/>
                <Label>Description</Label>
                <Input type="textarea" name="description" placeholder="Description"/>
                <Label>Price Per Day</Label>
        <       Input type="text" name="price" placeholder=" Price Per Day"/>
                <Label>Image</Label>
                <Input type="file" name="image" placeholder="Description"/>
                <FormText color="muted">
                Please upload a picture of your location you plan to list.
                </FormText>
            </FormGroup>
            <Button type="submit">Create Listing</Button>
        </Form>
        </div>
        );
    }
    
    export default CreateListing;

