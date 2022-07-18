import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";



const OneFunRun = (props) => {

  const {id} = useParams();

  const [oneFunRun, setOneFunRun] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
  axios.get(`http://localhost:8000/api/funruns/${id}`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setOneFunRun(res.data);
    })
    .catch((err) =>console.log(err))
  }, [id])

  const deleteFilter = () => {
    axios.delete(`http://localhost:8000/api/funruns/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/")
        
      })
      .catch((err) => console.log(err));
  }

  return ( 
  <div className="oneFunRun-component">
   <Link to = {"/"}>back to home</Link>
   <button onClick={deleteFilter} className="btn btn-danger">Adopt {oneFunRun.name}</button>
      
    <h2>Details about: {oneFunRun.name}</h2>
      <p>FunRun type: {oneFunRun.type}</p>
      <p>Description: {oneFunRun.description}</p>
      <p>Skills: {oneFunRun.skill1}, {oneFunRun.skill2}, {oneFunRun.skill3}</p>
      
  </div>
  );
}

export default OneFunRun;