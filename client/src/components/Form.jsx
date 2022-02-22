import React from 'react'
import axios from "axios" 
import "./form.css"
import { useRef } from 'react';
import { useState } from 'react'
export default function () {

  //getting value with useReg=f
  const firstName = useRef();
  const surname = useRef();
  const email = useRef();
  const number = useRef();
  const gender = useRef();
  const day = useRef();
  const month = useRef();
  const year = useRef();
  const comment = useRef();


  const[step1,setStep1] = useState("show")
  const[step2,setStep2] = useState("hide");
  const[step3,setStep3] = useState("hide");

  // Show / hide step1
const handler1 =() =>{
  setStep1(step1==="show" ? "hide":"show")
  setStep2("hide")
  setStep3("hide")
}  
// Show / hide step2
const handler2 =() =>{
  setStep2(step2==="show" ? "hide":"show")
  setStep1("hide")
  setStep3("hide")
}  
// Show / hide step3
const handler3 =() =>{
  setStep3(step3==="show" ? "hide":"show")
  setStep2("hide")
  setStep1("hide") 
}
//show  step 2 on button click
const handleNext = event =>{
  event.preventDefault();
  setStep3("hide")
  setStep1("hide")
  setStep2("show")
}
//show  step 3 on button click
const handleNext2 = event =>{
  event.preventDefault();
  setStep3("show")
  setStep1("hide")
  setStep2("hide")
}

//submit buton to insert data
const clickSubmit = async (e) =>{
  
  e.preventDefault();
   
console.log(gender.current.value)
      const user = {
           firstname:firstName.current.value,
           surname:surname.current.value,
           email:email.current.value,
           number:number.current.value,
           gender:gender.current.value,
           birthdate:year.current.value+"-"+month.current.value+"-"+day.current.value,
           comment:comment.current.value
      };
      console.log(firstName.current.value)
      
      try{
          const res = await axios.post("http://localhost:8000/users",user); 
          console.log(res.data)
          if(res.data === "missing information"){
            alert("missing information")
          }
          else
          alert("success")
      } catch (err){
          console.log(err);
      } 
  
 
}
  return (
     <div className="form">
       <div className="formWrapper">

       <div className="steps">
            <button className="title" onClick={handler1}>
               <span className="details">Step 1: Your Details</span>
            </button>
            <form className={"step1"+step1} onSubmit={handleNext}>
            <div className="step1Form">
            <div className='container'>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    required 
                    id="firstName"
                    className="firstname"
                    ref={firstName}
                 />
                </div>
                <div className='container'>
                <label htmlFor="lastName">Last Name</label>
                <input
                   type="text"
                   required 
                   id="lastName" 
                   className="lastName" 
                   ref={surname}
                   />
                </div>
                
            </div>
            <div className='emailContainer'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              required  
              id="email" 
              className="email" 
              ref={email}
            /> 
            
            <button  type='submit' className='next1'>Next</button>
            </div>
          </form>
          </div>

          <div className="steps">
              <button className="title" onClick={handler2}>
               <span className="details">Step 1: Your Details</span>
             </button>
              <form className={"step2"+step2} onSubmit={handleNext2}>
              <div className="step1Form">
                <div className='container'>
                <label htmlFor="tel">Telephone Number</label>
                <input 
                  required 
                  type="number" 
                  ref={number}
                />
                </div>
                <div className='container'>
                <label htmlFor="gender">Gender</label>
                <select ref={gender}  id="gender"  > 
                  <option selected disabled value="">Select Gender</option>
                  <option value="Male" selected>Male</option>
                  <option value="Female">Female</option> 
                </select>
                </div>     
              </div> 
                <div className='dateContainer'>
                <label htmlFor="date">Date Of Birth</label>
                <input ref={day} type="number" required placeholder='dd' max="31" maxLength="2" id="day" className='inputDate' /> 
                <input ref={month} type="number" required placeholder='mm' max="12" maxLength="2" className='inputDate'   id="day"  /> 
                <input ref={year} type="number" required placeholder='yyyy' min="1900" maxLength="4" className='inputDate'  id="day"  />
              </div>
              <button className='next'>Next</button>
            </form>
          </div>

          <div className="steps">
            <button className="title" onClick={handler3}>
               <span className="details">Step 1: Your Details</span>
            </button>
            <form onSubmit={clickSubmit} className={"step3"+step3}>
              <label htmlFor="comments">Comments</label>
              <input required ref={comment} className='comments' type="text" />
              <button className='submitButton'  >Submit</button>
            </form>
            
          </div>


         
       </div>
     </div>
  )
}
