import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from '../components/ui/Navbar';
import LoginScreen from '../components/login/LoginScreen';
import Marvel from '../components/marvel/MarvelScreen';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/login" component={ LoginScreen } />
        <Route exact path="/" component={ Marvel } />
      </Switch>
    </Router>
  );
};

export default AppRouter;
