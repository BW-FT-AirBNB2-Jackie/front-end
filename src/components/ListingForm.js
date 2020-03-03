import React, { useState } from "react";
import { Button, Form, FormGroup, FormText, Label, Input } from "reactstrap";

const ListingForm = props => {
   
    const [listing, setListing] = useState({
        
        location: "",
        description: "",
        price: ""
        
    });
    const handleChanges = event => {
        setListing({...listing, [event.target.name]: event.target.value});
    };
    const submitListing = event => {
        event.preventDefault();
        props.addNewListing(listing);
        setListing({location: "", description: "", price: ""});
    };
    return(
    <Form onSubmit={submitListing} className="login-form">
    <FormGroup>
        <Label>Location</Label>
        <Input type="text" name="location" placeholder="Location" onChange={handleChanges} value={listing.location}/>
        <Label>Description</Label>
        <Input type="textarea" name="description" placeholder="Description" onChange={handleChanges} value={listing.description}/>
        <Label>Price Per Day</Label>
<       Input type="text" name="price" placeholder=" Price Per Day" onChange={handleChanges} value={listing.price}/>
        <Label>Image</Label>
        <Input type="file" name="image" placeholder="Description" onChange={handleChanges} value={listing.image}/>
        <FormText color="muted">
        Please upload a picture of your location you plan to list.
        </FormText>
    </FormGroup>
    <Button type="submit">Create Listing</Button>
</Form>
    );
}
export default ListingForm;