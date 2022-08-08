import SideNavigation from "../components/SideNavigation";
import "../styles/EmployeeDetails.css";
import{Link} from "react-router-dom"
import {MdOutlineEdit} from "react-icons/md";
import { useGetEmployeeQuery } from '../services/api';
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const EmployeeDetails =()=>{
    const {id}= useParams();
    console.log("id=",id);
    const { data, isLoading } = useGetEmployeeQuery(id);
    (data)?console.log(data.data):console.log("Empty");

    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate(`/${id}/edit`);
    };
    return(

        <div>
            <SideNavigation/>
            <main>
                <div className="heading">
                    <h1>Employee Details</h1>
                    <div className="edit-icon" onClick={goToNextPage}>  
                        <span className="edit-icon-span">
                          <MdOutlineEdit />
                         </span>
                         <div className="edit-content">Edit</div>
                    </div>
                </div>

                {/* Details */}

                <div className="emp-details">
                    <div className="emp-data">
                        <div className="emp-item">Employee Name</div>
                        <div className="emp-data-db">{data?.data?.name}</div>
                       {/* { console.log("name",{data.data.name})} */}
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Employee ID</div>
                        <div className="emp-data-db">{data?.data?.id}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Joining Date</div>
                        <div className="emp-data-db">{data?.data?.dateofjoining}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Role</div>
                        <div className="emp-data-db">{data?.data?.role}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Status</div>
                        <div className={`emp-status ${data?.data?.status}`}>{data?.data?.status}</div>   
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Experience</div>
                        <div className="emp-data-db">{data?.data?.experience} Years</div>
                    </div>
                    <hr/>
                    <div className="emp-data">
                        <div className="emp-item">Address</div>
                        <div className="emp-data-db">{data?.data?.address.line1},{data?.data?.address.line2},</div>
                        <div className="emp-data-db">{data?.data?.address.city},{data?.data?.address.state},{data?.data?.address.pin}</div>
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