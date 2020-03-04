import React, { useState } from 'react';
import Listing from "./Listing";
import ListingForm from "./ListingForm"

const CreateListing = (props) => {
    console.log(props);

    const [listing, setListing] = useState([
        {
            id: 1,
            location: "Your location listing will go here!",
            description: "Description of your location.",
            price: "How much patrons will pay per hour.",
            image: "https://images.unsplash.com/photo-1563445046951-2e6adb308c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            
        }
    ])

    const addNewListing = listing =>{
        const newListing = {
            id: Date.now(),
            location: listing.location,
            description: listing.description,
            price: listing.price,
            image: listing.image
        };
        setListing([{...listing, newListing}])
    }
    

    return (
        <div>
        <h1>My Listings</h1>
        <ListingForm addNewListing={addNewListing} />
        <Listing listing={listing}/>
        </div>
        );
        
    }
    
   
    export default CreateListing;
