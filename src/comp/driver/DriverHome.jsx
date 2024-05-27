import './driverHome.css'
import Footer from './DriverFotter';
import NavBar from '../navbar/NavBar';
import DriverHomeBody from './DriverHomeBody';

function DriverHome() {
  return (
    <div className="homepage">
    <NavBar/>
    <DriverHomeBody/>
   
  </div>
  )
}

export default DriverHome