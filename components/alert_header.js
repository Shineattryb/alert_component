import React from 'react'
import './alert_header.css';
function Alert_header({svglink2,svglink3}) {
  return (
    <div className='header'>
      {/* background-image */}
    {/* <img src= {svglink1} alt="background"/> */}

{/* call-icon */}
<div className='icons'>
 
<img src={svglink2} id="call"alt="icons-image"/>
{/* cross-icon */}

<img src={svglink3} id="cross" alt="cross-icon"/>

</div>



    </div>
  )
}

export default Alert_header;

