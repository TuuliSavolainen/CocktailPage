import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="menu">
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
      </nav>


      <Outlet />
    </>
  )
};

export default Layout;
