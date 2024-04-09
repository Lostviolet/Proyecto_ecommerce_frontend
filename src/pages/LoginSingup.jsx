import { Button } from 'bootstrap'
import React from 'react'
import '../pages/LoginSingup.css'

export const LoginSingup = () => {
  return (
    <>
    <div className='LoginSingup'>
      <div className='LoginSingup-container'>
        <h1>Sing Up</h1>
        <div className='LoginSingup-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="text" placeholder='Email Address' />
    
          <input type="text" placeholder='Password' />
          <input type="text" placeholder='Confrim Password' />
        </div>
        
       <button>Continue</button>

    
        <p className='LoginSingup-login'>Already Have an Account?<span> Login Here</span></p>
        <div className='LoginSingup-agree'>
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
    </>

  )
}
