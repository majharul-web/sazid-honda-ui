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
import AuthProvider from "./context/AuthProvider";
import Register from "./Pages/Login/Register/Register";
import Bikes from "./Pages/Home/Bikes/Bikes";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/bikes">
          <Bikes></Bikes>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

      </Switch>
    </Router>
  </AuthProvider>
}

export default App;
