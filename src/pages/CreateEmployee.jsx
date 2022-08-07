import InputField from "../components/InputField";
import {useNavigate} from 'react-router-dom';
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import "../styles/Styles.css";
import SideNavigation from "../components/SideNavigation";
import {useEffect, useState} from "react";

   
const CreateEmployee = ()=> {
    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/');
    };
    const [state, setState] = useState({
        name: "",
        eid: "",
        jdate: " ",
        role: " ",
        status: " ",
        exp: " ",
    }
    );

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    useEffect(()=>{
        console.log(state)
    },[state])

    return(
    <div>
        <SideNavigation/>
        <main>
            <div className="heading">
                <h1>Create Employee</h1>
            </div>
            <section class="form">
        <form name="form">
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
                  <InputField  className="tag1" id="exp" type="text" placeholder="Experience" name="exp" onChange={(value)=> onChangeValue("exp",value)}/><br/>
             </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               <InputField  className="tag2" type="text" placeholder="Address"/>
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
            <Button className="button-style" id="submit" type="submit" label="Create" />
            {/* <button id="cancel" type="button">Cancel</button> */}
            <Button className="button-style" id="submit" type="submit" label="Cancel" handleClick={goToNextPage}/>

        </div>
    </form>
    
    </section>
    </main>
    </div>
    )
}

export default CreateEmployee;