import SideNavigation from "../components/SideNavigation";
import "../styles/EmployeeDetails.css";
// import{Link} from "react-router-dom"
import {MdOutlineEdit} from "react-icons/md";
import { useGetEmployeeQuery } from '../services/api';
import {useParams} from "react-router-dom";


const EmployeeDetails =()=>{
    const {id}= useParams();
    // console.log("id=",id);
    const { data, isLoading } = useGetEmployeeQuery(id);
    console.log(data.data.role);
    return(

        <div>
            <SideNavigation/>
            <main>
                <div className="heading">
                    <h1>Employee Details</h1>
                    <div className="edit-icon">
                        <span className="edit-icon-span">
                          <MdOutlineEdit />
                         </span>
                         <div>Edit</div>
                    </div>
                </div>

                {/* Details */}

                <div className="emp-details">
                    <div className="emp-data">
                        <div className="emp-item">Employee Name</div>
                        <div className="emp-data-db">{data.data.name}</div>
                       {/* { console.log("name",{data.data.name})} */}
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Employee ID</div>
                        <div className="emp-data-db">{data.data.Id}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Joining Date</div>
                        <div className="emp-data-db">{data.data.dateofjoining}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Role</div>
                        <div className="emp-data-db">sff</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Status</div>
                        <div className="emp-status">sff</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Experience</div>
                        <div className="emp-data-db">sff Years</div>
                    </div>
                    <hr/>
                    <div className="emp-data">
                        <div className="emp-item">Address</div>
                        <div className="emp-data-db">sff</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Employee ID Proof</div>
                        <div className="emp-data-db">sff</div>
                    </div>
                </div>

            </main>
        </div>
    )
}
export default EmployeeDetails;