import logo from '../../assets/logo.png';

import './Sidebar.css';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-resposive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Cobertura de Testes</h1>
                </div>
                <i
                    onClick={() => closeSidebar()}
                    className='fa fa-times'
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>

            </div>

            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <a href="#"> Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#">Serviços Monitorados</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#">Portal Uranus</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#"> Portal Helios</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#"> API Helios</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#"> API Uranus</a>
                </div>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#"> Helios App</a>
                </div>


            </div>
        </div>

    )

}

export default Sidebar; 



