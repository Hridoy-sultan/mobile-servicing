import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from "./Components/Booking/Booking";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Review from "./Components/Review/Review";
import Navbar from "./Components/Home/Navbar/Navbar";
import AddService from "./Components/AddService/AddService";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import DidNotMatch from "./Components/DidNotMatch/DidNotMatch";
import DeleteService from "./Components/Dashboard/DeleteService/DeleteService";
import AllOrder from "./Components/Dashboard/Orders/AllOrder";
export const UserContext = createContext()
function App() {
  const [bookInfo, setBookInfo] = useState({});
  const handleBook = serviceData => {
    setBookInfo(serviceData)

  }
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home handleBook={handleBook}></Home>
          </Route>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path='/deleteService'>
            <DeleteService></DeleteService>
          </PrivateRoute>
          <PrivateRoute path='/allOrder'>
            <AllOrder></AllOrder>
          </PrivateRoute>
          <PrivateRoute path='/booking'>
            <Booking bookInfo={bookInfo} ></Booking>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route>
            <Login path='/login'></Login>
          </Route>


          <Route path='*'>
            <DidNotMatch></DidNotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
