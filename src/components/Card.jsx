import React from "react";
import "../styles/Card.css";
import {MdOutlineDelete,MdOutlineEdit} from "react-icons/md";
import { useDeleteEmployeeByIdMutation } from '../services/api';


const Cards = (props)=>{
      const {handleClick}=props;
    //   const {handleDelete()}=props;
        const [deleteEmployeeById] = useDeleteEmployeeByIdMutation();
     const deleteFunction=(e)=>{
        e.stopPropagation();
        // console.log("to delete id: ",props.empId);
        deleteEmployeeById(props.empId);
      };

      
    return(
     
    <div className="card-style" onClick={ () => handleClick()}>
        <div className="card-prop">{props.name}</div>
        <div className="card-prop">{props.empId}</div>
        <div className="card-prop">{props.joiningdate}</div>
        <div className="card-prop">{props.role}</div>
        <div className="card-status">
            <span className={`status ${props.status}`}>{props.status}</span>
        </div>
        <div className="card-prop">{props.experience}</div>
        <div className="card-icon">
            <MdOutlineDelete className="del-icon" onClick={(e)=>{deleteFunction(e);}}/>
            <MdOutlineEdit className="edit-icon" />
        </div>
    </div>
    );
};  

export default Cards;