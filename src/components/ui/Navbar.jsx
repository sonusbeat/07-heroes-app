import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse mr-auto">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/hero-search"
          >
            Search
          </NavLink>
        </div>{/* navbar-nav */}
      </div>{/* navbar-collapse */}

      <div className="navbar-collapse ml-auto">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </div>{/* navbar-nav */}
      </div>{/* navbar-collapse */}

    </nav>
  );
};

export default Navbar;