import {Link,useNavigate} from 'react-router-dom'
import Button from '../../components/button/Button';
import Cards from '../../components/card/Card';
import SideNavigation from "../../components/side-navigation/SideNavigation";
import "./EmployeeList.css";
// import { useGetallEmployeeQuery } from '../../services/BaseApi';
import InputSelect from '../../components/input-select/InputSelect';
import { useGetallEmployeeQuery } from './EmployeeListApi';



const List = () => {
    const navigate = useNavigate();
    // const goToNextPage = () =>{
    //     navigate('/Create');
    // };
    const goToNextPage=(id)=>{
        // console.log("newdata=",id);
        navigate(`/detail/${id}`);
    };
    const { data, error, isLoading } = useGetallEmployeeQuery()
    // console.log(data);
    // const empArr =[
    //     {
    //         name: 'Vishal M',
    //         empId: 'Lazada',
    //         'joiningdate':'12/04/2021',
    //         'role':'Full Stack',
    //         'status':'Probation',
    //         'experience':'5'
    //     },
    //     {
    //         name: 'Susan Kurian',
    //         empId: 'XYZ',
    //         'joiningdate':'12/04/2021',
    //         'role':'UI Engineer',
    //         'status':'Probation',
    //         'experience':'7'
    //     },
    //     {
    //         name: 'Yugesh',
    //         empId: 'XYZ',
    //         'joiningdate':'12/04/2021',
    //         'role':'Devops',
    //         'status':'Active',
    //         'experience':'6'
    //     }
    // ];
    return(
        
        <div>
            <SideNavigation/>
            {/* <Button label="Create Employee" handleClick={goToNextPage}/>
            <section>
              <span>Employee Name</span>
              <span>Employee ID</span>
              <span>Joining Date</span>
              <span>Role</span>
              <span>Status</span>
              <span>Expereince</span>
              <span>Action</span>
             </section>
             <br/> */}

             {/* <div> */}
                {/* {empArr.map((elem) => (
                    <div>
                        <> Name: {elem.name}</>
                        <>Id: {elem.id}</>
                        <br /><br />
                    </div>
                ))} */}
            {/* </div> */}
            <main>
            
            <div>
                <div className="heading">
                    <h1>Employee List</h1>
                    <InputSelect label="Filter By" className="filter-select" options={[
                        {key:"name",label:"Employee Name"},
                        {key:"empid",label:"Employee ID"},
                        {key:"jdate",label:"Joining Date"},
                        {key:"role",label:"Role"},
                        {key:"status",label:"Status"},
                        {key:"exp",lable:"Experience"}
                    ]}  />
                    {/* <Button label="Create employee" handleClick={goToNextPage}/> */}
                    <Link to="/create" className='create-emp'>
                        <span className='create-emp-plus'>+</span>
                        <div>Create Employee</div>
                    </Link>
                </div>
                <div className='list-heading'>
                    <div className='list-heading-item'>Employee Name</div>
                    <div className='list-heading-item'>Employee ID</div>
                    <div className='list-heading-item'>Joining Date</div>
                    <div className='list-heading-item'>Role</div>
                    <div className='list-heading-item'>Status</div>
                    <div className='list-heading-item'>Experience</div>
                    <div className='list-heading-item'>Action</div>
                </div>
                {data?.data.map((Item) =>{
                    // console.log("data=",Item.id)
                    return(
                            <Cards
                          name={Item.name}
                          empId={Item.id}
                          joiningdate={Item.dateofjoining}
                          role={Item.role}
                          status={Item.status}
                          experience={Item.experience}
                          handleClick={()=>goToNextPage(Item.id)}
                        /> 
                    );
                })}
            </div>
            </main>

        </div>
    );
}
export default List;

// {data?.data.map((Item) =>{
//     return(
//         <Cards
//           name={Item.name}
//         //   empId={Item.id}
//           joiningdate={Item.dateofjoining}
//           role={Item.role}
//           status={Item.status}
//           experience={Item.experience}
//         />
//     );
// })}