import logo from "../images/kv logo.png"
import list from "../images/List.png"
import "../styles/SideNavigation.css";

const SideNavigation = ({}) =>{
    return(
        
        
    <nav>
         <img id="logo" src={logo} alt="keyvalue logo"/>
        <aside>
                <div className="tile">
                     <div className="imagebg">
                         <img src={list}/>
                     </div>
                     <div className="elist">
                            <p>Employee List</p>
                     </div>
                </div>
         </aside>
    </nav>  
    
    );
}

export default SideNavigation;