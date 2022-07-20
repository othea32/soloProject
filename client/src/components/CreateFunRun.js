import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const CreateFunRun = (props) => {
 const{allFunRuns, setAllFunRuns} = props;
 const [name, setName] = useState("");
 const [location, setLocation] = useState("");
 const [distance, setDistance] = useState("");
 const [description, setDescription] = useState("");
 
 const [errors, setErrors] = useState({});
 const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post("http://localhost:8000/api/funRuns", { 
      name,
      location,
      distance,
      description,
      
      })
    .then((res) => {
      console.log(res);
      // setAllFunRuns([...allFunRuns, res.data]);
      setName("");
      setLocation("");
      setDistance("");
      setDescription("");
      
      navigate("/");
      
      
    })
    .catch((err) => {
      console.log(err.response.data.err.errors);
      setErrors(err.response.data.err.errors);
    });
};
 return (
  <div className="container">
   <div className="row justify-content-center">
    <div className="col-4">
     
     <Link to ="/">Home</Link>
     <h3 className="text-success">New Event</h3>
     <form onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="name">Run Name:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setName(e.target.value)}
        value={name} 
       />
       {errors.name ? <p>{errors.name.message}</p> : null}

       <label htmlFor="location">Location:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setLocation(e.target.value)}
        value={location} 
       />
       {errors.location ? <p>{errors.location.message}</p> : null}
       
       <label htmlFor="distance">Distance:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setDistance(e.target.value)}
        value={distance} 
       />
       {errors.distance ? <p>{errors.distance.message}</p> : null}
       <label htmlFor="description">Description:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setDescription(e.target.value)}
        value={description} 
       />
       {errors.description ? <p>{errors.description.message}</p> : null}
       
       
       

      </div>
      <button type="submit" className="btn btn-success">Add FunRun</button>
     </form>

    </div>
   </div>
   
  </div>
 );
}
 
export default CreateFunRun;