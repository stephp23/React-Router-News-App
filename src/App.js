import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home";
import BusinessNews from "./components/BusinessNews";
import BitcoinNews from "./components/BitcoinNews";
//import data from "./data/"

function App() {
  return (
    <div className="App">
      <div className="app-links">
        <nav className="app-nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/business"}>Business</NavLink>
          <NavLink to={"/bitcoin"}>Bitcoin</NavLink>
        </nav>
      </div>

      <main>
        <Switch>
          <Route exact path={"/"}>
          <Home />
          </Route>
          <Route exact path={"/business"}>
          <BusinessNews BusinessNews={BUSINESS} />
          </Route>
          <Route exact path={"/bitcoin"}>
            <BitcoinNews
              BitcoinNews={BITCOIN}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
