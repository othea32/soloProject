import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditFunRun = (props) => {
 const {id} = useParams();
 const [funrunName, setFunRunName] = useState("");
 const [funrunType, setFunRunType] = useState("");
 const [funrunDescription, setFunRunDescription] = useState("");
 const [funrunSkill1, setFunRunSkill1] = useState("");
 const [funrunSkill2, setFunRunSkill2] = useState("");
 const [funrunSkill3, setFunRunSkill3] = useState("");
 const [errors, setErrors] = useState({});
 const navigate = useNavigate();
 const [funrunNotFound, setFunRunNotFound] = useState("");
 console.log(id);

  useEffect(() => {
   axios.get(`http://localhost:8000/api/funruns/${id}`)
   .then((res) => {
     console.log(res);
     console.log(res.data);
     setFunRunName(res.data.name);
     setFunRunType(res.data.type);
     setFunRunDescription(res.data.description);
     setFunRunSkill1(res.data.skill1);
     setFunRunSkill2(res.data.skill2);
     setFunRunSkill3(res.data.skill3);
     
   })
   .catch((err) => {
    console.log(err.res);
    setFunRunNotFound('FunRun not found with that id');
   })
 }, []);

 const submitHandler = (e) => {
  e.preventDefault();

  axios.put(`http://localhost:8000/api/funruns/${id}`, {
   name: funrunName,
   type: funrunType,
   description: funrunDescription,
   skill1: funrunSkill1,
   skill2: funrunSkill2,
   skill3: funrunSkill3,
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
      {funrunNotFound ? <h2>{funrunNotFound}<Link to="/new">Click here to add funrun</Link></h2> :null}
      <Link to = "/">back to home</Link>
      <div className="form-group">
       <label htmlFor="name">FunRun Name:</label>
       <input 
        type="text" id="name" 
        value={funrunName}
        onChange={(e) => setFunRunName(e.target.value)}
       />
       {errors.name ? <p>{errors.name.message}</p> : null}
       <label htmlFor="type">FunRun Type:</label>
       <input 
        type="text" id="type"
        className="form-control" 
        onChange={(e) => setFunRunType(e.target.value)}
        value={funrunType} 
       />
       {errors.type ? <p>{errors.type.message}</p> : null}
       <label htmlFor="description">FunRun Description:</label>
        <input 
         type="text" id="description" 
         className="form-control" 
         onChange={(e) => setFunRunDescription(e.target.value)}
         value={funrunDescription} 
       />
       {errors.description ? <p>{errors.description.message}</p> : null}
       <div className=" form-group col-6">
       <h4>Skills (Optional):</h4>
       <label htmlFor="skill1">Skill 1:</label>
        <input 
         type="text" id="skill1"
         className="form-control" 
         onChange={(e) => setFunRunSkill1(e.target.value)}
         value={funrunSkill1} 
       />
       <label htmlFor="skill2">Skill 2:</label>
        <input 
         type="text" id="skill2"
         className="form-control" 
         onChange={(e) => setFunRunSkill2(e.target.value)}
         value={funrunSkill2} 
       />
       <label htmlFor="skill3">Skill 3:</label>
        <input 
         type="text" id="skill3"
         className="form-control" 
         onChange={(e) => setFunRunSkill3(e.target.value)}
         value={funrunSkill3} 
       />
       </div>
      </div>
      
      <button type="submit" className="btn btn-success">Edit FunRun</button>
     </form>

    </div>
   </div>
  </div>
  
 );
}
 
export default EditFunRun;