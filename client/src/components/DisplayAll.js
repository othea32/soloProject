import axios from "axios";
import React from "react";
import { useEffect, useState}from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Button, Table } from "react-bootstrap";

const DisplayAll = () => {

  const [allFunRuns, setAllFunRuns] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:8000/api/funRuns")
    .then((res) => {
      console.log(res.data);
      setAllFunRuns(res.data);
    })
    .catch((err) => {console.log(err.res);
    });
  }, []);

  
  
  return (
   <div className="container">
    <div className="row">
     <div className="col-8">
      <Link to = "/new">Create an Event</Link>
      <h2 className="text-success">Let's run and have Fun!</h2>
      <table class="table">
       <thead>
        <tr>
         <th scope="col">Name</th>
         <th scope="col">Location</th>
         <th scope="col">Distance</th>
         <th scope="col">Actions</th>
        </tr>
       </thead>
       <tbody>
        {allFunRuns.map((funRun, index) => {
         return(
          <tr key={funRun._id}>
           <td>{funRun.name}</td>
           <td>{funRun.location}</td>
           <td>{funRun.distance}</td>
           <td>
            <Link to ={`/funRuns/${funRun._id}`}>
            <Button variant="primary">delete</Button>{' '}
             </Link>
             <Link to ={`/edit/${funRun._id}`}>
             <Button variant="primary">edit</Button>{' '}
             </Link>
            {/* <button onClick={() => deleteFilter(funrun._id)} className="btn btn-danger">Delete</button> */}
           </td>
          </tr>
         )
        })}
       </tbody>
      </table>
     
     
     </div>
    </div>
   </div>
  );
    
}

export default DisplayAll;