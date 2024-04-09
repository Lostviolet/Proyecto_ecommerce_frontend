import React from 'react';
import { Navbar } from "./Navbar"
import './Home.css'
import promo from '../components/assets/promo3.jpg'

export const Home = () => {
  return ( 
    
    <div>
      <Navbar/>
      <div className='Home'>
        <div className='Home-left'>
          <h2>New Arrivals Only</h2>
          <div>
            <img src={promo} alt=""/>

          </div>

        </div>

        <div className='Home-right'>


        </div>

      </div>
   




    </div>
    
  )
}
