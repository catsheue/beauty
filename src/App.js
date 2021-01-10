import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ClinicSection from "./components/ClinicSection";

function App() {
  return (
    <div className="App beauty">
      <Router>
        <header className="App-header">
          <h1>醫美診所收集</h1>
        </header>
        <div className="App-body">
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/">首頁</NavLink>
              </li>
              <li>
                <NavLink to="/clinics">診所列表</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <Switch>
              <Route path="/clinics">
                <ClinicSection />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
