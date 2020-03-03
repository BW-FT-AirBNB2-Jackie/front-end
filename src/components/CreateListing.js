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
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            
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
