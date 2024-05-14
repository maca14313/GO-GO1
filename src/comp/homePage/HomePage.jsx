import React, { useEffect, useRef, useState } from 'react';
import './homepage.css'
//import {io} from 'socket.io-client'
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
//const {language,apiHttp}=useSelector((store)=>store.languSlice)

import HomeBody from '../homeMap/HomeBody';
import { useNavigate } from 'react-router-dom';



function HomePage() {
  const [loading,setLoading] = useState(1);
  //const socket = useRef();
  const [phone,setPhone]=useState('0925090339')
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const driverInfo=JSON.parse(localStorage.getItem('logedDriverData')) 
  const driverWithClient=JSON.parse(localStorage.getItem('withClient')) 




  const navigate = useNavigate()


 useEffect(() => {
  if (driverWithClient==1) {
     navigate(`/driveravailable/${driverInfo?.name}/${driverInfo?.id}`)
     
    } else if(driverInfo?.name){
      navigate(`/driverhome/${driverInfo?.name}/${driverInfo?.id}`)
    }
 },[]);
   
//https://good-puce-kangaroo-wig.cyclic.app/
//setSocket(io('https://scary-blue-moccasins.cyclic.app'))





  return (

    <div className="homepage">
      
      <HomeBody/>
     
    </div>
  )
}

export default HomePage