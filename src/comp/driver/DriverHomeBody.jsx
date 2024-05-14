import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate,useParams} from 'react-router-dom';
import './driverHomeBody.css'
import axios from 'axios'
import { Geolocation } from '@capacitor/geolocation'
import { Button } from '@mui/material';
import { apiHttp } from '../../Port';

//const {language,apiHttp}=useSelector((store)=>store.languSlice)





function HomeBody() {
 
  const {name,id}=useParams()
  const navigate=useNavigate()
  const [loc, setLoc] = useState();
  const driverInfo=JSON.parse(localStorage.getItem('logedDriverData')) 
const driverWithClient=JSON.parse(localStorage.getItem('withClient')) 



///////////////////////////////////////////////////////////

useEffect(() => {

  if (driverWithClient==1) {
    navigate(`/driveravailable/${name}/${id}`)
  }
  const printCurrentPosition = async () => {

    const showLoc=(coordinates)=>{
       
    }
  
    const error=(err)=>{
     console.warn(
        `ERROR(${err.code}): ${err.message}`
      ); 
    }
  
    const options={
  
      enableHighAccuracy: true,
              timeout: 50000,
              maximumAge: 10000
    }
    const coordinates = await Geolocation.getCurrentPosition(showLoc,error,options);
  
    console.log('Current position:', coordinates.coords);
   
    setLoc(coordinates.coords)
  };

  const sendDriverLocation=async()=>{

    const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
      latitude:0,
      longitude:0,
    })
}
  
  printCurrentPosition()
  sendDriverLocation()
  

 },[]); 

/////////////////////////////////////////////////////////// const driverWithClient=JSON.parse(localStorage.getItem('withClient')) 




   

const finished=async()=>{
  try {
     
     const clearClientInfo=await axios.post(`${apiHttp}/clearclientinfo/${id}`)

     if (clearClientInfo.data=='cleared') {
          localStorage.removeItem('checkRequist')
          localStorage.removeItem('withClient')
          localStorage.removeItem('message1')
          localStorage.removeItem('message2')
          localStorage.removeItem('message3')
          localStorage.removeItem('message4')
          localStorage.removeItem('message5')
          localStorage.removeItem('message6')
          localStorage.removeItem('message7')
          localStorage.removeItem('message8')
          localStorage.removeItem('message9')
          localStorage.removeItem('message10')
      
       

     }
    } catch (error) {
     //console.log(error)
     alert('no connection')

    }

   
}

const onClick=async()=>{
  finished()
  navigate(`/driveravailable/${name}/${id}`)
  window.location.reload()
  await axios.post(`${apiHttp}/isdriveronline`)

}
/*
const [brow,setBrow]=useState([]);


  
  
    const openCapacitorSite = async () => {
      await Browser.open({ url:`http://localhost:8000` });
      }; */
     
   
//  <div className='searchCarBtnBodyC'> <button className='searchCarBtnCDriver' onClick={onClick}  >Go-online</button> </div>




var chy2=`https://maps.google.com/maps?q=${loc?.latitude},${loc?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

return (
    <div className='homeBodyCon'>

                   {navigator.onLine?<iframe width="100%" height="100%" id="gmap_canvas" src={chy2} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className='iframeMap'></iframe>:<div className='iframeMapNoInternet'  style={{width:'100%',height:'90%',marginBottom:'10px'}}>No Connection</div>}

   <div className='searchCarBtnDriverHomeCon'>
   

<button className='clientNumberFormBtn clientNumberFormOnlineBtn ' onClick={onClick}  type='submit'>Go-online</button>



  </div>




    </div>
  )
}

export default HomeBody

/*   <Link className='searchCarBtnDriverHom' onClick={onClick}> <div className='searchCarBtnText'>Go-online</div></Link>
 */