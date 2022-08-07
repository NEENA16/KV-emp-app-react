import logo from "../images/kv logo.png"
import list from "../images/List.png"
import "../styles/SideNavigation.css";

const SideNavigation = ({}) =>{
    return(
        
        
    <nav>
         <img id="logo" src={logo} alt="keyvalue logo"/>
        <aside>
                <div class="tile">
                     <div class="imagebg">
                         <img src={list}/>
                     </div>
                     <div class="elist">
                            <p>Employee List</p>
                     </div>
                </div>
         </aside>
    </nav>  
    
    );
}

export default SideNavigation;