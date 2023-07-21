import React, { Fragment, useState } from 'react'

import './Home.css'

const Home = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState();
  const [subject,setSubject]=useState('');
const formSubmit=()=>{

}
  return (
    <Fragment>
      <div className='formContainer'>
        <div className='formBox'>
          <div className='formHeader'>
            <h2>Get in Touch</h2>
            <p>Our Friendly team love to hear from you.</p>
          </div>
      
        
        <form className='contactForm' encType='multipart/form-data' onSubmit={formSubmit}>
        <div className='fullName'>
           <label>Name*</label>
           <input 
             type='text'
             placeholder='enter your Full Name'
             value={name}
             onChange={(e)=>setName(e.target.value)}
   
          />
          </div>
          <div className='formEmail'>
           <label>Email*</label>
           <input 
             type='email'
             placeholder='enter your email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
          />
          </div>
           <div className='phoneNumber'>
           <label>phone Number*</label>
           <input 
             type='text'
             placeholder='enter your phone Number'
            value={number}
            onChange={(e)=>setNumber(e.target.value)}   
          />
          </div>

          <div className='subject'>
           <label>Subject*</label>
           <input 
             type='text'
             placeholder='enter your Subject'
             value={subject}
             onChange={(e)=>setSubject(e.target.value)}
          />
          </div>
          {/* <div class="message">
           <label for="my-textarea">Message</label>
           <textarea id="my-textarea" name="my-textarea"
           placeholder='Enter your message'
           rows='5'
           cols='33'
           ></textarea>
          </div> */}
         
          <input
            type='submit'
            value='Send Message'
            className='loginBtn'
          />
          
        </form>
       
        </div>
      </div>
     
    </Fragment>
  )
}

export default Home