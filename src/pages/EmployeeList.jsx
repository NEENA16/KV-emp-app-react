import Button from "../components/Button";
import {useNavigate} from 'react-router-dom'


const EmployeeList=()=>{
    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/Create');
    };
    return(
        <Button label="cancel" handleClick={goToNextPage}/>
    );
}

export default EmployeeList;