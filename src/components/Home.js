import React from 'react';
import { Button } from 'reactstrap';


function Home(props) {
  
    function handleCreateButton() {
      props.history.push('/createlisting')
    }
  
    function handleListingButton() {
      props.history.push('/browselistings')
    }
  
    return (
        <div className="wrapper">
        <div className="home">
            <h1>Find Your Destination</h1>

            <img src="/imgs/camper.png" alt="" />
          <Button onClick={handleCreateButton} color="danger" size="lg" block>Create Listing</Button>
          <h2>  OR  </h2>
          <Button onClick={handleListingButton} color="primary" size="lg" block>Browse Listings</Button>
          </div>
          </div>
    )
  }
  
  export default Home;




  