import React ,{useState}from 'react'
import './alert_header.css';

import {
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  Button,
  useModal,
} from "@attrybtech/attryb-ui";
function Alert_header({svglink2,svglink3}) {
  const { modalState, modalRef, exitModal, showModal } = useModal();
  function modalCancelHandler() {
    console.log("Cancelled");
    exitModal();
}

  return (
    
    <div className='header'>
    
    

{/* call-icon */}
<div className='icons'>
 
<img src={svglink2} id="call"alt="icons-image"/>
{/* cross-icon */}
<a href="#">
<img src={svglink3} id="cross" alt="cross-icon" onClick={modalCancelHandler}/>
</a>
</div>



    </div>
  )
}

export default Alert_header;

