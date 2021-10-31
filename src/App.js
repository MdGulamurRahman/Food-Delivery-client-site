import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddPackage from './components/AddPackage/AddPackage';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <Route path="/register">
            <Register></Register>
          </Route>
            <PrivateRoute path="/details/:productId">
            <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
            <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/package">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
