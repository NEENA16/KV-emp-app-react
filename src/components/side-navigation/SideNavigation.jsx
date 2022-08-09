import logo from "../../images/kvlogo.png"
import list from "../../images/List.png"
import "./SideNavigation.css";
import Button from "../button/Button";
import {useNavigate} from "react-router-dom"
import { removeStorage } from "../../services/util";

const SideNavigation = ({}) =>{

    const navigate=useNavigate();
    const handlelogout =() =>{
        removeStorage("idToken");
        navigate("/");
    }
    return(
        
        
    <nav>
         <img id="logo" src={logo} alt="keyvalue logo"/>
        <aside>
                <div className="tile">
                     <div className="imagebg">
                         <img src={list}/>
                     </div>
                     <div className="elist">
                            <a href="/list">Employee List</a>
                     </div>
                </div>
               
         </aside>
         <Button id="logout" className="logout" label="Logout" type="submit" handleClick={()=>handlelogout()}/>
    </nav>  
    
    );
}

export default SideNavigation;