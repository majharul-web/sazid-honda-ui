import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>

    </Switch>
  </Router>
}

export default App;
