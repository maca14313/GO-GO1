import React, { useEffect, useState } from 'react'
import { FiHome } from "react-icons/fi";
import { GiSteeringWheel } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";





import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    const [langu,setLangu]=useState(1);
    const [openMenu,setOpenMenu]=useState(0);

    const driverInfo=JSON.parse(localStorage.getItem('logedDriverData'))?JSON.parse(localStorage.getItem('logedDriverData')) :'' 


      
  return (
    <div className='navbar'>
<div className='con1'>
        
        <div className='menuBtn' onClick={()=>(setOpenMenu(1))}>
            <div className='menuBtnLine'></div>
            <div className='menuBtnLine'></div>
            <div className='menuBtnLine'></div>
          </div>

          <div className='menuCon' style={{display:openMenu==1?'':'none'}}>
            <div className='menuListCon'>

              <div className='menuNameIconCon' onClick={()=>(setOpenMenu(0))}>
              <MdCancel className='menuNameIcon'  />
              </div>

              <div className='menuNameList'>
                <div className='menuNameListTitle'></div>
              </div>

            </div>

             <Link to={driverInfo?.name?`/driverhome/${driverInfo?.name}/${driverInfo?.id}`:'/'} className='menuListCon'>

              <div className='menuNameIconCon'>
              <FiHome className='menuNameIcon'  />
              </div>

              <div className='menuNameList'>
                <div className='menuNameListTitle'>Home</div>
              </div>

            </Link>

            <Link to={'/driverlogin'} className='menuListCon'>

              <div className='menuNameIconCon'>
              <GiSteeringWheel className='menuNameIcon'  />
              </div>

              <div className='menuNameList'>
                <div className='menuNameListTitle'>Driver</div>
              </div>

            </Link>

            <Link to={'/driverlogin'} className='menuListCon'>

              <div className='menuNameIconCon'>
              <CgProfile className='menuNameIcon'  />
              </div>

              <div className='menuNameList'>
                <div className='menuNameListTitle'>My Profile</div>
              </div>

            </Link>

            <Link to={''} className='menuListCon'>

              <div className='menuNameIconCon'>
              <IoSettingsOutline className='menuNameIcon'  />
              </div>

              <div className='menuNameList'>
                <div className='menuNameListTitle'>Settings</div>
              </div>

            </Link>

          </div>

        <ul className='con1son2'>

          <li className='languLi'   >English</li>
          <li className='languLi'   >oromiffa</li>
          <li className='languLi'   ><small>አማርኛ</small></li>
          <li className='languLi'   >العربيه</li>
          <li className='languLi'>English</li>
          <li className='languLi'>oromiffa</li>
          <li className='languLi'><small>አማርኛ</small></li>
          <li className='languLi'>العربيه</li>
          
        </ul>

    
            
      </div>
     
      </div>  )
}

export default NavBar