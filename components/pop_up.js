import React,{useState} from "react"
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from "@attrybtech/attryb-ui";
import PhoneInput from 'react-phone-input-2';
import Phone_input from "./input_phone.js";
import Alert_header from "./alert_header.js";
import './pop_up.css';
import svglink1 from "../assets/svglink1.svg";//background
import svglink2 from "../assets/svglink2.svg"; //call
import svglink3 from "../assets/svglink3.svg"; //cross
import svglink4 from "../assets/svglink4.svg";  //email
import svglink5 from "../assets/svglink5.svg";  //password
const DocAlertPopup = () => {
    const { modalState, modalRef, exitModal, showModal } = useModal()
    




    function modalOkayHandler() {
        console.log("Accepted");
        exitModal();
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
<div className="upper-part">

                        <Alert_header  svglink2={svglink2} svglink3={svglink3}/>


                        <div className="section">
                           
                        <AlertPopupHeader >Send Test Message</AlertPopupHeader>
                        <AlertPopupBody >We'll send a Test Message on this number</AlertPopupBody>
                        </div>   
                     
                        </div>
                        <div className="phone_foot">
                        <Phone_input/>
                       
                       
                        </div>
                        <AlertPopupFooter>
                            <Button  id="cancel-btn"onClick={modalCancelHandler} variant="link">
                                Cancel
                            </Button>
                            <Button  id="okay-btn"onClick={modalOkayHandler}>Send Message</Button>
                        </AlertPopupFooter>
                    </AlertPopup>
                    
                </div>
            </div>
        </div>
    )
}

export default DocAlertPopup