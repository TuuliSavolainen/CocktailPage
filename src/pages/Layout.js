import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openMenu =(e)=>{
    e.preventDefault()
    const currentState = !isOpen
    setIsOpen(currentState)

  }
  return (
    <>
      <nav className="menu">
        <div className="burger-menu" onClick={e => openMenu(e)}>
          {isOpen ? 
          <div className = 'burger-menu-open'> 
            <div className="menu-button"></div>
            <div className="menu-button"></div>
            <div className="menu-button"></div>
          </div>
          :
          <div className = 'burger-menu-close'> 
            <div className="menu-button"></div>
            <div className="menu-button"></div>
            <div className="menu-button"></div>
          </div>

        }
        </div>

        <div className="mobile-menu-selection">
          <ul className="menu-items">
            <li className="menu-item">
              <Link to="/" className="menu-link">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/drinks" className="menu-link">Drinks</Link>
            </li>
            <li className="menu-item">
              <Link to="/contact" className="menu-link">Something else</Link>
            </li>
          </ul>
        </div>
      </nav>


      <Outlet />
    </>
  )
};

export default Layout;
