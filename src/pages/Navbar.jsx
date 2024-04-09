import '../pages/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../components/assets/fibonacci5.png'
import cart_icon from '../components/assets/cart_icon.png'
import Button from 'react-bootstrap/Button';
export const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img scr={logo} alt="" />
            <p>FIBONACCI</p>

        </div>

        <ul className="nav-menu">
        
            <li><Link to='/Aboutus'><Button variant="">About Us</Button></Link></li>
            <li><Link to='/Men'><Button variant="">Men</Button></Link></li>
            <li><Link to='/Women'><Button variant="">Women</Button></Link></li>
            
        </ul>
        <div className="nav-loging-cart">
        <Link to='/LoginSingup'><button>Login</button></Link>
        <Link to='/Cart'><img src={cart_icon} alt=""className='cart' /></Link>
            <div className="nav-cart-count">0</div>


        </div>
    </div>
  )
}

