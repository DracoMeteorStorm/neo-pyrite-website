import './App.css'
import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/Draco';
import Mukk from '../components/Mukk';
import Melk from '../components/Melk';
import Amigo from '../components/Amigo';
import Charm from '../components/Charm';
import Septic from '../components/Septic';
import FullLogo_HQ_Transparent_Crop from '../assets/FullLogo_HQ_Transparent_Crop.png'
import Twitter_Banner from './assets/Twitter_Banner.jpg'
import YT_Banner from '../assets/YT_Banner.jpg'
import hamburger from '../assets/sort.png'

const App: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const collapseButtons = () =>{
setMenuVisible(!menuVisible);


if(document.documentElement.clientWidth > 1000){
  setMenuVisible(menuVisible);
}

  }

  return (

    <Router>
    
    <div className='App'>
        <div className='header'>
        <div className='container-row' style={{margin:"15px"}}>
          <div className='container-col-left' style={{width:"15%"}}>
            <img height='100px' src= {FullLogo_HQ_Transparent_Crop}/>

            <a href='javascript:void(0);'>
            <img height='50px' className='mobile-only' src={hamburger} onClick={collapseButtons}/></a>
            </div>
          
          <div className='container-col-right' style={{width:"85%",transition:(".2s ease")}}>
        

        
                    
        <Link to="/neo-pyrite-website/">
          <button className='header-buttons' style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Home
          </button></Link>
          <Link to="/neo-pyrite-website/draco">
            <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Draco
          </button></Link>
          <Link to="/neo-pyrite-website/mukk">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Mukk
          </button></Link>
          <Link to="/neo-pyrite-website/melk">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Melk
          </button></Link>
          <Link to="/neo-pyrite-website/charm">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Charm
          </button></Link>
          <Link to="/neo-pyrite-website/amigo">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Amigo
          </button></Link>
          <Link to="/neo-pyrite-website/septic">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            Septic
          </button></Link>
          <Link to="/neo-pyrite-website/about">
          <button className='header-buttons'  style={{display:(menuVisible ? 'inline-flex' : 'none')}} onClick={collapseButtons}>
            About
          </button></Link>

        </div></div>

        </div>
          

        </div>
        <img width='100%' className='static-background' src = {YT_Banner}/>
        
        <div id="content">
        <Routes>
            <Route path='/neo-pyrite-website/' element={<Home />} />
            <Route path='/neo-pyrite-website/about' element={<About />} />
            <Route path='/neo-pyrite-website/draco' element={<Draco />} />
            <Route path='/neo-pyrite-website/mukk' element={<Mukk />} />
            <Route path='/neo-pyrite-website/melk' element={<Melk />} />
            <Route path='/neo-pyrite-website/charm' element={<Charm />} />
            <Route path='/neo-pyrite-website/amigo' element={<Amigo />} />
            <Route path='/neo-pyrite-website/septic' element={<Septic />} />
          </Routes>



        </div>
        <div className='footer'>hiiiiiiiii</div>
    
        

        
 
    </Router>
  );
}

export default App;
