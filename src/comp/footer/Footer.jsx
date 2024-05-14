import React from 'react'
import './footer.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LocalTaxiRoundedIcon from '@mui/icons-material/LocalTaxiRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import { Link } from 'react-router-dom';
function Footer() {
  const driverInfo=JSON.parse(localStorage.getItem('logedDriverData')) 


  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div className='footerCon'>
    <div className='iconCon'> <Link to={driverInfo?.name?`/driverhome/${driverInfo?.name}/${driverInfo?.id}`:'/'} onClick={refreshPage} ><HomeRoundedIcon sx={{
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
    <div className='iconCon' > <Link to={'/driverlogin'}><LocalTaxiRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'white',
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
            

          },}}/> </Link><div className='iconName'>Driver</div></div>
    <div className='iconCon'><PersonRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'white',
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

          },}}/> <div className='iconName'>Data</div></div>
    <div className='iconCon'><BarChartRoundedIcon sx={{
          width:'20px',
          height:'20px',
          color:'white',
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

          },}}/> <div className='iconName'>Settings</div></div>



    </div>
  )
}

export default Footer