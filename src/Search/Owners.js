import React, { useEffect, useState } from "react";
import axios from 'axios';
import OwnerCard from './OwnerCard'


const Owners = props => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    useEffect (() => {
        axios.get(" https://rvbnb2.herokuapp.com/api/landowners")
        .then(res => {
            console.log(res);
            const LandOwn = res.filter(LandOwn =>
              LandOwn.name.toLowerCase().includes(query.toLowerCase())
            );
  
            setData(LandOwn);
          });
      }, [query]);
  
      const handleInputChange = event => {
        setQuery(event.target.value);
      };
  
  return (
  
    <div className="Ownercontainer">
       <form className="search">
          <input 
          type="text"
          onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="Search by Name"
            autoComplete="off"
          />
       </form>
        {data.map(obj => (
            <OwnerCard
             name = {obj.name}
             role = {obj.role}
             location = {obj.location}/>
        ))}
        
        
    
    </div>
    );

    };
export default Owners

// const data = [
//     {
//       name: 'Johnny Smith',
//       role: 'Land Owner',
//       location: '9825 N. Westminster Dr Coatesville, PA 19320',
//     },
//     {
//       name: 'Smithy John',
//       role: 'Land Owner',
//       location: '7422 Vernon St Somerset, NJ 08873',
//     },
    
//   ];
//   return (
//   data.map(obj => (
//     <OwnerCard
//      name = {obj.name}
//      role = {obj.role}
//      location = {obj.location}/>
// ))
//   )