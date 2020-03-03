import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const BrowseListings = (props) => {
    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");


    useEffect(() => {
        axios
          .get("https://rvbnb2.herokuapp.com/api/listings")
          .then(response => {
              console.log("this is data from listings", response)
            const filtered = response.data.filter(item => {
              return item.location.toLowerCase().includes(query.toLowerCase());
            });
            setData(filtered);
          })
          .catch(error => console.log("404 Error", error));
      }, [query]);
      const handleChange = event => {
        setQuery(event.target.value);
      };
    
    return (
        <div>
            <Form className="login-form">
                <FormGroup>
                    <Label>Search Listings:</Label>
                    <Input type="text" placeholder="Search By Location" onChange={handleChange} value={query}></Input>
                </FormGroup>
            </Form>
            <div>
               {data.map(data => {
                   return (
                    <div className="search-form">
                        <h2>{data.location}</h2>
                        <h4>{data.description}</h4>
                        <h4>${data.price} per hour</h4>
                        <img src={data.image} alt="location-spot"/>
                        <h4>Start Date: {data.start_date}</h4>
                        <h4>End Date: {data.end_date}</h4>
                    </div>
                   )
               })}
            </div>
        </div>
        );
    }
    
    export default BrowseListings;