import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function HomePage() {

    const [dir, setDir] = useState();

  
  
  var data = [{
      "code": "0001",
      "lat": "1.28210155945393",
      "lng": "103.81722480263163",
      "location": "Stop 1"
  }, {
      "code": "0003",
      "lat": "1.2777380589964",
      "lng": "103.83749709165197",
      "location": "Stop 2"
  }, {
      "code": "0002",
      "lat": "1.27832046633393",
      "lng": "103.83762574759974",
      "location": "Stop 3"
  }];
  useEffect(() => {
    function distance(lat1, lon1, lat2, lon2, unit) {
      var radlat1 = Math.PI * lat1/180
      var radlat2 = Math.PI * lat2/180
      var theta = lon1-lon2
      var radtheta = Math.PI * theta/180
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist)
      dist = dist * 180/Math.PI
      dist = dist * 60 * 1.1515
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist
    }

    var poslat = 1.28210155945393;
    var poslng = 103.81722480263163;
    
    for (var i = 0; i < data.length; i++) {
        // if this location is within 0.1KM of the user, add it to the list
        if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 0.1) {
          setDir(data[i].location + ' - ' + data[i].code);
        }
    }

  }, []);
 
  console.log(dir)
  
  return (

    <div className="homepage">
      <div className='con1'>
        <div className='con1son1'><h1>hello</h1></div>
        <div className='con1son2'>1b</div>
            
      </div>

      <div className='con2'>
        <Button variant="contained" sx={{
          backgroundColor:"white",
          width:'200px',
          height:'200px',
          borderRadius:'50%',
          border:'20px solide black',
          color:'#286ebd',
          "&:hover":{
            backgroundColor:"whitesmoke",

          }




        }}>Hello World</Button>
        
  
       
      </div>
      <div className='con3'>3</div>

      <div style={{display:language!==1 ? 'none' : '',}}>english</div>
    <div style={{display:language!==2 ? 'none' : '',}}>oromiffa</div>
    <div style={{display:language!==3 ? 'none' : '',}}>amhaaric</div>
    <div style={{display:language!==4 ? 'none' : '',}}>العربيه</div>

    </div>
  )
}

export default HomePage