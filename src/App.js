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
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import Order from "./Pages/Purchase/Order/Order";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AllOrders from "./Pages/Dashboard/AllOrders/AllOrders";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import Explore from "./Pages/Explore/Explore/Explore";


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
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute exact path='/purchase/:id'>
          <Order></Order>
        </PrivateRoute>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
}

export default App;
