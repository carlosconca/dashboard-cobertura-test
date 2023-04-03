import avatar from '../../assets/avatar.png';
import './Navbar.css';

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left"> 
               <a href="#">Portal Uranus</a> 
               <a href="#">Portal Helios</a>  
               <a href="#">API Uranus</a>  
               <a href="#">API Helios</a> 
               <a href="#">Helios APP</a>  

               <a href="#" className="active_link">Admin</a>  
            </div>

            <div className="navbar__right">
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>

                <a href="#">
                  <i className="fa fa-clock-o"></i>
                </a>

                <a href="#">
                  <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>

           

        </nav>
    )
}

export default Navbar;
