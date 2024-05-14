import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './homebody.css'
import { IoCall } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";





import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';
import { IoMdRefresh } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";





import beep1 from './Barcode-scanner-beep-sound.mp3';


import { Link } from 'react-router-dom';

import { Geolocation } from '@capacitor/geolocation'

import NavBar from '../navbar/NavBar';
import { apiHttp } from '../../Port';


















function HomeBody() {

  //const socket = useRef();

  const [clientPhone,setClientPhone]=useState(JSON.parse(localStorage.getItem('clientPhone'))?JSON.parse(localStorage.getItem('clientPhone')):'')
  const [phone,setPhone]=useState(null)
  const [name,setName]=useState(JSON.parse(localStorage.getItem('clientName')))

  const [fetchingClientInfo,setFetchingClientInfo]=useState(0)
  const [fetchingSearchDriver,setFetchingSearchDriver]=useState(0)
  const [waitingFinishing,setWaitingFinishing]=useState(0)
  const [waitingCancelSearch,setWaitingCancelSearch]=useState(0)
  const [waitingSendingMessage,setWaitingSendingMessage]=useState(0)







  const [from,setFrom]=useState(JSON.parse(localStorage.getItem('from')))
  const [goTo,setGoTo]=useState(JSON.parse(localStorage.getItem('goTo')))
  const [price,setPrice]=useState(JSON.parse(localStorage.getItem('price'))) 


  const [canceledDriverId,setCanceledDriverId]=useState(JSON.parse(localStorage.getItem('canceledDriverId')))
  const [driverGrandFatherName,setDriverGrandFatherName]=useState(JSON.parse(localStorage.getItem('driverGrandFatherName')))
   const driverInfo=JSON.parse(localStorage.getItem('logedDriverData'))?JSON.parse(localStorage.getItem('logedDriverData')) :'' 


  



   const [messageInput,setMessageInput]=useState(0)




  const [searchBtnOnOf,setSearchBtnOnOf] = useState(clientPhone!=''?'1':null);
  const [clientNumberFormOnOf,setClientNumberFormOnOf] = useState(clientPhone!=''?1:0);


  const [loading,setLoading] = useState(null);

  const [driverFound,setDriverFound] = useState(false);




  

  
  const [closest,setClosest]=useState(JSON.parse(localStorage.getItem('driverData')))

  const [loc, setLoc] = useState();
  const [loc2, setLoc2] = useState();
  const [locGeo, setLocGeo] = useState([]);
  const [locGeoLat, setLocGeoLat] = useState([]);
  const [locGeoLon, setLocGeoLon] = useState([]);




  
  const [acceptanceCounter,setAcceptanceCounter] = useState(null);



 const [startCheckDriverAcceptance,setStartCheckDriverAcceptance] = useState(0);
 const [checkDriverAcceptance,setCheckDriverAcceptance] = useState(JSON.parse(localStorage.getItem('checkDriverAcceptance'))?JSON.parse(localStorage.getItem('checkDriverAcceptance')):[]);
 const [delay,setDelay] = useState(0);
 const [regectedDelay,setRegectedDelay] = useState(0);
 const [withDriver,setWithDriver] = useState(0);
 const [driverInfoView,setDriverInfoView] = useState(0);
 const [noDriver,setNoDriver] = useState(0);
 const [noNetwork,setNoNetwork] = useState(0);
 const [shourBtn,setShourBtn] = useState(0);

 const [notToGether,setNotToGether] = useState(0);


 const [messageOnoOfBtn,setMessageOnOfBtn] = useState(0);



 let noResponse=useRef();
 let noResponse2=useRef();









    


 




  //////////////////////////////////////////////// moved
useEffect(() => {
  const printCurrentPosition = async () => {

    const showLoc=(coordinates)=>{
        setLoc(coordinates.coords)
     
    }
  
    const error=(err)=>{
     console.warn(
        `ERROR(${err.code}): ${err.message}`
      ); 
    }
  
    const options={
  
      enableHighAccuracy: true,
              timeout: 50000,
              maximumAge:0,
    }
    const coordinates = await Geolocation.watchPosition(options,showLoc,error);
  
    console.log('Current position:', coordinates?.coords);
    setLocGeo(coordinates?.coords.latitude)
    setLocGeoLat(coordinates?.coords.latitude)
    setLocGeoLon(coordinates?.coords.longitude)
    setLoc(coordinates?.coords)
  };
  printCurrentPosition()
 }, []); 

///////////////////////////////////////////////////////////
/* let intervalLoc;

useEffect(() => {
  intervalLoc = setInterval(async() => {

    const showLoc=(coordinates)=>{
      setLoc(coordinates.coords)

    }
  
    const error=(err)=>{
     console.warn(
        `ERROR(${err.code}): ${err.message}`
      ); 
    }
  
    const options={
  
      enableHighAccuracy: true,
              timeout: 5000000,
              maximumAge:0,
    }
    const coordinates = await Geolocation.getCurrentPosition(showLoc,error,options);
  
    console.log('Current position:', coordinates.coords);
    setLocGeo(coordinates.coords.latitude)
    setLocGeoLat(coordinates.coords.latitude)
    setLocGeoLon(coordinates.coords.longitude)
    setLoc2(coordinates.coords)
  }, 6000);
  return () => clearInterval(intervalLoc);

 }, []); */


   //////////////////////////////////////////////// moved
 useEffect(() => {
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
              maximumAge:0,
    }
    const coordinates = await Geolocation.getCurrentPosition(showLoc,error,options);
  
    console.log('Current position:', coordinates.coords);
    setLocGeo(coordinates.coords.latitude)
    setLocGeoLat(coordinates.coords.latitude)
    setLocGeoLon(coordinates.coords.longitude)
    setLoc2(coordinates.coords)
  };
  printCurrentPosition()
 }, []); 

///////////////////////////////////////////////////////////
/*
useEffect(() => {

   const showLoc=(location)=>{
    setLoc(location.coords)
   // console.log(location.coords.latitude);
    //console.log(location.coords.longitude);
    //console.log(location.coords.accuracy);
  }

  const error=(err)=>{
   console.warn(
      `ERROR(${err.code}): ${err.message}`
    ); 
  }

  const options={

    enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000
  }
  

  navigator.geolocation.watchPosition(showLoc,error,options);
 // navigator.geolocation.getCurrentPosition(showLoc,error,options)
  
},[]); */

/* useEffect(() => {

  const showLoc=(location)=>{
   setLoc2(location.coords)
  // console.log(location.coords.latitude);
   //console.log(location.coords.longitude);
   //console.log(location.coords.accuracy);
 }

 const error=(err)=>{
  /* console.warn(
     `ERROR(${err.code}): ${err.message}`
   ); 
 }

 const options={

   enableHighAccuracy: true,
           timeout: 5000,
           maximumAge: 10000
 }
 

 //navigator.geolocation.watchPosition(showLoc,error,options);
navigator.geolocation.getCurrentPosition(showLoc,error,options)
 
},[]); */

//const [startCheckDriverAcceptance,setStartCheckDriverAcceptance] = useState(0);
 //const [checkDriverAcceptance,setCheckDriverAcceptance] = useState(JSON.parse(localStorage.getItem('checkDriver'))?JSON.parse(localStorage.getItem('checkDriver')):0);

 
    //////////////////////////////////////////////// moved

const driverAcceptance= checkDriverAcceptance.driverAcceptance
useEffect(() => {

  if (clientPhone=='') {
    setSearchBtnOnOf(null)
  }
  
  
  if (driverAcceptance==1) {
    start()
    setLoading(null)
    setStartCheckDriverAcceptance(0)
    setWithDriver(1)
    setSearchBtnOnOf(null)
    setDriverInfoView(true)
    return () => clearTimeout(noResponse2.current);

  }
 

 if (driverAcceptance==2) {
    //setStartCheckDriverAcceptance(null)
    clearTimeout(noResponse2.current);
    setSearchBtnOnOf(null)
    setRegectedDelay(1)
    const resetDriverAcceptance=async()=>{
      const checkDriver=await axios.post(`${apiHttp}/resetdriveracceptance/${clientPhone}`)

     setCheckDriverAcceptance([])
    }
   
    switch (null) {
      case JSON.parse(localStorage.getItem('unacceptance1')):
        localStorage.setItem('unacceptance1',JSON.stringify(checkDriverAcceptance.driverId))
        //setStartCheckDriverAcceptance(0)
        localStorage.removeItem('checkDriverAcceptance')

        setAcceptanceCounter(1)
        resetDriverAcceptance()

        break;
      case JSON.parse(localStorage.getItem('unacceptance2')):
        localStorage.setItem('unacceptance2',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(2)
       // setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()

        break;
      case JSON.parse(localStorage.getItem('unacceptance3')):
        localStorage.setItem('unacceptance3',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(3)
        //setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance4')):
        localStorage.setItem('unacceptance4',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(4)
        //setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance5')):
        localStorage.setItem('unacceptance5',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(5)
       // setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance6')):
        localStorage.setItem('unacceptance6',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(6)
        //setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance7')):
        localStorage.setItem('unacceptance7',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(7)
        //setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance8')):
        localStorage.setItem('unacceptance8',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(8)
       // setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance9')):
        localStorage.setItem('unacceptance9',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(9)
       // setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      case JSON.parse(localStorage.getItem('unacceptance10')):
        localStorage.setItem('unacceptance10',JSON.stringify(checkDriverAcceptance.driverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(10)
        //setStartCheckDriverAcceptance(0)
        resetDriverAcceptance()
        break;
      default:
        console.log("I don't own a pet");
        break;
    }


  }


  if (delay==1) {

         setDelay(0)
         
  
   const resetDriverAcceptance=async()=>{
      const cancelSearch=await axios.post(`${apiHttp}/cancelsearch/${canceledDriverId}`)

    }
   resetDriverAcceptance()
          
    switch (null) {
      case JSON.parse(localStorage.getItem('unacceptance1')):
        localStorage.setItem('unacceptance1',JSON.stringify(canceledDriverId))
        
        localStorage.removeItem('checkDriverAcceptance')

        setAcceptanceCounter(1)

       

        break;
      case JSON.parse(localStorage.getItem('unacceptance2')):
        localStorage.setItem('unacceptance2',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(2)

    

        break;
      case JSON.parse(localStorage.getItem('unacceptance3')):
        localStorage.setItem('unacceptance3',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(3)

       
        
        break;
      case JSON.parse(localStorage.getItem('unacceptance4')):
        localStorage.setItem('unacceptance4',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(4)

       
       
        break;
      case JSON.parse(localStorage.getItem('unacceptance5')):
        localStorage.setItem('unacceptance5',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(5)

     
        break;
      case JSON.parse(localStorage.getItem('unacceptance6')):
        localStorage.setItem('unacceptance6',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(6)

       
        break;
      case JSON.parse(localStorage.getItem('unacceptance7')):
        localStorage.setItem('unacceptance7',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(7)

       
        break;
      case JSON.parse(localStorage.getItem('unacceptance8')):
        localStorage.setItem('unacceptance8',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(8)

      
        break;
      case JSON.parse(localStorage.getItem('unacceptance9')):
        localStorage.setItem('unacceptance9',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(9)    

      
        break;
      case JSON.parse(localStorage.getItem('unacceptance10')):
        localStorage.setItem('unacceptance10',JSON.stringify(canceledDriverId))
        localStorage.removeItem('checkDriverAcceptance')
        setAcceptanceCounter(10)

        
        break;
      default:
        console.log("I don't own a pet");
        break;
    }


  }
  

}, [checkDriverAcceptance,delay]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                           /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


              ////setingClientPhone

       const setingClientInfo=async(e)=>{
  e.preventDefault();
         setFetchingClientInfo(1)
    try {

      const sendClientData=await axios.post(`${apiHttp}/regclientdata`,{
        clientPhoneNumber:phone,
        clientName:name,
      })
           const clientDatas=sendClientData.data
         
          console.log(clientDatas.clientName)
      localStorage.setItem('clientPhone',JSON.stringify(clientDatas.clientPhoneNumber))
      localStorage.setItem('clientName',JSON.stringify(clientDatas.clientName))
      setClientPhone(clientDatas.clientPhoneNumber)
      if (clientDatas.success=='yes') {
      }
        window.location.reload()
        
      
    } catch (error) {
      setNoNetwork(1)
    }
  


  
 }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 console.log(loc?.latitude)
    const sendPassengerLocation=async(e)=>{
      setFetchingSearchDriver(1)
      e.preventDefault() 
         if (loc?.latitude!=undefined) {
          try {
            resetAll2()

            await axios.post(`${apiHttp}/isdriveronline`)

            const passengerLocation=await axios.post(`${apiHttp}/sendpassengerlocation/${0}/${clientPhone}/${name}`,{
              latitude:loc?.latitude,
              longitude:loc?.longitude,
              from:from?from:JSON.parse(localStorage.getItem('from')),
              goTo:goTo?goTo:JSON.parse(localStorage.getItem('goTo')),
              price:price?price:JSON.parse(localStorage.getItem('price')),
              driverId1:0,
              driverId2:0,
              driverId3:0,
              driverId4:0,
              driverId5:0,
              driverId6:0,
              driverId7:0,
              driverId8:0,
              driverId9:0,
              driverId10:0,
            })
            const searchRes =passengerLocation.data
              if (searchRes.good=='good') {
              setCanceledDriverId(searchRes.id)
              localStorage.setItem('canceledDriverId',JSON.stringify(searchRes.id))
              setSearchBtnOnOf(null)
              setLoading(1)
              setClosest(passengerLocation.data)
              setStartCheckDriverAcceptance(1)
              setFetchingSearchDriver(0)
            }else{
              setNoDriver(1)
            }
  
          
          } catch (error) {
            setNoNetwork(1)
          }
         }else{
          setNoNetwork(1)
         }
       

   
         //localStorage.setItem('driverData',JSON.stringify(passengerLocation.data))

        }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const searchCancel=async()=>{
        setWaitingCancelSearch(1)
              try {
                window.location.reload()
                setCheckDriverAcceptance([])
                localStorage.removeItem('checkDriverAcceptance')
                localStorage.removeItem('canceledDriverId')
                localStorage.removeItem('unacceptance1')
                localStorage.removeItem('unacceptance2')
                localStorage.removeItem('unacceptance3')
                localStorage.removeItem('unacceptance4')
                localStorage.removeItem('unacceptance5')
                localStorage.removeItem('unacceptance6')
                localStorage.removeItem('unacceptance7')
                localStorage.removeItem('unacceptance8')
                localStorage.removeItem('unacceptance9')
                localStorage.removeItem('unacceptance10')



                const cancelSearch=await axios.post(`${apiHttp}/cancelsearch/${canceledDriverId}`)
               
                const checkDriver=await axios.post(`${apiHttp}/resetdriveracceptance/${clientPhone}`)
            
                

              } catch (error) {
                
              }
      }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        let intervalID; 
        useEffect(() => {

        

            if (startCheckDriverAcceptance==1) {

              // eslint-disable-next-line react-hooks/exhaustive-deps
              intervalID = setInterval(async() => {
                const checkDriver=await axios.get(`${apiHttp}/checkdriveracceptance/${clientPhone}`)
                console.log(checkDriver.data) 
                  setCheckDriverAcceptance(checkDriver.data)
                  localStorage.setItem('checkDriverAcceptance',JSON.stringify(checkDriver.data))
              }, 5000);
  
              return () => clearInterval(intervalID);
             
       
    
  
             } else {
              
             }
       

           // checkDriverAcceptance() 

          
         
        }, [startCheckDriverAcceptance]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         //&& acceptanceCounter!=null 
  useEffect(() => {

  

    if (startCheckDriverAcceptance==1 && acceptanceCounter==null ) {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        noResponse.current= setTimeout(async() => {

          const checkDriver=await axios.get(`${apiHttp}/checkdriveracceptance/${clientPhone}`)
                   const ifAccepted=checkDriver.data
          if (ifAccepted.driverAcceptance!=1) {
            console.log('noot accepted')
            setDelay(1)
            start()
          }
          
        }, 30000);

        return () => clearTimeout(noResponse.current);
       
 


       } else {
        
       }   
 


    
   
  }, [startCheckDriverAcceptance,acceptanceCounter]); 



  


    ////////////////////////////////////////////////////////////////////////////////////////
    
    /*useEffect(()=>{
      const together=async()=>{
        try {
           
            const checkTogether= await axios.get(`${apiHttp}/checktogetherfromclient/${clientPhone?clientPhone:'0'}/${checkDriverAcceptance.driverPhoneNumber1?checkDriverAcceptance.driverPhoneNumber1:'0'}`)
           
        } catch (error) {
          
        }

      }
      together()

    },[]) */
    
    
    
    
    
    /////////////////////////////////////////////////////////



            const resetAll=async()=>{
              
                setWaitingFinishing(1)
              const checkDriver=await axios.post(`${apiHttp}/resetride/${clientPhone}`)
                 if (checkDriver.data=='resetride') {
                  window.location.reload()

                  
                  setCheckDriverAcceptance([])
                  localStorage.removeItem('checkDriverAcceptance')
                  localStorage.removeItem('canceledDriverId')
                  localStorage.removeItem('unacceptance1')
                  localStorage.removeItem('unacceptance2')
                  localStorage.removeItem('unacceptance3')
                  localStorage.removeItem('unacceptance4')
                  localStorage.removeItem('unacceptance5')
                  localStorage.removeItem('unacceptance6')
                  localStorage.removeItem('unacceptance7')
                  localStorage.removeItem('unacceptance8')
                  localStorage.removeItem('unacceptance9')
                  localStorage.removeItem('unacceptance10')

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
                }

                const resetAll2=async()=>{
                  const checkDriver=await axios.post(`${apiHttp}/resetride/${clientPhone}`)
                     if (checkDriver.data=='resetride') {
                      setCheckDriverAcceptance([])
                      localStorage.removeItem('checkDriverAcceptance')
                      localStorage.removeItem('canceledDriverId')
                      localStorage.removeItem('unacceptance1')
                      localStorage.removeItem('unacceptance2')
                      localStorage.removeItem('unacceptance3')
                      localStorage.removeItem('unacceptance4')
                      localStorage.removeItem('unacceptance5')
                      localStorage.removeItem('unacceptance6')
                      localStorage.removeItem('unacceptance7')
                      localStorage.removeItem('unacceptance8')
                      localStorage.removeItem('unacceptance9')
                      localStorage.removeItem('unacceptance10')

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
                    }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        useEffect(() => {
          //driverAcceptance==2
        //  if (acceptanceCounter==1 || acceptanceCounter==2|| acceptanceCounter==3 || acceptanceCounter==4 || acceptanceCounter==5 || acceptanceCounter==6 || acceptanceCounter==7 || acceptanceCounter==8 || acceptanceCounter==9 || acceptanceCounter==10) {
              
            
         if(checkDriverAcceptance.driverAcceptance==2 || delay==1){
          console.log('delay1')
          try {
            const resetDriverAcceptance=async()=>{
              const checkDriver=await axios.post(`${apiHttp}/resetdriveracceptance/${clientPhone}`)
        
             setCheckDriverAcceptance([])
            }
            resetDriverAcceptance()
          } catch (error) {
            
          }
        
          localStorage.removeItem('checkDriverAcceptance')

            //console.log(acceptanceCounter)
            const sendPassengerLocation=async()=>{
              const passengerLocation=await axios.post(`${apiHttp}/sendpassengerlocation/${0}/${clientPhone}/${name}`,{
                latitude:loc?.latitude,
                longitude:loc?.longitude,
                from:JSON.parse(localStorage.getItem('from'))?JSON.parse(localStorage.getItem('from')):'0',
                goTo:JSON.parse(localStorage.getItem('goTo'))?JSON.parse(localStorage.getItem('goTo')):'0',
                price:JSON.parse(localStorage.getItem('price'))?JSON.parse(localStorage.getItem('price')):'0',
                driverId1:JSON.parse(localStorage.getItem('unacceptance1'))?JSON.parse(localStorage.getItem('unacceptance1')):0,
                driverId2:JSON.parse(localStorage.getItem('unacceptance2'))?JSON.parse(localStorage.getItem('unacceptance2')):0,
                driverId3:JSON.parse(localStorage.getItem('unacceptance3'))?JSON.parse(localStorage.getItem('unacceptance3')):0,
                driverId4:JSON.parse(localStorage.getItem('unacceptance4'))?JSON.parse(localStorage.getItem('unacceptance4')):0,
                driverId5:JSON.parse(localStorage.getItem('unacceptance5'))?JSON.parse(localStorage.getItem('unacceptance5')):0,
                driverId6:JSON.parse(localStorage.getItem('unacceptance6'))?JSON.parse(localStorage.getItem('unacceptance6')):0,
                driverId7:JSON.parse(localStorage.getItem('unacceptance7'))?JSON.parse(localStorage.getItem('unacceptance7')):0,
                driverId8:JSON.parse(localStorage.getItem('unacceptance8'))?JSON.parse(localStorage.getItem('unacceptance8')):0,
                driverId9:JSON.parse(localStorage.getItem('unacceptance9'))?JSON.parse(localStorage.getItem('unacceptance9')):0,
                driverId10:JSON.parse(localStorage.getItem('unacceptance10'))?JSON.parse(localStorage.getItem('unacceptance10')):0,
              })
             
              const searchRes =passengerLocation.data
            if (searchRes.good=='good') {
            setCanceledDriverId(searchRes.id)
            localStorage.setItem('canceledDriverId',JSON.stringify(searchRes.id))
            setClosest(passengerLocation.data)

           

            noResponse2.current= setTimeout(async() => {

              const checkDriver=await axios.get(`${apiHttp}/checkdriveracceptance/${clientPhone}`)
                       const ifAccepted=checkDriver.data
              if (ifAccepted.driverAcceptance!=1) {
                console.log('noot accepted2')
                setDelay(1)
                start()
              }
              
            }, 30000);
    
            return () => clearTimeout(noResponse2.current);

           
            
           

        
      
      
             
       

          }else{
            console.log('delay0')
            window.location.reload()
            setNoDriver(1)
            setSearchBtnOnOf(1)
            setLoading(null)
            setStartCheckDriverAcceptance(0)
            setCheckDriverAcceptance([])
            localStorage.removeItem('checkDriverAcceptance')
            localStorage.removeItem('canceledDriverId')
            localStorage.removeItem('unacceptance1')
            localStorage.removeItem('unacceptance2')
            localStorage.removeItem('unacceptance3')
            localStorage.removeItem('unacceptance4')
            localStorage.removeItem('unacceptance5')
            localStorage.removeItem('unacceptance6')
            localStorage.removeItem('unacceptance7')
            localStorage.removeItem('unacceptance8')
            localStorage.removeItem('unacceptance9')
            localStorage.removeItem('unacceptance10')



            const cancelSearch=await axios.post(`${apiHttp}/cancelsearch/${canceledDriverId}`)
           
            const checkDriver=await axios.post(`${apiHttp}/resetdriveracceptance/${clientPhone}`)
            
          }

             }
                  

             sendPassengerLocation()
             //setStartCheckDriverAcceptance(1)
             

           

          } else {
            
          }
         
        }, [acceptanceCounter,delay]);


  
        let audio = new Audio(beep1)

        const start = () => {
          audio.play()
        }
        
       

        const refreshPage = ()=>{
          window.location.reload();
       }

     /*  const sendMessages=async(e)=>{
        e.preventDefault() 
          try {
            const sendMessage=await axios.post(`${apiHttp}/sendmessagefromclient/${messageInput}/${clientPhone}`)
          } catch (error) {
            
          }
      } */


      const [message1,setMessage1]=useState(JSON.parse(localStorage.getItem('message1'))?JSON.parse(localStorage.getItem('message1')):'')
 const [message2,setMessage2]=useState(JSON.parse(localStorage.getItem('message2'))?JSON.parse(localStorage.getItem('message2')):'')
 const [message3,setMessage3]=useState(JSON.parse(localStorage.getItem('message3'))?JSON.parse(localStorage.getItem('message3')):'')
 const [message4,setMessage4]=useState(JSON.parse(localStorage.getItem('message4'))?JSON.parse(localStorage.getItem('message4')):'')
 const [message5,setMessage5]=useState(JSON.parse(localStorage.getItem('message5'))?JSON.parse(localStorage.getItem('message5')):'')
 const [message6,setMessage6]=useState(JSON.parse(localStorage.getItem('message6'))?JSON.parse(localStorage.getItem('message6')):'')
 const [message7,setMessage7]=useState(JSON.parse(localStorage.getItem('message7'))?JSON.parse(localStorage.getItem('message7')):'')
 const [message8,setMessage8]=useState(JSON.parse(localStorage.getItem('message8'))?JSON.parse(localStorage.getItem('message8')):'')
 const [message9,setMessage9]=useState(JSON.parse(localStorage.getItem('message9'))?JSON.parse(localStorage.getItem('message9')):'')
 const [message10,setMessage10]=useState(JSON.parse(localStorage.getItem('message10'))?JSON.parse(localStorage.getItem('message10')):'')



  const sendMessages=async(e)=>{
    e.preventDefault() 
    console.log(messageInput)
      try {
        if(messageInput!=''){
          setWaitingSendingMessage(1)
        const sendMessage=await axios.post(`${apiHttp}/sendmessagefromclient/${messageInput}/${clientPhone}`)
                          const message=sendMessage.data
                
                switch (null) {
                  case JSON.parse(localStorage.getItem('message1')):
                    localStorage.setItem('message1',JSON.stringify(message))
                    setMessage1(message)
        
                    
              
                    break;
                  case JSON.parse(localStorage.getItem('message2')):
                    localStorage.setItem('message2',JSON.stringify(message))
                    setMessage2(message)
        
                   
                    break;
                  case JSON.parse(localStorage.getItem('message3')):
                    localStorage.setItem('message3',JSON.stringify(message))
                    setMessage3(message)
        
                    
                    break;
                  case JSON.parse(localStorage.getItem('message4')):
                    localStorage.setItem('message4',JSON.stringify(message))
                    setMessage4(message)
        
        
                    break;
                  case JSON.parse(localStorage.getItem('message5')):
                    localStorage.setItem('message5',JSON.stringify(message))
                    setMessage5(message)
        
                   
                    break;
                    
                  case JSON.parse(localStorage.getItem('message6')):
                    localStorage.setItem('message6',JSON.stringify(message))
                    setMessage6(message)
        
                    
                    
                    break;
                  case JSON.parse(localStorage.getItem('message7')):
                    localStorage.setItem('message7',JSON.stringify(message))
                    setMessage7(message)
        
                    
                    break;
                  case JSON.parse(localStorage.getItem('message8')):
                    localStorage.setItem('message8',JSON.stringify(message))
                    setMessage8(message)
        
                   
                    break;
                  case JSON.parse(localStorage.getItem('message9')):
                    localStorage.setItem('message9',JSON.stringify(message))
                    setMessage9(message)
        
                   
                    break;
                  case JSON.parse(localStorage.getItem('message10')):
                    localStorage.setItem('message10',JSON.stringify(message))
                    setMessage10(message)
        
                    
                    break; 
                    // eslint-disable-next-line no-duplicate-case
                    case JSON.parse(localStorage.getItem('message11')):


                    
       
                      localStorage.removeItem('message1')
                      localStorage.setItem('message1',JSON.stringify(JSON.parse(localStorage.getItem('message2'))))
                      setMessage1(JSON.parse(localStorage.getItem('message2')))
        
                      localStorage.removeItem('message2')
                      localStorage.setItem('message2',JSON.stringify(JSON.parse(localStorage.getItem('message3'))))
                      setMessage2(JSON.parse(localStorage.getItem('message3')))
        
                      localStorage.removeItem('message3')
                      localStorage.setItem('message3',JSON.stringify(JSON.parse(localStorage.getItem('message4'))))
                      setMessage3(JSON.parse(localStorage.getItem('message4')))
        
                      localStorage.removeItem('message4')
                      localStorage.setItem('message4',JSON.stringify(JSON.parse(localStorage.getItem('message5'))))
                      setMessage4(JSON.parse(localStorage.getItem('message5')))

                     /* localStorage.removeItem('message5')
                      localStorage.setItem('message5',JSON.stringify(message))
                      setMessage5(message) */
                       
                     
                      localStorage.removeItem('message5')
                      localStorage.setItem('message5',JSON.stringify(JSON.parse(localStorage.getItem('message6'))))
                      setMessage5(JSON.parse(localStorage.getItem('message6')))
        
                      localStorage.removeItem('message6')
                      localStorage.setItem('message6',JSON.stringify(JSON.parse(localStorage.getItem('message7'))))
                      setMessage6(JSON.parse(localStorage.getItem('message7')))
        
                      localStorage.removeItem('message7')
                      localStorage.setItem('message7',JSON.stringify(JSON.parse(localStorage.getItem('message8'))))
                      setMessage7(JSON.parse(localStorage.getItem('message8')))
        
                      localStorage.removeItem('message8')
                      localStorage.setItem('message8',JSON.stringify(JSON.parse(localStorage.getItem('message9'))))
                      setMessage8(JSON.parse(localStorage.getItem('message9')))
        
                      localStorage.removeItem('message9')
                      localStorage.setItem('message9',JSON.stringify(JSON.parse(localStorage.getItem('message10'))))
                      setMessage9(JSON.parse(localStorage.getItem('message10')))
        
                      localStorage.removeItem('message10')
                      localStorage.setItem('message10',JSON.stringify(message))
                      setMessage10(message) 
        
        
                      
          
                      
                      break;  
                  default:
                    console.log("I don't own a pet");
                    break;
                }
                setWaitingSendingMessage(0)

              
              }
      } catch (error) {
        
      }
  }

  let together;

  const [clientMessageView,setClientMessageView]=useState('')



  useEffect(()=>{
     // eslint-disable-next-line react-hooks/exhaustive-deps 
     //playServicesLocationVersion='20.0.0'
     if(checkDriverAcceptance.driverAcceptance=='1'){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      together=setInterval(async()=>{
        try {
          const checkMessages=await axios.get(`${apiHttp}/checkmessagesfromdriver/${clientPhone}`)
          const message=checkMessages.data
          setClientMessageView(message?.textMessage)
          

         if(message?.noMessage!='noMessage'){
          setMessageOnOfBtn(1)
          switch (null) {
            case JSON.parse(localStorage.getItem('message1')):
              localStorage.setItem('message1',JSON.stringify(message))
              setMessage1(message)
              await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
  
              
        
              break;
            case JSON.parse(localStorage.getItem('message2')):
              localStorage.setItem('message2',JSON.stringify(message))
              setMessage2(message)
              await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message3')):
              localStorage.setItem('message3',JSON.stringify(message))
              setMessage3(message)
              await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
  
              
              break;
            case JSON.parse(localStorage.getItem('message4')):
              localStorage.setItem('message4',JSON.stringify(message))
              setMessage4(message)
              await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
  
  
              break;
            case JSON.parse(localStorage.getItem('message5')):
              localStorage.setItem('message5',JSON.stringify(message))
              setMessage5(message)
              await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
  
             
              break;
              
            case JSON.parse(localStorage.getItem('message6')):
              localStorage.setItem('message6',JSON.stringify(message))
              setMessage6(message)
              await axios.get(`${apiHttp}/clearclientmessages/${clientPhone}`)
  
              
              
              break;
            case JSON.parse(localStorage.getItem('message7')):
              localStorage.setItem('message7',JSON.stringify(message))
              setMessage7(message)
              await axios.get(`${apiHttp}/clearclientmessages/${clientPhone}`)
  
              
              break;
            case JSON.parse(localStorage.getItem('message8')):
              localStorage.setItem('message8',JSON.stringify(message))
              setMessage8(message)
              await axios.get(`${apiHttp}/clearclientmessages/${clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message9')):
              localStorage.setItem('message9',JSON.stringify(message))
              setMessage9(message)
              await axios.get(`${apiHttp}/clearclientmessages/${clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message10')):
              localStorage.setItem('message10',JSON.stringify(message))
              setMessage10(message)
              await axios.get(`${apiHttp}/clearclientmessages/${clientPhone}`)
  
              
              break; 
              // eslint-disable-next-line no-duplicate-case
              case JSON.parse(localStorage.getItem('message11')):
                //localStorage.setItem('message10',JSON.stringify(message?.clientMessage))
  
                localStorage.removeItem('message1')
                localStorage.setItem('message1',JSON.stringify(JSON.parse(localStorage.getItem('message2'))))
                setMessage1(JSON.parse(localStorage.getItem('message2')))
  
                localStorage.removeItem('message2')
                localStorage.setItem('message2',JSON.stringify(JSON.parse(localStorage.getItem('message3'))))
                setMessage2(JSON.parse(localStorage.getItem('message3')))
  
                localStorage.removeItem('message3')
                localStorage.setItem('message3',JSON.stringify(JSON.parse(localStorage.getItem('message4'))))
                setMessage3(JSON.parse(localStorage.getItem('message4')))
  
                localStorage.removeItem('message4')
                localStorage.setItem('message4',JSON.stringify(JSON.parse(localStorage.getItem('message5'))))
                setMessage4(JSON.parse(localStorage.getItem('message5')))
  
               /* localStorage.removeItem('message5')
                localStorage.setItem('message5',JSON.stringify(message))
                setMessage5(message) */
  
               localStorage.removeItem('message5')
                localStorage.setItem('message5',JSON.stringify(JSON.parse(localStorage.getItem('message6'))))
                setMessage5(JSON.parse(localStorage.getItem('message6')))
  
                localStorage.removeItem('message6')
                localStorage.setItem('message6',JSON.stringify(JSON.parse(localStorage.getItem('message7'))))
                setMessage6(JSON.parse(localStorage.getItem('message7')))
  
                localStorage.removeItem('message7')
                localStorage.setItem('message7',JSON.stringify(JSON.parse(localStorage.getItem('message8'))))
                setMessage7(JSON.parse(localStorage.getItem('message8')))
  
                localStorage.removeItem('message8')
                localStorage.setItem('message8',JSON.stringify(JSON.parse(localStorage.getItem('message9'))))
                setMessage8(JSON.parse(localStorage.getItem('message9')))
  
                localStorage.removeItem('message9')
                localStorage.setItem('message9',JSON.stringify(JSON.parse(localStorage.getItem('message10'))))
                setMessage9(JSON.parse(localStorage.getItem('message10')))
  
                localStorage.removeItem('message10')
                localStorage.setItem('message10',JSON.stringify(message))
                setMessage10(message)  
  
  
                
                await axios.get(`${apiHttp}/cleardrivermessages/${clientPhone}`)
    
                
                break;  
            default:
              console.log("I don't own a pet");
              break;
          }
        
         }
  
         const checkTogether= await axios.get(`${apiHttp}/checktogetherfromclient/${clientPhone?clientPhone:'0'}/${checkDriverAcceptance.driverPhoneNumber1?checkDriverAcceptance.driverPhoneNumber1:'0'}`)
             if(checkTogether.data=='no'){
             setNotToGether(1)
              
              
              
             }
            
        } catch (error) {
          
        }
       },10000)
  
       return ()=>clearInterval(together)

    }
     
  },[checkDriverAcceptance,withDriver,message10,message1,message2,message3,message4,message5,message6,message7,message8,message9])

 /* useEffect(() => {
    const notify = () => toast("Wow so easy!");
    notify()
   
    //resetAll()
  }, [notToGether]); */
  
 
  /* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */
      
var chy2=`https://maps.google.com/maps?q=${loc2?.latitude},${loc2?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

//var chy2=`https://maps.google.com/maps?q=${locGeoLat},${locGeoLon}&t=&z=15&ie=UTF8&iwloc=&output=embed`; <div>{locGeoLat}</div>

//==true && loc2!=undefined  
return(
  <>
  <NavBar />
  <div className='homeBodyCon'>

  
  

  <div style={{display:notToGether==1?'':'none'}} className="notification">
   <div style={{display:waitingFinishing=='0'?'':'none'}}>Driver left</div> <button className="notificationBtn" onClick={resetAll} style={{display:waitingFinishing=='0'?'':'none'}} >OK</button>
   <div onClick={()=>(setWaitingFinishing(0))} style={{display:waitingFinishing=='1'?'':'none',color:'lightgray'}}>Wait...</div>


    
 </div>
 {/*navigator.onLine?<iframe className='iframeMap' width="100%" height="100%" id="gmap_canvas" src={chy2} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{marginBottom:searchBtnOnOf==1?'20%':'2%'}} ></iframe>:<div className='iframeMapNoInternet'  style={{width:'100%',height:'90%',marginBottom:'5%'}}>No Connection</div>*/} 

  {navigator.onLine?<iframe className='iframeMap' width="100%" height="100%" id="gmap_canvas" src={chy2} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"  ></iframe>:<div className='iframeMapNoInternet'  style={{width:'100%',height:'90%',marginBottom:'5%'}}>No Connection</div>} 

        {clientNumberFormOnOf==0? <form className='clientNumberForm' onSubmit={setingClientInfo} style={{display:driverInfo!=''?'none':''}}>
         <div className='clientNumberFormInputError' style={{display:noNetwork==1?'':'none'}} ><h6>No Network</h6></div>

          <input className='clientNumberFormInput' type="text" required placeholder='Name' onChange={(e)=>setName(e.target.value)} title='over load' maxlength = "20" />
          <input className='clientNumberFormInput' type="tel" required placeholder='Mobile Number ' onChange={(e)=>setPhone(e.target.value)} title="Please use a 10 digit telephone number with no dashes or dots" pattern="[0-9]{10}"  />
          <button className='clientNumberFormBtn' style={{display:fetchingClientInfo=='0'?'':'none'}} type='submit'>Next</button>
          <div    className='clientNumberFormBtn' onClick={()=>(setFetchingClientInfo(0))} style={{display:fetchingClientInfo=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>Wait...</div>


         
         </form>:'' }

         
                                                                                                   
         
         {searchBtnOnOf==1? <div className='searchCarBtnBodyCfooter'> 
        
         <form className='clientNumberFormTo' onSubmit={sendPassengerLocation}  style={{display:driverInfo!=''?'none':''}}>
          
          <div className='driverNotFoundTo' style={{display:noNetwork==1?'':'none'}} ><h6>No Network</h6></div>
                   <div className='driverNotFoundTo' style={{display:noDriver==1?'':'none'}}><h6>No Driver</h6></div>


 
           <input className='clientNumberFormInput' type="text" required placeholder='From'  onChange={(e)=>(
            setFrom(e.target.value),
            localStorage.setItem('form',JSON.stringify(e.target.value))

            )} title='over load' maxlength = "100"/>
           <input className='clientNumberFormInput' type="text" required placeholder='To' onChange={(e)=>(
            setGoTo(e.target.value),
            localStorage.setItem('goTo',JSON.stringify(e.target.value))

            )} title='over load' maxlength = "100"/>
           <input className='clientNumberFormInput' type="number" required placeholder='Birr' onChange={(e)=>(
            setPrice(e.target.value),
            localStorage.setItem('price',JSON.stringify(e.target.value))

            )} title="Please use a 5 digit number" maxlength = "5"   />
 
               <button className='clientNumberFormBtn' style={{display:fetchingSearchDriver=='0'?'flex':'none'}} type='submit'>Search</button>
               <div className='clientNumberFormBtn' onClick={()=>setFetchingSearchDriver(0)} style={{display:fetchingSearchDriver=='1'?'flex':'none',backgroundColor:'lightgray',color:'gray'}}>Wait...</div>


          </form>
          
      
         </div>:''}
        

        {loading==1?<div className='CircularProgressConN' > 
        <div className="loaderCancel" onClick={searchCancel} style={{display:waitingCancelSearch=='0'?'':'none'}}>x</div>
        <div className='' onClick={()=>(setWaitingCancelSearch(0))} style={{display:waitingCancelSearch=='1'?'':'none',color:'gray'}}>Canceling...</div>

        <div className="loader" style={{display:waitingCancelSearch=='0'?'':'none'}}>Loading...</div> </div>:''}

     

        {withDriver==1? <div className='loadingConDriver' >
        

        <div className='' style={{display:driverInfoView==1?'':'none'}}><IoMdRefresh className='iconConRefreshDriverInfo' onClick={refreshPage} /> </div>
       
            <div className='iconConDropDownDriverInfo' style={{display:driverInfoView==false || driverInfoView==3?'none':''}} onClick={()=>(
            setDriverInfoView(false),
            setDriverFound(!driverFound),
            setMessageOnOfBtn(0)
            )}></div>

            <div className='iconConDropUpDriverInfo' style={{display:driverInfoView==1 || driverInfoView==3 ?'none':''}} onClick={()=>(
                setDriverInfoView(1),
                setDriverFound(!driverFound),
                setShourBtn(0)
                )}></div>
         



         {shourBtn==1?<div className='shourBtnCon' > 
         {shourBtn==1?<div className='shourBtnConTitle'>are you sure </div>:''}

         <button className='shourBtnConYes' onClick={resetAll} style={{display:waitingFinishing=='0'?'':'none'}} >YES</button> 
         <button className='shourBtnConNo' onClick={()=>(
           setDriverInfoView(1),
           setDriverFound(!driverFound),
           setShourBtn(0)
         )} style={{display:waitingFinishing=='0'?'':'none'}} >NO</button>
          <button className='shourBtnConNo' onClick={()=>(setWaitingFinishing(0))} style={{display:waitingFinishing=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>Wait...</button>

         </div>:''}
        {driverInfoView==false?<button className='CircularProgressConCancel2' style={{display:driverInfoView==3?'none':''}} onClick={()=>(
          setShourBtn(1),
          setDriverInfoView(3)

     )}><div>Finish</div></button>:''}
        

{driverInfoView==1?<div className='driverInfoCon'>

 

  
  <div className='driverImgCon'>
  <div className='driverImg'>Img</div>
  <div className='priceInfoCon'> <div className='priceInfoConPrice'>{JSON.parse(localStorage.getItem('price'))?JSON.parse(localStorage.getItem('price')):'0'}</div> <div className='priceInfoConCurrency'>Birr</div> </div>
  </div>
  
  <div>
  <div className='driverInfoConInfo'><div className='driverInfoConInfoTitle'>Driver Name</div> <div className='driverInfoConInfoSpan'>{checkDriverAcceptance?.driverName} {checkDriverAcceptance?.driverFatherName}</div> </div>
  <div className='driverInfoConInfo'><div className='driverInfoConInfoTitle'>Car Type</div>  <div className='driverInfoConInfoSpan'>{checkDriverAcceptance?.driverCarType}</div></div>
  <div className='driverInfoConInfo'><div className='driverInfoConInfoTitle'>Car Plate</div> <div className='driverInfoConInfoSpan'> {checkDriverAcceptance?.driverCarPlate}</div></div>

  <div className='driverInfoConInfo driverInfoConInfoContact'><a style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={"tel://"+checkDriverAcceptance?.driverPhoneNumber1}><IoCall className='driverInfoConInfoContactIcons'/></a><div className='callNumber'>1</div> <a style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={"tel://"+checkDriverAcceptance?.driverPhoneNumber2}><IoCall className='driverInfoConInfoContactIcons'/></a> <div className='callNumber'>2</div><RiMessage2Fill className='driverInfoConInfoContactIcons' onClick={()=>(setMessageOnOfBtn(1))} /></div>
  </div>
</div>:''}
             


           
  {messageOnoOfBtn==1?<div className='messageConClient'>
              <form action="" className='messageFormClient' onSubmit={sendMessages}>

              <div className='messageViewConClient' style={{display:JSON.parse(localStorage.getItem('message1'))!=null?'':'none'}}>
              
              <div className='messageView' style={{backgroundColor:message10.messageId==2?'#d8d8e1':'#c4e1c5',color:message10.messageId==2?'black':'black',display:message10!=''?'':'none'}}>{message10?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message9.messageId==2?'#d8d8e1':'#c4e1c5',color:message9.messageId==2?'black':'black',display:message9!=''?'':'none'}}>{message9?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message8.messageId==2?'#d8d8e1':'#c4e1c5',color:message8.messageId==2?'black':'black',display:message8!=''?'':'none'}}>{message8?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message7.messageId==2?'#d8d8e1':'#c4e1c5',color:message7.messageId==2?'black':'black',display:message7!=''?'':'none'}}>{message7?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message6.messageId==2?'#d8d8e1':'#c4e1c5',color:message6.messageId==2?'black':'black',display:message6!=''?'':'none'}}>{message6?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message5.messageId==2?'#d8d8e1':'#c4e1c5',color:message5.messageId==2?'black':'black',display:message5!=''?'':'none'}}>{message5?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message4.messageId==2?'#d8d8e1':'#c4e1c5',color:message4.messageId==2?'black':'black',display:message4!=''?'':'none'}}>{message4?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message3.messageId==2?'#d8d8e1':'#c4e1c5',color:message3.messageId==2?'black':'black',display:message3!=''?'':'none'}}>{message3?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message2.messageId==2?'#d8d8e1':'#c4e1c5',color:message2.messageId==2?'black':'black',display:message2!=''?'':'none'}}>{message2?.textMessage}</div>
              <div className='messageView' style={{backgroundColor:message1.messageId==2?'#d8d8e1':'#c4e1c5',color:message1.messageId==2?'black':'black',display:message1!=''?'':'none'}}>{message1?.textMessage}</div>
             

{/*{JSON.parse(localStorage.getItem('message10'))?JSON.parse(localStorage.getItem('message10')):''} */}


              </div>

             
          


            


                      

                 <div className='messageInputClientCooIcon'>
                  <IoMdRefresh className='messageInputClientCooIconItem' onClick={()=>(refreshPage())} style={{display:driverInfoView==1?'':'none'}}/>
                <TiArrowBack className='messageInputClientCooIconItem' onClick={()=>(
                setDriverFound(!driverFound),
                setMessageOnOfBtn(0)
                )} />
                </div>

                <div className='messageInputClientCon'>
                <input className='messageInputClient' type="text" placeholder='message'  onChange={(e)=>setMessageInput(e.target.value)} />
                <button type='submit' className='messageBtnClient' style={{display:waitingSendingMessage=='0'?'':'none'}}><RiSendPlaneFill /></button>
                <button  className='messageBtnClient messageBtnClientWait' onClick={()=>(setWaitingSendingMessage(0))} style={{display:waitingSendingMessage=='1'?'':'none'}}></button>


                </div>



              </form>
             </div>:''}


</div>:''}





     
</div>
{/*
<div className='footerCon' style={{display:checkDriverAcceptance?.driverName || loading==1 ?'none':''}}>
    <div className='iconCon'> <Link style={{margin:'-5px'}} to={driverInfo?.name?`/driverhome/${driverInfo?.name}/${driverInfo?.id}`:'/'} onClick={refreshPage} ><HomeRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'#0077ff',
          "&:hover":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'salmon'

          },
          "&:active":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'lightgray'

          },
         }}/> </Link> <div className='iconName'>Home</div></div>
  {searchBtnOnOf==1?'':<div className='iconCon' > <Link style={{margin:'-5px'}} to={'/driverlogin'}><LocalTaxiRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'#0077ff',
          "&:hover":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'salmon'

          }
          ,
          "&:active":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'lightgray'
            

          },}}/> </Link><div className='iconName'>Driver</div></div>}  
           <div className='iconCon'> <Link style={{margin:'-5px'}} to={'/driverlogin'}><PersonRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'#0077ff',
          "&:hover":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'salmon'

          }
          ,
          "&:active":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'lightgray'
            

          },}}/> </Link><div className='iconName'>Data</div></div>
   
    <div className='iconCon'> <Link style={{margin:'-5px'}} to={''}> <RefreshIcon onClick={refreshPage}  sx={{
          width:'20px',
          height:'20px',
          color:'#0077ff',
          "&:hover":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'salmon'
           }
          ,
          "&:active":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'lightgray'

          },}}/> </Link> <div className='iconName'>Refresh</div></div>






        </div>  */}

    

    </>

)


}

export default HomeBody


