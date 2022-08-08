import Button from "../components/Button"
import {useNavigate} from 'react-router-dom'
import sideimage from "../images/side-image.png"
import logo from "../images/kv logo.png"
import "../styles/Login.css";
import InputField from "../components/InputField";
import { useLoginEmployeeMutation } from '../services/api';
import { useEffect, useState } from "react";
import { setStorage } from "../services/util";


const Login=()=>{
    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/list');
    };
    const[loginfunction, result] = useLoginEmployeeMutation();
    const [state, setState] = useState({
        username: "",
        password: ""
    }
    );
    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }
    const onClickSubmit = async() => {
        const payload = {
            username: state.username,
            password: state.password
        }
        // const response = await loginfunction(payload).unwrap();
        // setStorage("idToken",response?.data?.idToken);
        loginfunction(payload)
    }
    useEffect(()=>{
        if(result.isSuccess){
            setStorage("idToken",result?.data?.data?.idToken)
            navigate('/list');
        }
    })
    

    console.log(result);

    return(
        // <Button label="Next" handleClick={goToNextPage} />
        <div className="login">
            <div className="login-image">
                    <img className="login-sideimg" src={sideimage}  />
            </div>
            <div className="form-login">
                    <div className="image">
                         <img className="logo" src={logo} alt="keyvalue logo" />
                    </div>
                    <div className="login-data">
                         <InputField  id="username" type="text" placeholder="Username" name="username" onChange={(value) => onChangeValue("username", value)}/>
                         <InputField  id="password" type="password" placeholder="Password" name="username" onChange={(value) => onChangeValue("password", value)}/>
                         <Button className="button-login" id="login" type="submit" label="Login In" handleClick={()=>onClickSubmit()} />
                    </div>
            </div>
            
        </div>
        
    );
}

export default Login;