import React from 'react'

import './Container.css';
import {
  AlertPopup,
  AlertPopupHeader,
  AlertPopupBody,
  AlertPopupFooter,
  Button,
  useModal,
} from "@attrybtech/attryb-ui";
function Container() {
  const { modalState, modalRef, exitModal, showModal } = useModal()
  return (
    <div className='container'>
    
      {/* container */}


<div className='broadcast'>

</div>
<div className='Templatedetails'>

</div>
    </div>
  )
}

export default Container;
