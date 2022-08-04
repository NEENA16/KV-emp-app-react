import logo from "../images/kv logo.png"
import list from "../images/List.png"
import "../styles/Styles.css";

const SideNavigation = ({}) =>{
    return(
        <nav>
        <header id="logo">
            {/* <img src="kv logo.png" alt="keyvalue logo"/> */}
            <img src={logo} alt="keyvalue logo"/>
        </header>
    <aside>
        <div class="tile">
            <div class="imagebg">
                {/* <img src="List.png"/> */}
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