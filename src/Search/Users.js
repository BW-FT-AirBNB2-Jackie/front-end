import React, { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard";


const Users = props => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    useEffect (() => {
        axios.get(" https://rvbnb2.herokuapp.com/api/users")
        .then(res => {
            console.log(res);
            const User = res.filter(User =>
              User.name.toLowerCase().includes(query.toLowerCase())
            );
  
            setData(User);
          });
      }, [query]);
  
      const handleInputChange = event => {
        setQuery(event.target.value);
      };
  
  return (
  
    <div className="Usercontainer">
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
            <UserCard
             name = {obj.name}
             role = {obj.role}
             location = {obj.location}/>
        ))}
        
        
    
    </div>
    );


    };
export default Users


// const data = [
//   {
//     name: 'John Smith',
//     role: 'Renter',
//     location: '161 Fulton Drive Maryville, TN 37803',
//   },
//   {
//     name: 'Smith John',
//     role: 'Renter',
//     location: '198 Dunbar Ave Palos Verdes Peninsula, CA 90274',
//   },
  
// ];
// return (
// data.map(obj => (
//   <UserCard
//    name = {obj.name}
//    role = {obj.role}
//    location = {obj.location}/>
// ))
// )