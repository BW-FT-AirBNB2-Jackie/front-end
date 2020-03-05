import React from 'react';

const Listing = props => {
    return (
        <div className="listing-form">
        {props.listing.map(listing =>(
        <div>
           <h2>{listing.location}</h2>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <img src={listing.image} alt=""/>
        </div>
        ))}
    </div>
    );
};

export default Listing;