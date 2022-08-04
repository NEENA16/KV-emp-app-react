import {useNavigate} from 'react-router-dom'
import Button from '../components/Button';

const List = () => {
    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/Create');
    };
    return(
        <div>
            <Button label="Create Employee" handleClick={goToNextPage}/>
        
            <section>
              <span>Employee Name</span>
              <span>Employee ID</span>
              <span>Joining Date</span>
              <span>Role</span>
              <span>Status</span>
              <span>Expereince</span>
              <span>Action</span>
        </section>
        </div>
    );
}
export default List;

// import Button from "../components/Button";
// import {useNavigate} from 'react-router-dom'


// const EmployeeList=()=>{
//     const navigate = useNavigate();
//     const goToNextPage = () =>{
//         navigate('/Create');
//     };
//     return(
//         <Button label="cancel" handleClick={goToNextPage}/>
//     );
// }

// export default EmployeeList;