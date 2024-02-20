import React,{useState} from "react";
import axios from "axios";
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from "@attrybtech/attryb-ui";
import PhoneInput from 'react-phone-input-2';
import Phone_input from "./Inputphone.js";
import Alertheader from "./Alertheader.js";
import './Popup.css';

import svglink1 from "../assets/svglink1.svg";//background
import svglink2 from "../assets/svglink2.svg"; //call
import svglink3 from "../assets/svglink3.svg"; //cross
import svglink4 from "../assets/svglink4.svg";  //email
import svglink5 from "../assets/svglink5.svg";  //password
const DocAlertPopup = () => {
    const { modalState, modalRef, exitModal, showModal } = useModal()
    




    function modalOkayHandler() {


        




        console.log("Accepted");

       
        // exitModal();
    }
    
    function modalCancelHandler() {
        console.log("Cancelled");
        exitModal();
    }
    

    return (
        <div className="Doc DocAlertPopup ">
            {/* <h1>Alert Popup</h1> */}
            <div className="DocEntry">
                {/* <h3>Standard Alert Popup</h3> */}
                <div className="Example" style={{ gridGap: "2rem" }}>

                    <Button onClick={showModal}>Open Alert</Button>
            
                    <AlertPopup
                        wrapperRef={modalRef}
                        name="example-popup-1"
                        visibility={modalState}
                        onBackdropClick={modalCancelHandler}  className="container">
         

                      
          

           
                           
                        <AlertPopupHeader >
                            <div >
                        <Alertheader exitModal={exitModal}  Headericon={svglink2} Crossicon={svglink3}/>
                          </div>
                          <div className="Headersection">
                          <div className="alert-Heading-text">
                                     Send Test Message
                                 </div>
                         
                                 <div className="alert-sub-heading">
                                     We'll send a Test Message on this number
                                </div>
                                </div>
                        </AlertPopupHeader>


                        <AlertPopupBody >
                           <div className="section">
                               
                                
                                <Phone_input/>
                             </div>        
                        </AlertPopupBody>
                      
           
                     
                       
                        
                        

                        <AlertPopupFooter>
                            <div className="footer">
                            <Button  id="cancel-btn"onClick={modalCancelHandler} variant="link">
                                Cancel
                            </Button>
                            <Button  id="okay-btn"onClick={modalOkayHandler}>Send Message</Button>
                            </div>
                        </AlertPopupFooter>
                </AlertPopup>
                    
                </div>
            </div>
        </div>
    )
}



// </AlertPopup>

export default DocAlertPopup;

  