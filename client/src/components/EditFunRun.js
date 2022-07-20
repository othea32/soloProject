import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditFunRun = (props) => {
 const {id} = useParams();
 const [funRunName, setFunRunName] = useState("");
 const [funRunLocation, setFunRunLocation] = useState("");
 const [funRunDistance, setFunRunDistance] = useState("");
 const [funRunDescription, setFunRunDescription] = useState("");
 
 const [errors, setErrors] = useState({});
 const navigate = useNavigate();
 const [funRunNotFound, setFunRunNotFound] = useState("");
 console.log(id);

  useEffect(() => {
   axios.get(`http://localhost:8000/api/funRuns/${id}`)
   .then((res) => {
     console.log(res);
     console.log(res.data);
     setFunRunName(res.data.name);
     setFunRunLocation(res.data.location);
     setFunRunDistance(res.data.distance);
     setFunRunDescription(res.data.description);
     
     
   })
   .catch((err) => {
    console.log(err.res);
    setFunRunNotFound('FunRun not found with that id');
   })
 }, []);

 const submitHandler = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:8000/api/funRuns/${id}`, {
   name: funRunName,
   location: funRunLocation,
   distance: funRunDistance,
   description: funRunDescription,
   
  })
  .then((res) => {
   console.log(res);
   console.log(res.data);
   navigate("/");
   
 })
 .catch((err) => {console.log(err.response.data.err.errors);
  setErrors(err.response.data.err.errors)
 })
 }
 return (
  <div className="container">
   <div className="row justify-content-center">
    <div className="col-4">
     <form onSubmit={submitHandler}>
      {funRunNotFound ? <h2>{funRunNotFound}<Link to="/new">Click here to add funrun</Link></h2> :null}
      <Link to = "/">back to home</Link>
      <div className="form-group">
       <label htmlFor="name">FunRun Name:</label>
       <input 
        type="text" id="name" 
        value={funRunName}
        onChange={(e) => setFunRunName(e.target.value)}
       />
       {errors.name ? <p>{errors.name.message}</p> : null}

       <label htmlFor="location">Location:</label>
       <input 
        type="text" id="location"
        className="form-control" 
        onChange={(e) => setFunRunLocation(e.target.value)}
        value={funRunLocation} 
       />
       {errors.location ? <p>{errors.location.message}</p> : null}

       <label htmlFor="distance">Distance:</label>
       <input 
        type="text" id="distance"
        className="form-control" 
        onChange={(e) => setFunRunDistance(e.target.value)}
        value={funRunDistance} 
       />
       {errors.distance ? <p>{errors.distance.message}</p> : null}

       <label htmlFor="description">Description:</label>
        <input 
         type="text" id="description" 
         className="form-control" 
         onChange={(e) => setFunRunDescription(e.target.value)}
         value={funRunDescription} 
       />
       {errors.description ? <p>{errors.description.message}</p> : null}
       
      </div>
      
      <button type="submit" className="btn btn-success">Edit FunRun</button>
     </form>

    </div>
   </div>
  </div>
  
 );
}
 
export default EditFunRun;