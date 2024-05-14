import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {hostVar} from './VarImportes'
import './reg.css'

//import AdminLogIn from './AdminLogIn'



function ListOfDrivers() {
    const regInfo=JSON.parse(localStorage.getItem('regInfo')) 
    const auth=JSON.parse(localStorage.getItem('auth'))


    const [membersInfo,setMembersInfo]=useState([])
    const [info,setInfo]=useState('')
    const [searchText,setSearchText]=useState('')


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    try {
        const fetchData=async()=>{
            const ListOfMembers=await axios.get(`${hostVar}/getdrivers`)
            setMembersInfo(ListOfMembers.data)
        }
       fetchData()
    } catch (error) {
        console.log(error)
    }
   
    
    },[])

   

    useEffect(() => {
     if (searchText!='') {
      const search=async()=>{
        try {
          const searchMembers=await axios.get(`${hostVar}/searchbyname/${searchText}`)
           setMembersInfo(searchMembers.data)
  
        } catch (error) {
          
        }
       }
       search()
     }
    }, [searchText]);



   
        
  return (
    <div className='regCon regConList payment-page-info-list'>
         
          <h3 className='titleOfProfile'><h3>List Of All Drivers</h3> <span className='membersLength'>{membersInfo?.length}</span> </h3> 
            
             <div className='formCon listOfMembersCon listOfMembersConSearch'>
             <input className='row listCon  ' type="text" placeholder='🔎  by name or phone number' onChange={(e)=>setSearchText(e.target.value)} />
             </div>
             
             <div className='formCon formConUpdate regConDelete deleteMemberConPayment payment-page-info-list-item ' > <Link to={`/idcard`} className='deleteMemberConPaymentText payment-page-info-list'>Id-cards  ➡️</Link> </div>
          {membersInfo.sort((a,b)=>b.id-a.id)?.map((m,index)=>(

      
       
  <Link to={`/adminupdatemember/${m.personal_id}`} key={m?.id}>
     <div  className='formCon listOfMembersCon ' >
       <div className='row listCon payment-page-info-list payment-page-info-list-border-none' ><div><span className='spanOfList payment-page-info-list'><div className='margin_right10' >{index+1}</div>{m?.name}  <span className='margin_left10'>{m.fatherName}</span> </span> </div> <span>{m?.phoneNumber}</span>   </div>    
    </div>
  </Link> 
 
    ))}
 
 </div>    
  )
}

export default ListOfDrivers