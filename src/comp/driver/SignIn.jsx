import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import axios from 'axios'
import './signIn.css'
import { apiHttp } from '../../Port';

//const {language,apiHttp}=useSelector((store)=>store.languSlice)

function SignIn() {


  const [driverDataRes,setDriverDataRes]=useState([])
  const [driverMatch,setDriverMatch]=useState([])


  const [name,setName]=useState('')
  const [fatherName,setFatherName]=useState('')
  const [grandFatherName,setGrandFatherName]=useState('')
  const [gender,setGender]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [phoneNumber2,setPhoneNumber2]=useState('');
  const [city,setCity]=useState('');
  const [address,setAddress]=useState('');
  const [kebale,setKebale]=useState('');
  const [carType,setCarType]=useState('');
  const [carPlate,setCarPlate]=useState('');
  const [driverId,setDriverId]=useState('');
  const [password,setPassword]=useState('');
  const [registretionDate,setRegistretionDate]=useState('');
  

  const registerDriver=async(e)=>{
      e.preventDefault()
              try {
                    const driverData=await axios.post(`${apiHttp}/registerdriver`,{
                name,
                fatherName,
                grandFatherName,
                gender,
                phoneNumber,
                phoneNumber2,
                city,
                address,
                kebale,
                carType,
                carPlate,
                driverId,
                password,
                registretionDate,

                
              })

             // const getdriver=await axios.get(`${apiHttp}/getdriver/${driverId}`)
              
             // setDriverDataRes(getdriver.data)
              setDriverMatch(driverData.data)

                  } catch (error) {
                      console.log(error)

                   }
                   }
           

console.log(driverDataRes)


  return (
    <div className='driveSignInCon'>
             <div className='background'></div>


        <form className='driveSignInRegisterForm' onSubmit={registerDriver}>

        <div>
          {driverDataRes?.map((driver)=>(
            <div>
              
            <div style={{marginBottom:'20px',color:'blue',fontSize:'30px'}}>{driver.driverId}</div>




            </div>
   //return driver.driverId
))}
         </div>
         
        <div style={{marginBottom:'20px',color:'blue',fontSize:'30px'}}>{driverDataRes?driverDataRes.name:''}</div>
        <div style={{marginBottom:'20px',color:'red',fontSize:'30px'}}>{driverMatch?driverMatch:''}</div>

        <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder='Name' required />
        <input type="text" onChange={(e)=>setFatherName(e.target.value)}  placeholder='Father Name' required/>
        <input type="text" onChange={(e)=>setGrandFatherName(e.target.value)} placeholder='Grand Father Name' required/>
        <input type="text" onChange={(e)=>setGender(e.target.value)} placeholder='Gender' required/>
        <input type="number" onChange={(e)=>setPhoneNumber(e.target.value)} placeholder='Phone Number' required />
        <input type="number" onChange={(e)=>setPhoneNumber2(e.target.value)} placeholder='Phone Number2' required />
        <input type="text" onChange={(e)=>setCity(e.target.value)}  placeholder='City' required />
        <input type="number" onChange={(e)=>setAddress(e.target.value)}  placeholder='Address' required />
        <input type="text" onChange={(e)=>setKebale(e.target.value)}  placeholder='Kebale' required />
        <input type="text" onChange={(e)=>setCarType(e.target.value)}  placeholder='CarType' required />
        <input type="number" onChange={(e)=>setCarPlate(e.target.value)}  placeholder='CarPlate' required />
        <input type="number" onChange={(e)=>setDriverId(e.target.value)}  placeholder='Id' required />
        <input type="number" onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' required />
        <input type="number" onChange={(e)=>setRegistretionDate(e.target.value)}  placeholder='Registretion Date' required />





       





         <button type='submit' className='driveSignInRegisterFormBtn'>Register</button>
         <div className='signinLinks'><Link className='signinLinks' to={'/driverlogin'} >Log-In</Link> <Link className='signinLinks' to={'/'} >Home</Link></div>



</form>
    </div>
  )
}
  

  
export default SignIn