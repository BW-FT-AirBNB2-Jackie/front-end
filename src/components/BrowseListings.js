import React from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";

const BrowseListings = (props) => {
    return (
        <div>
            <Form className="login-form">
                <FormGroup>
                    <Label>Search Listings</Label>
                    <Input type="text" placeholder="Search By Location"></Input>
                </FormGroup>
            </Form>
        </div>

        );
    }
    
    export default BrowseListings;