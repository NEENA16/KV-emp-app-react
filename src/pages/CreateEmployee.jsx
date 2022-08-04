import InputField from "../components/InputField";
import {useNavigate} from 'react-router-dom';
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import "../styles/Styles.css";
import TextField from "../components/TextField";
import SideNavigation from "../components/SideNavigation";


const CreateEmployee = ()=> {
    return(
    <div>
        <SideNavigation/>
        <main>
            <section class="blank">

            </section>
            <section class="heading">
                <h1>Create Employee</h1>
            </section>
            <section class="form">
        <form name="form">
            <div className="data1">
                <label for="ename">Employee Name</label><br/>
                {/* <input className ="tag1" id="name" type="text" placeholder="Employee Name" name="name"/> */}

                <InputField className="tag1" id="name" type="text" placeholder="Employee Name" name="name" />
            </div>
            <div className="data1">
                <label for="eid">Employee ID</label><br/>
                {/* <input className="tag1" id="eid" type="text" placeholder="Employee ID" name="eid" /> */}
                <InputField  className="tag1" id="eid" type="text" placeholder="Employee ID" name="eid" />
            </div>
            <div className="data1">
               <label for="jdate">Joining Date</label><br/>
               {/* <input className= "tag1" id="jdate" type="text" placeholder="Joining Date" name="jdate"/> */}
               <InputField  className="tag1" id="eid" type="text" placeholder="Joining Date" name="jdate" />
            </div>
            <div className="data1">
                <label for="role">Role</label><br/>
                {/* <select className="tag1">
                   <option>Choose Role</option>
                   <option>Developer</option>
                   <option>QA</option>
                   <option>Designer</option>
                 </select> */}
                 <InputSelect  options={[{key:"Dev",label:"Developer"},{key:"QA",label:"QA"}]} />
            </div> 
            <div className="data1">
              <label for="status">Status</label><br/>
              {/* <select className="tag1">
                  <option>Status</option>
                  <option>Training</option>
                  <option>Onboard</option>
              </select> */}
               <InputSelect  options={[{key:"train",label:"Trainig"},{key:"on",label:"Onboard"}]}  />
            </div>
            <div className="data1">
                 <label for="experience">Experience</label><br/>
                 {/* <input className="tag1" id="exp" type="text" placeholder="Experience" name="exp"/> */}
                  <InputField  className="tag1" id="eid" type="text" placeholder="Experience" name="exp" /><br/>
             </div>
            <div className="data1">
                <label for="address">Address</label><br/>
               {/* <input className="tag2" type="text" placeholder="Address"/> */}
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
            <Button id="submit" type="submit" label="Create" />
            {/* <button id="cancel" type="button">Cancel</button> */}
            <Button id="submit" type="submit" label="Cancel" />
        </div>
    </form>
    
    </section>
    </main>
    </div>
    )
}

export default CreateEmployee;