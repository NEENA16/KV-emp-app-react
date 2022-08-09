import InputField from "../components/InputField";
import {useNavigate} from 'react-router-dom';
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import "../styles/Styles.css";
import SideNavigation from "../components/SideNavigation";
import {useEffect, useState} from "react";
import { useCreateEmployeeMutation, useGetEmployeeQuery,useUpdateEmployeeMutation } from '../services/api';
import {useParams} from "react-router-dom"
   
const CreateEmployee = ()=> {
    // const employeecreate=(emp)=>{
    //     CreateEmployee(emp);
    //   };

    const[createfunction, result] = useCreateEmployeeMutation();
    
    const {id} =useParams();
    const{data: employeeDetails,isLoading}= useGetEmployeeQuery(id);
    const[updatefunction, updateresult] = useUpdateEmployeeMutation();

    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/list');
    };

    if(result.isSuccess){
        navigate('/list');
    }

    if(updateresult.isSuccess){
        navigate('/list');
    }
    const [state, setState] = useState({
        name: "",
        id: "",
        dateofjoining: "",
        role: "",
        status: "",
        exp:Number(""),
        line1: "",
        line2: "",
        city: "",
        state: "",
        username:"",
        password:"",
        pin: Number("")
    }
    );

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }
    console.log(employeeDetails?.data?.id," ",employeeDetails?.data?.departmentId," ",employeeDetails?.data?.address.id);
    useEffect(()=>{
        if(employeeDetails?.data){
            setState({
                name: employeeDetails?.data?.name,
                id: employeeDetails?.data?.id,
                dateofjoining: employeeDetails?.data?.dateofjoining,
                role: employeeDetails?.data?.role,
                status: employeeDetails?.data?.status,
                exp: employeeDetails?.data?.experience,
                line1: employeeDetails?.data?.address.line1,
                line2: employeeDetails?.data?.address.line2,
                city: employeeDetails?.data?.address.city,
                state: employeeDetails?.data?.address.state,
                pin: employeeDetails?.data?.address.pin,
                username: employeeDetails?.data?.username,
                password: employeeDetails?.data?.password
            })
        }
    },[employeeDetails])
     const onClickSubmit = () => {
            const payload = {
                name: state.name,
                dateofjoining: state.dateofjoining,
                role: state.role,
                status: state.status,
                experience: state.exp,
                departmentId: "cbe8303f-f240-4dc1-8d22-3feb48efaf6b",
                username: state.username,
                password: state.password,
                id: String(state.id),
                address:{
                    line1: state.line1,
                    line2: state.line2,
                    city: state.city,
                    state: state.state,
                    pin: state.pin
            }
     };
     if (id) {
        updatefunction({id,payload});
     }
     else{
        createfunction(payload);
     }
    }
    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="heading">
                <h1>
                    {id?"Edit Employee" : "Create Employee"}
                </h1>
            </div>
            <section class="form">
        <div className="form-div" name="form">
            <div className="data1">
                <label for="ename">Employee Name</label><br/>
                <InputField className="tag1" id="name" type="text" defaultvalue={state.name} placeholder="Employee Name" name="name" onChange={(value) => onChangeValue("name", value)} />
            </div>
            <div className="data1">
                <label for="eid">Employee ID</label><br/>
                <InputField  className="tag1" id="id" type="text" defaultvalue={state.id} placeholder="Employee ID" name="eid" onChange={(value)=> onChangeValue ("id",value)}/>
            </div>
            <div className="data1">
               <label for="jdate">Joining Date</label><br/>
               <InputField  className="tag1" id="dateofjoining" type="text" defaultvalue={state.jdate} placeholder="Joining Date" name="jdate" onChange={(value)=> onChangeValue("dateofjoining",value)}/>
            </div>
            <div className="data1">
                <label for="role">Role</label><br/>
                 <InputSelect 
                        className="tag1" id="role" defaultvalue={state.role}
                    
                        options={[
                                {key:"ad",label:"Admin"},
                                {key:"HR",label:"HR"}]}  
                                onChange={(value)=> onChangeValue("role",value)}/>
            </div> 
            <div className="data1">
              <label for="status">Status</label><br/>
               <InputSelect 
                    className="tag1" 
                    id="status" 
                    defaultvalue={state.status}
                    options={[
                        {key:"act",label:"Active"},
                        {key:"in",label:"Inactive"},
                        {key:"prob",label:"Probation"}]} 
                        onChange={(value)=> onChangeValue("status",value)} />
            </div>
            <div className="data1">
                 <label for="experience">Experience</label><br/>
                  <InputField  className="tag1" id="exp" type="text" defaultvalue={state.exp} placeholder="Experience" name="exp" onChange={(value)=> onChangeValue("exp",Number(value))}/><br/>
             </div>
             <div className="data1">
                 <label for="username">Username</label><br/>
                  <InputField  className="tag1" id="username" type="text" defaultvalue={state.username} placeholder="Username" name="username" onChange={(value)=> onChangeValue("username",value)}/><br/>
             </div>
             <div className="data1">
                 <label for="password">Password</label><br/>
                  <InputField  className="tag1" id="password" type="text" defaultvalue={state.password} placeholder="Password" name="password" onChange={(value)=> onChangeValue("password",value)}/><br/>
             </div>
            {/* <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" placeholder="Address"/>
            </div> */}
             <div className="data1">
                <label for="address">Address-Line1</label><br/>
               <InputField  className="tag2" type="text" id="line1" defaultvalue={state.line1} placeholder="line1" onChange={(value)=> onChangeValue("line1",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address-Line2</label><br/>
               <InputField  className="tag2" type="text" id="line2" defaultvalue={state.line2} placeholder="line2" onChange={(value)=> onChangeValue("line2",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address-City</label><br/>
               <InputField  className="tag2" type="text" id="city"  defaultvalue={state.city} placeholder="city" onChange={(value)=> onChangeValue("city",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address-State</label><br/>
               <InputField  className="tag2" type="text" id="state" defaultvalue={state.state} placeholder="state" onChange={(value)=> onChangeValue("state",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address-Pincode</label><br/>
               <InputField  className="tag2" type="text" id="pin" defaultvalue={state.pin} placeholder="pin" onChange={(value)=> onChangeValue("pin",Number(value))}/>
            </div>
          <div className="data1">
              <span className="details">Upload ID Proof</span>
              <div className="input-box-id">
                <span className="detail">Choose File</span>
                <div className="browsebut">
                    <label for="upload-photo" className="browse">Browse</label>
                    <input type="file" placeholder="Choose File" id="upload-photo"/>
                </div>
            </div>
        </div>
        <div className="button">
            {/* <button id="submit" type="submit" onclick = " return formValidate()" >Create</button> */}
            {/* <Button className="button-style" id="submit" type="submit" label={id?"Edit":"Create"} handleClick={()=>createfunction({
                name: state.name,
                dateofjoining: state.dateofjoining,
                role: state.role,
                status: state.status,
                experience: state.exp,
                departmentId: "cbe8303f-f240-4dc1-8d22-3feb48efaf6b",
                username: "samp123",
                password: "pass123",
                address:{
                    // line1: "house6",
                    // line2: "lane6",
                    // city: "ptnma",
                    // state: "delhi",
                    // pin: 123456
                    line1: state.line1,
                    line2: state.line2,
                    city: state.city,
                    state: state.state,
                    pin: state.pin
                }
            })}/> */}
               <Button className="button-style" id="submit" type="submit" label={id?"Edit":"Create"} handleClick={()=>onClickSubmit()}/>
            {/* <button id="cancel" type="button">Cancel</button> */}
            <Button className="button-style" id="submit" type="submit" label="Cancel" handleClick={goToNextPage}/>

        </div>
    </div>
    
    </section>
    </main>
    </div>
    )
}

export default CreateEmployee;