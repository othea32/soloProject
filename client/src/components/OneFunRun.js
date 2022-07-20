import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";



const OneFunRun = (props) => {

  const {id} = useParams();

  const [oneFunRun, setOneFunRun] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
  axios.get(`http://localhost:8000/api/funRuns/${id}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setOneFunRun(res.data);
    })
    .catch((err) =>console.log(err))
  }, [id])

  const deleteFilter = () => {
    axios.delete(`http://localhost:8000/api/funRuns/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/")
        
      })
      .catch((err) => console.log(err));
  }

  return ( 
  <div className="oneFunRun-component">
   <Link to = {"/"}>Home</Link>
   <button onClick={deleteFilter} className="btn btn-danger">Delete {oneFunRun.name}</button>
      
    <h2>{oneFunRun.name} details: </h2>
      <p>Location: {oneFunRun.location}</p>
      <p>Distance {oneFunRun.distance}</p>
      <p>Description: {oneFunRun.description}</p>
      
      
  </div>
  );
}

export default OneFunRun;