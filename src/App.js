
import './App.css';
import {Home} from './pages/Home'
import {Routes,Route,BrowserRouter} from 'react-router-dom' 
import {Men} from './pages/Men'
import {Women} from './pages/Women'
import {Aboutus} from './pages/Aboutus'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Product} from './pages/Product'
import {Cart} from './pages/Cart'
import {LoginSingup} from './pages/LoginSingup'


function App() {
  return (

    <BrowserRouter>
    <div className="App">


    <Routes>  
    
      <Route path='/' element={<Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Product' element={<Product/>}/> 
        <Route path=':productId' element={<Product/>}/> 
      <Route/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/LoginSingup' element={<LoginSingup/>}/>
    </Routes>  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
