import React ,{useState}from 'react'
import './Alertheader.css';


import {
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  Button,
  useModal,
} from "@attrybtech/attryb-ui";
function Alertheader({Headericon,Crossicon, exitModal}) {
 
  function modalCancelHandler() {
    console.log("Cancelled");
    exitModal();
}

  return (
    
    <div className='header'>
    
    


<div className='icons'>
 {/* left-icon */}
<img src={Headericon} id="call"alt="icons-image"/>
{/* cross-icon- right-icon */}

<img src={Crossicon} id="cross" alt="cross-icon" onClick={modalCancelHandler}/>

</div>



    </div>
  )
}

export default Alertheader;

