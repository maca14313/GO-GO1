import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate, useParams} from 'react-router-dom';
import './driverHomeBody.css'
import axios from 'axios'
//import {io} from 'socket.io-client'
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import RefreshIcon from '@mui/icons-material/Refresh';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessageIcon from '@mui/icons-material/Message';
//import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace';


//import { Dialog } from '@capacitor/dialog';
import mp1 from './mixkit-arcade-bonus-alert-767.wav';
import { Geolocation } from '@capacitor/geolocation'
import { Box, Button, Paper, Snackbar } from '@mui/material';
import { apiHttp } from '../../Port';
import { IoCall } from 'react-icons/io5';
import { RiMessage2Fill, RiSendPlaneFill } from 'react-icons/ri';
import { IoMdRefresh } from 'react-icons/io';
import { TiArrowBack } from 'react-icons/ti';





//const {language,apiHttp}=useSelector((store)=>store.languSlice)




function DriverSearchBody() {
  

  //const {name,id}=useParams()
  const navigate=useNavigate()
const {name,id,fatherName,grandFatherName,phoneNumber,phoneNumber2,carType,carPlate}=JSON.parse(localStorage.getItem('logedDriverData'))  

const [sendLocToDb, setSendLocToDb] = useState(null);



const [loc, setLoc] = useState();
const [locCurrent, setLocCurrent] = useState();











const [messageOnoOfBtn,setMessageOnOfBtn] = useState(0);
const [messageInput,setMessageInput]=useState(0)

const [acceptanceMessage,setAcceptanceMessage] = useState(null);
const [acceptanceMessageView,setAcceptanceMessageView] = useState(null);
const [waitingAcceptance,setWaitingAcceptance]=useState(0)
const [waitingFinishing,setWaitingFinishing]=useState(0)
const [waitingSendingMessage,setWaitingSendingMessage]=useState(0)






const [sendDriverLocationOnOf,setSendDriverLocationOnOf]=useState(1)


const [available,setAvailable]=useState(true)
const [driverLocationavailable,setDriverLocationAvailable]=useState([])

//socket io



 // const socket = useRef();
  const [message, setMessage] = useState(null);
  const [senderPhone,setSenderPhone]=useState(JSON.parse(localStorage.getItem('senderPhone')))
  const [arrivalMessage, setArrivalMessage] = useState('');

  const [formOnOf, setFormOnOf] = useState(0);
  const [messageOnOf, setMessageOnOf] = useState(false);

  




 // const [user,setUser]=useState(JSON.parse(localStorage.getItem('id')))
  //const [loading,setLoading] = useState(true);
  



        ////////////////////////////////////////////////////////////////////JSON.parse(localStorage.getItem('checkRequist'))?JSON.parse(localStorage.getItem('checkRequist'))://///////////////////////////////////////////////////////////////////////////
  

  const [checkRequist, setCheckRequist] = useState(JSON.parse(localStorage.getItem('checkRequist'))?JSON.parse(localStorage.getItem('checkRequist')):[]);
  console.log(checkRequist)
  const [onlineHeadingOnOf, setOnlineHeadingOnOf] = useState(checkRequist.checkClient==1?0:1);
  const [checkRequistStop,setCheckRequistStop] = useState([]);
  const [withClient,setWithClient] = useState(JSON.parse(localStorage.getItem('withClient')));

  const [resetDriverLoc,setResetDriverLoc] = useState([]);
  const [shourBtn,setShourBtn] = useState(0);

  const [notToGether,setNotToGether] = useState(0);





 





  
 // var idd2=JSON.parse(id)

  
 


//socket.current = io(`${apiHttp}`);
  


  

  
 
 

  


 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//https://good-puce-kangaroo-wig.cyclic.app/
//setSocket(io('https://scary-blue-moccasins.cyclic.app'))

useEffect(() => {
  if (acceptanceMessage!=null) {
   setAcceptanceMessageView(1)
   setOnlineHeadingOnOf(null)
   setSendDriverLocationOnOf(null)
   //unsendDriverLocation()
  }
  if (acceptanceMessageView==1) {
    
    setSendLocToDb(1)
    setOnlineHeadingOnOf(null)
    setSendDriverLocationOnOf(null)

    //unsendDriverLocation()
    
   }

  

   

   /////////////////////////////////////////// checkRequist.checkClient
   if(checkRequist.checkClient==1){
    playmp()
    setOnlineHeadingOnOf(null)
    setSendDriverLocationOnOf(null)
    setCheckRequistStop(1)

    


   }

   if (withClient==1) {
    setOnlineHeadingOnOf(null)
    setFormOnOf(true)
    setMessageOnOf(true)
   }
  
}, [acceptanceMessageView,acceptanceMessage,arrivalMessage,checkRequist,withClient]);


 
  
  
      

 

//////////////////////////////////////////////////////////
                           /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                          
 useEffect(() => {
                  
 
        if (sendDriverLocationOnOf==1) {

      
        const printCurrentPosition = async () => {

          const showLoc=(coordinates)=>{
              setLoc(coordinates?.coords)
           
          }
        
          const error=(err)=>{
            console.log(err);
           console.warn(
              `ERROR(${err.code}): ${err.message}`
            ); 
          }
        
          const options={
        
            enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 5000,
          }
          const coordinates = await Geolocation.watchPosition(options,showLoc,error);
          const co=coordinates.coords
          console.log('Current position:', co);
          
     
          setLoc(coordinates.coords)
        };
        printCurrentPosition()

 
       


        


      }else{
        const sendDriverLocation=async()=>{

          try {
              const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
                  latitude:0,
                  longitude:0,
                })
        
        
          } catch (error) {
              console.log(error)
    
          }
    
     
    
      }
    
      sendDriverLocation()
        
      }

  




},[sendDriverLocationOnOf]); 




 useEffect(() => {
  if (sendDriverLocationOnOf==1) {
    const sendDriverLocation=async()=>{

      try {
          const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
              latitude:loc?.latitude,
              longitude:loc?.longitude,
            })
    
            setDriverLocationAvailable(driverLocation.data)

         
    
      } catch (error) {
          console.log(error)

      }
  
  
  
  }
  
  sendDriverLocation()
  }
  else{
    const sendDriverLocation=async()=>{

      try {
          const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
              latitude:0,
              longitude:0,
            })
    
    
      } catch (error) {
          console.log(error)

      }

 

  }

  sendDriverLocation()
  
    
  }
  
  
 }, [loc,sendDriverLocationOnOf]);

 let intervalLoc;
 
 useEffect(() => {
  if (sendDriverLocationOnOf==1) {
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
   
    try {
      intervalLoc = setInterval(async() => {
        const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
          latitude:loc?.latitude,
          longitude:loc?.longitude,
        })
        console.log('we are online',loc)
      }, 6000);
  
    } catch (error) {
      console.log(error)
    }

    return () => clearInterval(intervalLoc);

  }
  else{
    const sendDriverLocation=async()=>{

      try {
          const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
              latitude:0,
              longitude:0,
            })
    
    
      } catch (error) {
          console.log(error)

      }

 

  }

  sendDriverLocation()
    
  }
  
  
 },[loc,sendDriverLocationOnOf]); 


  /* const [location, setLocation] = useState(null);
 
   useEffect(() => {
     if ('geolocation' in navigator) {
       // Success callback function
       const successCallback = (position) => {
        console.log(position.coords.latitude,)
         setLocation({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           accuracy: position.coords.accuracy,
         });
       };
 
       // Error callback function
       const errorCallback = (error) => {
         console.error('Error getting location:', error.message);
       };
 
       // Options for geolocation
       const options = {
         enableHighAccuracy: true,
         timeout: 50000,
         maximumAge: 0,
       };
 
       // Start watching the position
       const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

 
       // To stop watching the position when the component unmounts
      return () => navigator.geolocation.clearWatch(watchId);
     } else {
       console.error('Geolocation is not supported by this browser.');
     }

   }, []); */
/*
 useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    console.log('loc tracking',location?.longitude)
    console.log('loc tracking',loc?.longitude)



  const trackingLoc =async() => {

      const driverLocation=await axios.post(`${apiHttp}/senddriverTrackinglocation/${id}`,{
        latitude:location?.latitude?location?.latitude:0,
        longitude:location?.longitude?location?.longitude:0,
      })
      console.log('loc tracking',location?.longitude)
    };

 trackingLoc()
  
 },[location]); */

 


let intervalID;
let withClientConnection;
 useEffect(() => {
  
   
           if (checkRequist?.checkClient!=1) {

            // eslint-disable-next-line react-hooks/exhaustive-deps
            intervalID = setInterval(async() => {
              const checkClientData=await axios.get(`${apiHttp}/checkClient/${id}`)
                 console.log(checkClientData.data)
                 console.log('Hello world2');
                 setCheckRequist(checkClientData.data)
                 localStorage.setItem('checkRequist',JSON.stringify(checkClientData.data))
            }, 5000);

            return () => clearInterval(intervalID);
           
     
  

           } else if (checkRequist?.checkClient==1) {
            //alert('Hello world2');
            withClientConnection=setInterval(async()=>{
                 
            },20000)
           } else{

           }
     
      
     
     
    

  
 }, [sendDriverLocationOnOf,checkRequistStop,checkRequist]);

   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let countDown;
const [timeleft, setTimeleft] = useState(15);


    useEffect(() => {

      
      
         if (checkRequist?.checkClient==1) {
          
          const countDown=setInterval(async()=>{
            console.log('console.log(withClient)',withClient)
            if (withClient==1) {
              clearInterval(countDown);
              return () => clearInterval(countDown);

              
            }
             if (timeleft<=0 && withClient==null ) {
             clearInterval(countDown);
             try {
              const checkClientData=await axios.get(`${apiHttp}/rejectedfromdriver/${id}`)
              const clearClientInfo=await axios.post(`${apiHttp}/rejectedclientinfo/${id}`)
      
              if (checkClientData.data=='rejected' || clearClientInfo.data=='rejected') {
                 navigate(`/driverhome/${name}/${id}`)
                 localStorage.removeItem('checkRequist')
                 localStorage.removeItem('withClient')
                 window.location.reload()
                 
              }
            } catch (error) {
              alert('no connection')

            }
             }else{
              setTimeleft(timeleft-1)
              console.log(timeleft-1)
             }
          
            
      
          },1000)
          return () => clearInterval(countDown);

      
         } else {
          
         }

     
     
    },[timeleft,checkRequist?.checkClient]); 
    


 

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
              maximumAge: 10000
    }
    const coordinates = await Geolocation.getCurrentPosition(showLoc,error,options);
    setLocCurrent(coordinates.coords)

  
    console.log('Current position:', coordinates.coords);
   
  };
  printCurrentPosition()
 }, []); 


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const acceptRequist=async(e)=>{
  e.preventDefault();
                   setWaitingAcceptance(1)
                   const checkClientData=await axios.get(`${apiHttp}/senddatatoclientfromdriver/${id}`)
                   if (checkClientData.data=='accept') {
                    setWaitingAcceptance(0)
                    localStorage.setItem('withClient',JSON.stringify(1))
                    setWithClient(1)
                   }else{

                  

                    alert('client have cancel')
                    navigate(`/driverhome/${name}/${id}`)
                    localStorage.removeItem('checkRequist')
                    localStorage.removeItem('withClient')
                    //window.location.reload()
                   }
                    }


     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     const rejectedRequist=async(e)=>{
      e.preventDefault();

      setWaitingAcceptance(1)

      try {
        const checkClientData=await axios.get(`${apiHttp}/rejectedfromdriver/${id}`)
        const clearClientInfo=await axios.post(`${apiHttp}/rejectedclientinfo/${id}`)

        if (checkClientData.data=='rejected' || clearClientInfo.data=='rejected') {
          setWaitingAcceptance(0)
           navigate(`/driverhome/${name}/${id}`)
           localStorage.removeItem('checkRequist')
           localStorage.removeItem('withClient')
           //window.location.reload()
           
        }
      } catch (error) {
        alert('no connection')

      }
     }


     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const unsendDriverLocation=async()=>{

                        try {
                         
                            const driverLocation=await axios.post(`${apiHttp}/senddriverlocation/${id}`,{
                              latitude:0,
                              longitude:0,
                            })

                            setResetDriverLoc(driverLocation.data)
                    
                            
                    
                    
                        } catch (error) {
                          //console.log(error)
                          alert('no connection')
                          navigate(`/driverhome/${name}/${id}`)
                          window.location.reload()

                        }
                    
              }

              useEffect(() => {
                  //console.log(resetDriverLoc.latitude)
                  if (resetDriverLoc.latitude==0) {
                    navigate(`/driverhome/${name}/${id}`)
                    window.location.reload()
                  }
              }, [resetDriverLoc]);



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
   /* useEffect(()=>{
      const together=async()=>{
        try {
           
            const checkTogether= await axios.get(`${apiHttp}/checktogether/${phoneNumber?phoneNumber:'0'}/${checkRequist.clientPhone?checkRequist.clientPhone:'0'}`)
           
        } catch (error) {
          
        }

      }
      together()

    },[])
    */
    
    
    ///////////////////////////////////////////////////////////////////

   const finished=async()=>{
     try {
      setWaitingFinishing(1)
        const clearClientInfo=await axios.post(`${apiHttp}/clearclientinfo/${id}`)

        if (clearClientInfo.data=='cleared') {
          navigate(`/driverhome/${name}/${id}`)
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
         // window.location.reload()
          

        }
       } catch (error) {
        //console.log(error)
        alert('no connection')

       }

      
   }

  let noResponse2;

   

/*
 useEffect(() => {
  noResponse2 = setTimeout(async() => {

    console.log('noot accepted2')
  
}, 3000);
return () =>  clearTimeout(noResponse2);
 }, []); */


   let audio = new Audio(mp1)

   const playmp = () => {
     audio.play()
   }

   const refreshPage = ()=>{
    window.location.reload();
 }


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
        const sendMessage=await axios.post(`${apiHttp}/sendmessagefromdriver/${messageInput}/${checkRequist?.clientPhone}`)
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
     if(withClient==1){
      // eslint-disable-next-line react-hooks/exhaustive-deps
      together=setInterval(async()=>{
        try {
          const checkMessages=await axios.get(`${apiHttp}/checkmessagesfromclient/${checkRequist?.clientPhone}`)
          const message=checkMessages.data
          setClientMessageView(message?.textMessage)

        
         if(message?.noMessage!='noMessage'){
          setMessageOnOfBtn(1)

          switch (null) {
            case JSON.parse(localStorage.getItem('message1')):
              localStorage.setItem('message1',JSON.stringify(message))
              setMessage1(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
              
        
              break;
            case JSON.parse(localStorage.getItem('message2')):
              localStorage.setItem('message2',JSON.stringify(message))
              setMessage2(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message3')):
              localStorage.setItem('message3',JSON.stringify(message))
              setMessage3(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
              
              break;
            case JSON.parse(localStorage.getItem('message4')):
              localStorage.setItem('message4',JSON.stringify(message))
              setMessage4(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
  
              break;
            case JSON.parse(localStorage.getItem('message5')):
              localStorage.setItem('message5',JSON.stringify(message))
              setMessage5(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
             
              break;
              
            case JSON.parse(localStorage.getItem('message6')):
              localStorage.setItem('message6',JSON.stringify(message))
              setMessage6(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
              
              
              break;
            case JSON.parse(localStorage.getItem('message7')):
              localStorage.setItem('message7',JSON.stringify(message))
              setMessage7(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
              
              break;
            case JSON.parse(localStorage.getItem('message8')):
              localStorage.setItem('message8',JSON.stringify(message))
              setMessage8(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message9')):
              localStorage.setItem('message9',JSON.stringify(message))
              setMessage9(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
             
              break;
            case JSON.parse(localStorage.getItem('message10')):
              localStorage.setItem('message10',JSON.stringify(message))
              setMessage10(message)
              await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
  
              
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
  
              /*  localStorage.removeItem('message5')
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
  
  
                
                await axios.get(`${apiHttp}/clearclientmessages/${checkRequist?.clientPhone}`)
    
                
                break;  
            default:
              console.log("I don't own a pet");
              break;
          }
        
         }
  
         const checkTogether= await axios.get(`${apiHttp}/checktogether/${phoneNumber?phoneNumber:'0'}/${checkRequist.clientPhone?checkRequist.clientPhone:'0'}`)
         if(checkTogether.data=='no'){
         setNotToGether(1)
         }
            
        } catch (error) {
          
        }
       },10000)
  
       return ()=>clearInterval(together)


     }
     
  },[withClient,message10,message1,message2,message3,message4,message5,message6,message7,message8,message9])






 





 

var locLat=checkRequist.clientLat?checkRequist.clientLat:locCurrent?.latitude;
var locLon=checkRequist.clientLon?checkRequist.clientLon:locCurrent?.longitude;



//var chy2=`https://maps.google.com/maps?q=${locCurrent?.latitude},${locCurrent?.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
var mapLoc=`https://maps.google.com/maps?q=${locLat},${locLon}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
//console.log(locLat)

//,backgroundColor:checkRequist.checkClient==1?"green":''  checkRequist.checkClient   checkRequist.map(d=>d.checkClient) 
//        <button className='searchCarOnlineCancel' onClick={unsendDriverLocation} style={{display:acceptanceMessage?'none':''}} >{checkRequist?.clientName} <h5>cancel</h5> {driverLocationavailable?.id}</button>
console.log(message2)

return (
    <div className='homeBodyCon homeBodyConSearch'>
       <div style={{display:notToGether==1?'':'none'}} className="notification">
   <div style={{display:waitingFinishing=='0'?'':'none'}}>Client left</div> <button className="notificationBtn" onClick={finished} style={{display:waitingFinishing=='0'?'':'none'}}>OK</button>
   <div onClick={()=>(setWaitingFinishing(0))} style={{display:waitingFinishing=='1'?'':'none',color:'lightgray'}}>Wait...</div>


 </div>
                        {navigator.onLine?<iframe width="100%" height="100%" id="gmap_canvas" src={mapLoc} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className='iframeMap'></iframe>:<div className='iframeMapNoInternet'  style={{width:'100%',height:'90%',marginBottom:'10px'}}>No Connection</div>}  


      {onlineHeadingOnOf==1?
        <div className='onlineheadingCon'>


        <button className='searchCarOnlineView' style={{color:driverLocationavailable.latitude==undefined || driverLocationavailable.latitude==0?'white':'',color:driverLocationavailable.latitude==undefined || driverLocationavailable.latitude==0 ?'red':'black'}}>{driverLocationavailable.latitude== undefined || driverLocationavailable.latitude==0?'connecting ---':navigator.onLine?'you are online':<div style={{color:'red'}}>No Connection</div>} </button>


       
             <button  className='clientNumberFormBtn clientNumberFormOnlineBtn' style={{display:acceptanceMessage?'none':'',marginTop:'5%'}} onClick={unsendDriverLocation} type='submit'>Cancel</button>

      
      </div>
               :''  } 

{/*checkRequist?.checkClient==1?<div className='acceptanceCon' style={{display:withClient==1?'none':''}}> */}

        {checkRequist?.checkClient==1? <div className='acceptanceConGo' style={{display:withClient==1?'none':''}}>

          
<div className='acceptanceConMsg'><div className='acceptanceConMsgTime'>{timeleft}</div> <div className='acceptanceConMsgPrice'>{checkRequist?.clientPrice}<div className='birrCon'>birr</div></div> </div>
<div className='acceptanceConWhere'><div className='acceptanceConWhereTitle'>From</div><div className='acceptanceConWhereInfo'> {checkRequist?.clientFrom} </div></div>
<div className='acceptanceConWhere'><div className='acceptanceConWhereTitle'>To</div> <div className='acceptanceConWhereInfo'> {checkRequist?.clientGoTo} </div></div>

<div className='acceptanceConBtnCon'>
<button className='shourBtnConYes' onClick={acceptRequist} style={{color:'lightgreen',display:waitingAcceptance=='0'?'':'none'}}>YES</button>
 <button className='shourBtnConNo' onClick={rejectedRequist} style={{color:'red',display:waitingAcceptance=='0'?'':'none'}}>NO</button>
 <button className='shourBtnConNo' onClick={()=>(setWaitingAcceptance(0))} style={{display:waitingAcceptance=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>Wait...</button>

</div>
</div>

:''}








        



    



       {messageOnOf==true? <div className='loadingConDriver' >


<div className='' style={{display:formOnOf==true?'':'none'}}><IoMdRefresh className='iconConRefreshDriverInfo' onClick={refreshPage} /> </div>
       
            <div className='iconConDropDownDriverInfo' style={{display:formOnOf==false || formOnOf==3 ?'none':''}} onClick={()=>(
           setFormOnOf(false),
           setMessageOnOfBtn(0)
            )}></div>

            <div className='iconConDropUpDriverInfo' style={{display:formOnOf==1 || formOnOf==3 ?'none':'',zIndex:'100'}} onClick={()=>(
                setFormOnOf(1),
                setMessageOnOfBtn(0)
                )}></div>



       
         





        
         {shourBtn==1?<div className='shourBtnCon' > 
         <button className='shourBtnConYes shourBtnConYes' onClick={finished} style={{display:waitingFinishing=='0'?'':'none'}}>YES</button>
          <button className='shourBtnConNo' onClick={()=>(
                setFormOnOf(1),
                setShourBtn(0)
         )} style={{display:waitingFinishing=='0'?'':'none'}}>NO</button>
          <button className='shourBtnConNo' onClick={()=>(setWaitingFinishing(0))} style={{display:waitingFinishing=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>Wait...</button>
         <div className='shourBtnConTitle shourBtnConTitleD'>are you shour </div></div>:''}

        {formOnOf==false?<button className='CircularProgressConCancel2' onClick={()=>(
          setShourBtn(1),
          setFormOnOf(3)
          
          )}><div>Finish</div></button>:''}



{formOnOf==1?<> 

  <div className='acceptanceConGo2' >

          
<div className='acceptanceConWhere2'><div className='acceptanceConWhereTitle2'>Name</div><div className='acceptanceConWhereInfo2'> {checkRequist?.clientName} </div></div>
<div className='acceptanceConWhere2'><div className='acceptanceConWhereTitle2'>From</div><div className='acceptanceConWhereInfo2'> {checkRequist?.clientFrom}  </div></div>
<div className='acceptanceConWhere2'><div className='acceptanceConWhereTitle2'>To</div> <div className='acceptanceConWhereInfo2'> {checkRequist?.clientGoTo}  </div></div>
<div className='acceptanceConWhere2Price'><div className='acceptanceConWhereTitle2Price'>Price</div> <div className='acceptanceConWhereInfo2Price priceInfoConPrice'> {checkRequist?.clientPrice} <span className='priceInfoConCurrency'>Birr</span> </div></div>
<div className='driverInfoConInfo driverInfoConInfoContact'><a style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={"tel://"+checkRequist?.clientPhone}><IoCall className='driverInfoConInfoContactIcons'/></a> <RiMessage2Fill className='driverInfoConInfoContactIcons driverInfoConInfoContactIconsMessage' onClick={()=>(setMessageOnOfBtn(1))} /> </div>

 
</div>

  </>
  
:''}

             
  {messageOnoOfBtn==1? 
             <div className='messageConClient'>
              <form  className='messageFormClient' onSubmit={sendMessages}>
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
                  <IoMdRefresh className='messageInputClientCooIconItem' onClick={()=>(refreshPage())} />
                <TiArrowBack className='messageInputClientCooIconItem' onClick={()=>(
                setFormOnOf(1),
                setMessageOnOfBtn(0)
                )} />
                </div>

                <div className='messageInputClientCon'>
                <input className='messageInputClient' type="text" placeholder='message'  onChange={(e)=>setMessageInput(e.target.value)} />
                <button type='submit' className='messageBtnClient' style={{display:waitingSendingMessage=='0'?'':'none'}}><RiSendPlaneFill /></button>
                <button  className='messageBtnClient messageBtnClientWait' onClick={()=>(setWaitingSendingMessage(0))} style={{display:waitingSendingMessage=='1'?'':'none'}}></button>
                </div>


              </form>
             </div>
:''}



</div>:''}





    </div>
  )
}

export default DriverSearchBody

