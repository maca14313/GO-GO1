import { useEffect, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom';

import axios from 'axios'
import './signIn.css'
//import DriverImg from './personNew.jpeg'
import DriverImg from '../image/personNew.jpeg'
import { apiHttp } from '../../Port';


//const {language,apiHttp}=useSelector((store)=>store.languSlice)


function SignIn() {
  const driverInfo=JSON.parse(localStorage.getItem('logedDriverData')) 
  //const clientInfoName=JSON.parse(localStorage.getItem('clientName')) 
  const [clientInfoName,setClientInfoName]=useState(JSON.parse(localStorage.getItem('clientName')))

  const clientInfoPhone=JSON.parse(localStorage.getItem('clientPhone')) 
  


  const navigate = useNavigate()

  const [driverDataRes,setDriverDataRes]=useState([])
  const [driverMatch,setDriverMatch]=useState([])

  const [clientName,setClientName]=useState([])



 
  const [driverId,setDriverId]=useState('');
  const [password,setPassword]=useState('');
  const [waitingLogIn,setWaitingLogIn]=useState(0);
  const [waitingSettingClientInfo,setWaitingSettingClientInfo]=useState(0);


  

  const registerDriver=async(e)=>{
      e.preventDefault()
      setWaitingLogIn(1)

              try {
                    const driverLogIn=await axios.post(`${apiHttp}/logindriver`,{
               
                driverId,
                password,

                
              })

              setDriverDataRes(driverLogIn.data)
              localStorage.setItem('logedDriverData',JSON.stringify(driverLogIn.data))

              setDriverMatch(driverLogIn.data)

                  } catch (error) {
                      console.log(error)

                   }
                   }
           
if (driverDataRes?.name) {

  if (JSON.parse(localStorage.getItem('senderPhone'))!==null) {
    navigate(`/driveravailable/${driverDataRes.name}/${driverDataRes.id}`)
    window.location.reload()
  } else {
    navigate(`/driverhome/${driverDataRes.name}/${driverDataRes.id}`)
 
    window.location.reload()
  }


} else {
  
}
   
 const logOut=()=>{
       navigate('/')
       window.location.reload()
       localStorage.removeItem('logedDriverData')
       localStorage.removeItem('clientName')
       localStorage.removeItem('clientPhone')
       
 }
 const settingClientInfo=async(e)=>{
  e.preventDefault();
  setWaitingSettingClientInfo(1)
    try {

      const sendClientData=await axios.post(`${apiHttp}/regclientdata`,{
          clientPhoneNumber:clientInfoPhone,
          clientName:clientName,
      })
           const clientDatas=sendClientData.data
         
          console.log(clientDatas.clientName)
      localStorage.setItem('clientPhone',JSON.stringify(clientDatas.clientPhoneNumber))
      localStorage.setItem('clientName',JSON.stringify(clientDatas.clientName))
      //setClientPhone(clientDatas.clientPhoneNumber)
      setClientInfoName(clientDatas.clientName)
      setWaitingSettingClientInfo(0)

        //window.location.reload()
        
      
    } catch (error) {
      //setNoNetwork(1)
    }
  
   


  
 }

 



  return (
    <div className='driveSignInCon'>
        <div className='driveLogOutRegisterForm' style={{display:driverInfo?.name || clientInfoName ?'':'none'}}>
       <img className='logedDriverImg' src={''} alt="" />

       {driverInfo?.name? <> <div className='driveLogOutRegisterFormInfo-1' ><div className='driveLogOutRegisterFormInfoPlName' >Name</div> <div className='driveLogOutRegisterFormInfoName'>{driverInfo?.name}</div> </div>

<div className='driveLogOutRegisterFormInfo-1'><div className='driveLogOutRegisterFormInfoPlName' >FatherName</div> <div className='driveLogOutRegisterFormInfoName'>{driverInfo?.fatherName}</div> </div></>
:<> <div className='driveLogOutRegisterFormInfoCon'>

   <div className='driveLogOutRegisterFormInfo' ><div className='driveLogOutRegisterFormInfoPlName' >Name</div> <div className='driveLogOutRegisterFormInfoName'>{clientInfoName}</div> </div>

       <div className='driveLogOutRegisterFormInfo2'><div className='driveLogOutRegisterFormInfoPlName' >Phone-Number</div> <div className='driveLogOutRegisterFormInfoName'>{clientInfoPhone}</div> </div>
       <form className='editNameForm' onSubmit={settingClientInfo}>
       <input className='editInput' type="text" onChange={(e)=>setClientName(e.target.value)}  placeholder='Edit name' required   maxlength = "20" />
       <button className='editBtn' style={{display:waitingSettingClientInfo=='0'?'':'none'}}>save</button>
       <button  className='editBtn' onClick={()=>setWaitingSettingClientInfo(0)} style={{display:waitingSettingClientInfo=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>wait...</button>

       </form>
       </div>
       </>}

        <button type='submit' className='driveSignInRegisterFormBtn2' onClick={logOut}>Log-Out</button>

        <div><Link to={driverInfo?.name?`/driverhome/${driverDataRes.name}/${driverDataRes.id}`:'/'}>Home</Link></div>

        </div>




        <form className='driveSignInRegisterForm' onSubmit={registerDriver} style={{display:driverInfo?.name || clientInfoName ?'none':''}}>


        <div style={{marginBottom:'20px',color:'blue',fontSize:'30px'}}>{driverDataRes?driverDataRes.name:''}</div>
        <div style={{marginBottom:'20px',color:'red',fontSize:'30px'}}>{driverMatch?driverMatch.tryAgen:''}</div>

       
        <input className='logInInput' type="number" onChange={(e)=>setDriverId(e.target.value)}  placeholder='Id' required />
        <input className='logInInput' type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' required />

         <button type='submit' className='driveSignInRegisterFormBtn' style={{display:waitingLogIn=='0'?'':'none'}}>Log-In</button>
         <button  className='driveSignInRegisterFormBtn' onClick={()=>setWaitingLogIn(0)} style={{display:waitingLogIn=='1'?'':'none',backgroundColor:'lightgray',color:'gray'}}>wait...</button>

         <div className='signinLinks'><Link className='signinLinks' to={'/driversignein'}>Register</Link> <Link className='signinLinks' to={'/'}>Home</Link></div>



</form>
    </div>
  )
}
  

  
export default SignIn