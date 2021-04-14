import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {

  return (
    <section>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/hero/:heroId" component={ HeroScreen } />
          <Route exact path="/hero-search" component={ SearchScreen } />
          <Route exact path="/dc" component={ DcScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </section>
  );
}

export default DashboardRoutes;