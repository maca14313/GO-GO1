
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ListOfDrivers from './comp/adminManagement/ListOfDrivers';


import SignIn from './comp/driver/SignIn';
import LogIn from './comp/driver/LogIn';
import FindDriverForm from './comp/homeMap/FindDriverForm';

import HomePage from './comp/homePage/HomePage';
import DriverHome from './comp/driver/DriverHome';
import DriverAvailable from './comp/driver/DriverAvailable';
import Browsers from './Browsers';

function App() {

  return (
       <Router>
    <div className="App">
      <Routes>


        <Route path="/listofdrivers" element={<ListOfDrivers/>}/>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/driverhome/:name/:id" element={<DriverHome/>}/>
        <Route path="/driveravailable/:name/:id" element={<DriverAvailable/>}/>
        <Route path="/driversignein" element={<SignIn/>} />
        <Route path="/driverlogin" element={<LogIn/>} />
        <Route path="/FindDriverForm" element={<FindDriverForm/>} />
        <Route path="/Browsers" element={<Browsers/>} />







     </Routes>
    </div>
    </Router>
  )
}

export default App
