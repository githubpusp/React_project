import axios from "axios";  
import React from "react";  
 
const baseURL = "http://localhost:3000/users";  
 
export default function CreateUser() {  
  const [newUser, setNewUser] = React.useState({
    id:"",
    first_name: "",  
    last_name: "",  
    email: ""  
  });  
 
  const handleInputChange = (event) => {  
    setNewUser({  
      ...newUser,  
      [event.target.name]: event.target.value  
    });  
  };  
 
  const handleSubmit = (event) => {  
    event.preventDefault();  
    axios.post(baseURL, newUser).then((response) => {      
      setNewUser({  
        id:"",
        first_name: "",  
        last_name: "",  
        email: ""  
      });  
    });  
  };  
 
  return (  
    <div>  
      <form onSubmit={handleSubmit}>  
        <h1>ADD USER</h1>
        <input  
          type="number"  
          name="id"  
          value={newUser.id}  
          onChange={handleInputChange}  
          placeholder="ID"  
        />  
        <input  
          type="text"  
          name="first_name"  
          value={newUser.first_name}  
          onChange={handleInputChange}  
          placeholder="First Name"  
        />  
        <input  
          type="text"  
          name="last_name"  
          value={newUser.last_name}  
          onChange={handleInputChange}  
          placeholder="Last Name"  
        />  
        <input  
          type="email"  
          name="email"  
          value={newUser.email}  
          onChange={handleInputChange}  
          placeholder="Email"  
        />  
        <button class="btn btn-success" type="submit" style={{marginLeft: "10px"}}>Add</button>  
      </form>  
    </div>  
  );  
}  