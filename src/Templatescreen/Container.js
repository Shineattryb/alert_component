import React, { useState } from 'react'
import { MainHeader } from '@attrybtech/attryb-ui'
import './Container.css';

import colored_checkbox from "../assets/colored_checkbox.svg";
const DocMainHeader=({header,svgLink,Subhead,selected,onClick})=> {
 

  return (
    <div className={`wrapper ${selected?'boxclick':''}`} onClick={onClick}>
        <div className='text-image'>
      {/* image div */}
              <div className="Doc DocAlertPopup image-container">

                  <img src={svgLink}/>
              </div>
             
      {/* text-div */}
                <div className='text-container'>
                  <div className='text-heading'>
                           <h1 style={{color:selected?'#53389E' : '#344054'}}>{header}</h1>
                  </div>
                <div className='sub-heading'>
                            <p style={{color:  selected ? '#7F56D9' : '#475467'}}>{Subhead}</p>
                </div>
                </div>
    </div>
      {/* check-base */}
                
        {
          selected ? <div className='checked-svg'><img src={colored_checkbox} alt="checked_box" /></div>  :  <div className={`box ${selected ? 'checked':''}`} onClick={onClick}>
         
           </div>
        }         

</div>
  )
}

export default DocMainHeader
