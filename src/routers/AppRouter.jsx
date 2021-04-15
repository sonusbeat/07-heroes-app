import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AuthContext from '../auth/AuthContext';
import PrivateRoute from "./PrivateRoute";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PublicRoute from './PublicRoute';


const AppRouter = () => {
  const { user:{ logged } } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>

          <PublicRoute
            exact
            path="/login"
            isAuthenticated={ logged }
            component={ LoginScreen }
          />

          <PrivateRoute
            path="/"
            component={ DashboardRoutes }
            isAuthenticated={ logged }
          />

        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
