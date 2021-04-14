import { Link, NavLink, useHistory } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from "../../auth/AuthContext";
import types from '../../types/types';

const Navbar = () => {
  const { user: { name }, dispatch } = useContext(AuthContext);

  // Tenemos acceso al history a travéz del react-router-dom
  const history = useHistory();

  const HandleLogout = () => {
    const action = {
      type: types.logout
    };

    dispatch(action);

    history.replace("/login");
  };

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
          <span className="nav-item nav-link text-info">
            { name }
          </span>

          <button
            className="nav-item nav-link btn"
            onClick={ HandleLogout }
          >
            Logout
          </button>
        </div>{/* navbar-nav */}
      </div>{/* navbar-collapse */}

    </nav>
  );
};

export default Navbar;