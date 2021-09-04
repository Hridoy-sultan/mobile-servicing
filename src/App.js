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
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <Route path='/addAdmin'>
            <AddAdmin></AddAdmin>
          </Route>
          <Route path='/deleteService'>
            <DeleteService></DeleteService>
          </Route>
          <Route path='/allOrder'>
            <AllOrder></AllOrder>
          </Route>
          <Route path='/booking'>
            <Booking bookInfo={bookInfo} ></Booking>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/login'>
            <Login ></Login>
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
