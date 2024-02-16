import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './input_phone.css';
function Phone_input() {
 const [phonenumber,setphonenumber]=useState('');

 const handleChange=(value)=>{
 
  setphonenumber(value);



 }
 
  return (
    <div className="phone">
     <label>
      <div className='phone-label'>
     <p> Phone Number</p>
      </div>
     
    
      <PhoneInput id="input" country={'in'}  value={phonenumber}  onChange={handleChange} 
placeholder='98XXXXX40'


      countryCodeEditable={false}
      inputStyle={{width:'352px',height:'44px',boxShadow:'0px 1px 2px 0px #1018280D',fontFamily:'Inter',fontWeight:'400',fontSize:'16px',lineHeight:'24px'}}
     dropdownStyle={{width:'352px',border:'1px solid grey'}}

      />
    
      </label>
    </div>
  )
}

export default Phone_input;
 