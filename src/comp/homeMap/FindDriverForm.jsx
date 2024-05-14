import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import './homebody.css'
import CheckIcon from '@mui/icons-material/Check';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';

import beep1 from './Barcode-scanner-beep-sound.mp3';


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import { Link,useNavigate} from 'react-router-dom';
import { apiHttp } from '../../Port';















function HomeBody() {

  const navigate = useNavigate()

  //const socket = useRef();

  const [clientPhone,setClientPhone]=useState(JSON.parse(localStorage.getItem('clientPhone'))?JSON.parse(localStorage.getItem('clientPhone')):'')
  const [phone,setPhone]=useState(null)
  const [name,setName]=useState(JSON.parse(localStorage.getItem('clientName')))

  const [canceledDriverId,setCanceledDriverId]=useState(JSON.parse(localStorage.getItem('canceledDriverId')))
  const [driverGrandFatherName,setDriverGrandFatherName]=useState(JSON.parse(localStorage.getItem('driverGrandFatherName')))
   const driverInfo=JSON.parse(localStorage.getItem('logedDriverData')) 










  const [searchBtnOnOf,setSearchBtnOnOf] = useState(1);

  const [loading,setLoading] = useState(null);

  const [driverFound,setDriverFound] = useState(false);




  

  
  const [closest,setClosest]=useState(JSON.parse(localStorage.getItem('driverData')))

  const [loc, setLoc] = useState();
  const [loc2, setLoc2] = useState();
  const [locGeo, setLocGeo] = useState([]);
  const [locGeoLat, setLocGeoLat] = useState(JSON.parse(localStorage.getItem('locGeoLat')));
  const [locGeoLon, setLocGeoLon] = useState(JSON.parse(localStorage.getItem('locGeoLon')));




  
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


 let noResponse=useRef();
 let noResponse2=useRef();









    


 




  

  



//const [startCheckDriverAcceptance,setStartCheckDriverAcceptance] = useState(0);
 //const [checkDriverAcceptance,setCheckDriverAcceptance] = useState(JSON.parse(localStorage.getItem('checkDriver'))?JSON.parse(localStorage.getItem('checkDriver')):0);
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

      localStorage.setItem('locGeoLat',JSON.stringify(locGeoLat))
      localStorage.setItem('locGeoLon',JSON.stringify(locGeoLon))

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
        window.location.reload()
        
      
    } catch (error) {
      setNoNetwork(1)
    }
  


  
 }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const sendPassengerLocation=async()=>{
        try {

          const passengerLocation=await axios.post(`${apiHttp}/sendpassengerlocation/${0}/${clientPhone}/${name}`,{
            latitude:locGeoLat,
            longitude:locGeoLon,
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
          }else{
            setNoDriver(1)
          }

        
        } catch (error) {
          setNoNetwork(1)
        }
      

   
         //localStorage.setItem('driverData',JSON.stringify(passengerLocation.data))

        }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const searchCancel=async()=>{
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



  


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



            const resetAll=async()=>{
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
                  localStorage.removeItem('locGeoLat')
                  localStorage.removeItem('locGeoLon')
                  localStorage.removeItem('clientPhone')
                  localStorage.removeItem('clientName')
                  localStorage.removeItem('logedDriverData')
                  searchBtnOnOf(0)




          
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
                latitude:locGeoLat,
                longitude:locGeoLon,
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
      
      

       var chy2=`https://maps.google.com/maps?q=${loc2?.latitude},${loc2?.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;


return(
  <>
  <div className='homeBodyCon'>

  <iframe className='iframeMap' width="100%" height="100%" id="gmap_canvas" src={chy2} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>


         <form className='clientNumberForm' onSubmit={setingClientInfo} style={{display:clientPhone!=''?'none':'',minHeight:'300px'}}>
          
         <div className='clientNumberFormInputError' style={{display:noNetwork==1?'':'none'}} ><h6>No Network</h6></div>
          <input className='clientNumberFormInput' type="text" required placeholder='Name'  onChange={(e)=>setName(e.target.value)}/>
          <input className='clientNumberFormInput' type="tel" required placeholder='Mobile Number ' onChange={(e)=>setPhone(e.target.value)} title="Please use a 10 digit telephone number with no dashes or dots" pattern="[0-9]{10}" />
          <input className='clientNumberFormInput' type="text"  onChange={(e)=>setLocGeoLat(e.target.value)}  placeholder='latitude' required />
          <input className='clientNumberFormInput' type="text" onChange={(e)=>setLocGeoLon(e.target.value)}  placeholder='longitude' required  />


          <button className='clientNumberFormBtn' type='submit' ><CheckIcon sx={{
          width:'60px',
          height:'30px',
          background:'#0077ff',
          marginRight:'28px',
          color:'white',
          borderRadius: '10px',
          border:' 2px solid ' ,
          marginLeft:'30px' ,
          "&:active":{
            backgroundColor:"whitesmoke",
            borderRadius:'50%',
            padding:'2px',
            color:'lightgray'

          },}}/></button>
         </form>
                                                                                                   
         
         {searchBtnOnOf==1? <div className='searchCarBtnBodyC'> 
         <div className='driverNotFound' style={{display:noNetwork==1?'':'none'}}><h6>No Network</h6></div>
         <div className='driverNotFound' style={{display:noDriver==1?'':'none'}}><h6>No Driver</h6></div>

         <button className='searchCarBtnC'  onClick={sendPassengerLocation}  >< div >
    </div >Search </button> 

         </div>:''}
        

        {loading==1?<div className='CircularProgressConN' > 
        <div class="loaderCancel" onClick={searchCancel}>x</div>
        <div class="loader">Loading...</div> </div>:''}

     

        {withDriver==1? <div className='loadingCon' style={{maxHeight:driverInfoView==true?'190px':'80px',minHeight:driverInfoView==true?'190px':'80px'}}>



       <ArrowDropDownIcon onClick={()=>(
            setDriverInfoView(false),
            setDriverFound(!driverFound)
            )} style={{display:driverInfoView==false?'none':''}}  sx={{
            width:'90px',
            height:'90px',
            marginRight:'25px',
            marginBottom:'3px',
            color:'black',
            borderRadius: '10px',
            position:'absolute',
            top:'-37px',
            right:'-30px',
  
            "&:hover":{
              borderRadius:'50%',
              padding:'2px',
              color:'salmon'
  
            }
            ,
            "&:active":{
              borderRadius:'50%',
              padding:'2px',
              color:'lightgray'
  
            },}}/> <ArrowDropDownIcon onClick={()=>(
                setDriverInfoView(1),
                setDriverFound(!driverFound),
                setShourBtn(0)
                )}  style={{display:driverInfoView==1 ?'none':''}}  sx={{
            width:'90px',
            height:'90px',
            marginRight:'25px',
            marginBottom:'3px',
            color:'black',
            borderRadius: '10px',
            position:'absolute',
            top:'-37px',
            right:'-30px',

  
            "&:hover":{
              borderRadius:'50%',
              padding:'2px',
              color:'salmon'
  
            }
            ,
            "&:active":{
              borderRadius:'50%',
              padding:'2px',
              color:'lightgray'
  
            },}}/>
         



          {shourBtn==1?<div className='shourBtnConTitle'>are you shour </div>:''
}
         {shourBtn==1?<div className='shourBtnCon' > <button className='shourBtnConYes' onClick={resetAll}>YES</button> <button className='shourBtnConNo' onClick={()=>(
           setDriverInfoView(1),
           setDriverFound(!driverFound),
           setShourBtn(0)
         )}>NO</button></div>:''}
        {driverInfoView==false?<button className='CircularProgressConCancel2' style={{display:driverInfoView==3?'none':''}} onClick={()=>(
          setShourBtn(1),
          setDriverInfoView(3)
     )}><h3>Finishe</h3></button>:''}
        

{driverInfoView==1?<div className='driverInfoCon'>

 

  <div className='driverImgCon'>Img</div>
  <div className='driverInfoConInfo'>Name <div className='driverInfoConInfoSpan'><span>{checkDriverAcceptance?.driverName}</span> <span>{checkDriverAcceptance?.driverFatherName}</span> <span>{driverGrandFatherName}</span></div> </div>
  <div className='driverInfoConInfo'>CarType  <div className='driverInfoConInfoSpan'>{checkDriverAcceptance?.driverCarType}</div></div>
  <div className='driverInfoConInfo'>CarPlate <div className='driverInfoConInfoSpan'> {checkDriverAcceptance?.driverCarPlate}</div></div>
</div>:''}
             
<div className='iconConRefresh' style={{display:driverInfoView==1?'':'none'}}> <Link style={{margin:'-5px'}} to={''}> <RefreshIcon onClick={refreshPage}  sx={{
          width:'30px',
          height:'30px',
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

{driverInfoView==1?  <div className='callDriverCon'><a style={{marginRight:'30px'}} href={"tel://"+checkDriverAcceptance?.driverPhoneNumber1}><CallIcon sx={{
          width:'35px',
          height:'35px',
          background:'black',
          color:'lightgreen',
          borderRadius: '10px',
          margin:'4px',
          marginRight: '2px',
          padding:'5px',


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

          },}}/>1</a><a href={"tel://"+checkDriverAcceptance?.driverPhoneNumber2}><CallIcon sx={{
            width:'35px',
            height:'35px',
            background:'black',
            color:'#2c8af6',
            marginLeft:'28px',
            borderRadius: '10px',
            margin:'3px',
            marginRight: '5px',
            padding:'5px',


  
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
  
            },}}/>2</a></div>:''}



</div>:''}





     
</div>

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






    </div>

    </>

)


}

export default HomeBody


