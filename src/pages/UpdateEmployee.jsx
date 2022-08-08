import InputField from "../components/InputField";
import {useNavigate} from 'react-router-dom';
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import "../styles/Styles.css";
import SideNavigation from "../components/SideNavigation";
import {useEffect, useState} from "react";
import { useGetallEmployeeQuery, useUpdateEmployeeMutation } from '../services/api';
   
const UpdateEmployee = ()=> {
    // const employeecreate=(emp)=>{
    //     CreateEmployee(emp);
    //   };

    const {id} = useParams();
    const {data,isLoading} = useGetallEmployeeQuery();
    const[updatefunction, result] = useUpdateEmployeeMutation(id);

    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/');
    };
    // const [state, setState] = useState({
    //     if(data){
    //         name: state.name,
    //         // eid: "",
    //         jdate: state.jdate,
    //         role: state.role,
    //         status: state.status,
    //         exp: state.exp Number(" "),
    //         line1: state.address.line1,
    //         line2: state.address.line2,
    //         city: state.address.city,
    //         state: state.address.state,
    //         pin: state.address.Number(pin)
    //     }
    // }
    //);

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    // useEffect(()=>{
    //     console.log(state)
    // },[state])

    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="heading">
                <h1>Update Employee</h1>
            </div>
            <section class="form">
        <div className="form-div" name="form">
            <div className="data1">
                <label for="ename">Employee Name</label><br/>
                <InputField className="tag1" id="name" type="text" placeholder="Employee Name" name="name" onChange={(value) => onChangeValue("name", value)} />
            </div>
            <div className="data1">
                <label for="eid">Employee ID</label><br/>
                <InputField  className="tag1" id="eid" type="text" placeholder="Employee ID" name="eid" onChange={(value)=> onChangeValue ("eid",value)}/>
            </div>
            <div className="data1">
               <label for="jdate">Joining Date</label><br/>
               <InputField  className="tag1" id="jdate" type="text" placeholder="Joining Date" name="jdate" onChange={(value)=> onChangeValue("jdate",value)}/>
            </div>
            <div className="data1">
                <label for="role">Role</label><br/>
                 <InputSelect 
                        className="tag1" i
                        d="role" 
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
                    options={[
                        {key:"act",label:"Active"},
                        {key:"in",label:"Inactive"},
                        {key:"prob",label:"Probation"}]} 
                        onChange={(value)=> onChangeValue("status",value)} />
            </div>
            <div className="data1">
                 <label for="experience">Experience</label><br/>
                  <InputField  className="tag1" id="exp" type="text" placeholder="Experience" name="exp" onChange={(value)=> onChangeValue("exp",Number(value))}/><br/>
             </div>
            {/* <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" placeholder="Address"/>
            </div> */}
             <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" id="line1" placeholder="line1" onChange={(value)=> onChangeValue("line1",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" id="line2" placeholder="line2" onChange={(value)=> onChangeValue("line2",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" id="city" placeholder="city" onChange={(value)=> onChangeValue("city",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" id="state" placeholder="state" onChange={(value)=> onChangeValue("state",value)}/>
            </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" id="pin" placeholder="pin" onChange={(value)=> onChangeValue("pin",Number(value))}/>
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
            <Button className="button-style" id="submit" type="submit" label="Create" handleClick={()=>updatefunction({
                name: state.name,
                dateofjoining: state.jdate,
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
            })}/>
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