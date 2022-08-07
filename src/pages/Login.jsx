import Button from "../components/Button"
import {useNavigate} from 'react-router-dom'
import sideimage from "../images/side-image.png"
import logo from "../images/kv logo.png"
import "../styles/Login.css";
import InputField from "../components/InputField";


const Login=()=>{
    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate('/list');
    };
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
                         <InputField  id="username" type="text" placeholder="Username" name="username"/>
                         <InputField  id="password" type="password" placeholder="Password" name="username"/>
                         <Button className="button-login" id="login" type="submit" label="Login In" handleClick={goToNextPage} />
                    </div>
            </div>
            
        </div>
        
    );
}

export default Login;