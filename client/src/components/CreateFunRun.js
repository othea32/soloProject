import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateFunRun = (props) => {
 const{allFunRuns, setAllFunRuns} = props;
 const [name, setName] = useState("");
 const [type, setType] = useState("");
 const [description, setDescription] = useState("");
 const [skill1, setSkill1] = useState("");
 const [skill2, setSkill2] = useState("");
 const [skill3, setSkill3] = useState("");
 const [errors, setErrors] = useState({});
 const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post("http://localhost:8000/api/funruns", { 
      name,
      type,
      description,
      skill1,
      skill2,
      skill3,
      })
    .then((res) => {
      console.log(res);
      // setAllFunRuns([...allFunRuns, res.data]);
      setName("");
      setType("");
      setDescription("");
      setSkill1("");
      setSkill2("");
      setSkill3("");
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
     
     <Link to ="/">back to Home</Link>
     <h3 className="text-success">New Event</h3>
     <form onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="name">FunRun Name:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setName(e.target.value)}
        value={name} 
       />
       {errors.name ? <p>{errors.name.message}</p> : null}
       <label htmlFor="type">FunRun Type:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setType(e.target.value)}
        value={type} 
       />
       {errors.type ? <p>{errors.type.message}</p> : null}
       <label htmlFor="description">FunRun Description:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setDescription(e.target.value)}
        value={description} 
       />
       {errors.description ? <p>{errors.description.message}</p> : null}
       <h4>Skills (Optional):</h4>
       <label htmlFor="skill1">Skill 1:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setSkill1(e.target.value)}
        value={skill1} 
       />
       <label htmlFor="skill2">Skill 2:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setSkill2(e.target.value)}
        value={skill2} 
       />
       <label htmlFor="skill3">Skill 3:</label>
       <input 
        type="text" 
        className="form-control" 
        onChange={(e) => setSkill3(e.target.value)}
        value={skill3} 
       />
       
       

      </div>
      <button type="submit" className="btn btn-success">Add FunRun</button>
     </form>

    </div>
   </div>
   
  </div>
 );
}
 
export default CreateFunRun;